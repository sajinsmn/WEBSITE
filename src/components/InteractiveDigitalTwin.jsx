import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Wind, 
  Sun, 
  Droplets, 
  Thermometer, 
  Fan, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle,
  RotateCcw,
  Zap,
  Sliders,
  Cpu
} from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function InteractiveDigitalTwin() {
  // Weather boundary conditions (Dindigul Polyhouse)
  const [ambientTemp, setAmbientTemp] = useState(28); // °C
  const [ambientRH, setAmbientRH] = useState(78); // %
  const [solarRadiation, setSolarRadiation] = useState(650); // W/m²

  // Virtual Actuators
  const [ventOpen, setVentOpen] = useState(30); // 0-100%
  const [exhaustFan, setExhaustFan] = useState(false);
  const [fogger, setFogger] = useState(false);
  const [shadeScreen, setShadeScreen] = useState(false);

  // Psychrometric Physics Engine (Direct Magnus-Tetens implementation)
  const calculated = useMemo(() => {
    // 1. Solar heat gain into 3,000 m³ volume
    let effectiveSolar = solarRadiation * (shadeScreen ? 0.45 : 0.85);
    let solarHeatRise = (effectiveSolar * 0.0055); // °C rise from solar trapping

    // 2. Cooling effect of ventilation & fans
    let ventCooling = (ventOpen / 100) * 2.8;
    let fanCooling = exhaustFan ? 3.5 : 0;
    let foggerCooling = fogger ? 4.2 : 0;

    let indoorTemp = ambientTemp + solarHeatRise - ventCooling - fanCooling - foggerCooling;
    indoorTemp = Math.max(12, Math.min(50, indoorTemp));

    // 3. Indoor Relative Humidity dynamics
    // Transpiration increases RH; exhaust fans flush humidity; foggers pump moisture
    let transpirationRH = 6.0;
    let fanRHFlush = exhaustFan ? -18.0 : 0;
    let ventRHFlush = (ventOpen / 100) * -8.0;
    let foggerRHAdd = fogger ? 25.0 : 0;

    let indoorRH = ambientRH + transpirationRH + fanRHFlush + ventRHFlush + foggerRHAdd;
    indoorRH = Math.max(20, Math.min(99.5, indoorRH));

    // 4. Magnus-Tetens Psychrometric Equations
    const a = 17.27;
    const b = 237.3;

    // Saturated Vapor Pressure Es (kPa)
    const Es = 0.61078 * Math.exp((a * indoorTemp) / (indoorTemp + b));

    // Actual Vapor Pressure Ea (kPa)
    const Ea = Es * (indoorRH / 100);

    // Vapor Pressure Deficit VPD (kPa)
    const vpd = Math.max(0, Es - Ea);

    // Dew Point Tdew (°C)
    const alpha = ((a * indoorTemp) / (indoorTemp + b)) + Math.log(indoorRH / 100);
    const dewPoint = (b * alpha) / (a - alpha);

    // Fungal Disease Risk Assessment
    let riskLevel = 'OPTIMAL';
    let riskScore = 15;
    let pathogenThreat = 'None - Microclimate within physiological equilibrium';

    if (vpd < 0.4 || (indoorRH > 88 && indoorTemp >= 16 && indoorTemp <= 24)) {
      riskLevel = 'CRITICAL';
      riskScore = 92;
      pathogenThreat = 'Phytophthora infestans (Late Blight) Spore Germination Active!';
    } else if (vpd < 0.7 || (indoorRH > 80 && indoorTemp >= 24 && indoorTemp <= 30)) {
      riskLevel = 'MODERATE';
      riskScore = 58;
      pathogenThreat = 'Alternaria solani (Early Blight) Condensation Trigger';
    } else if (vpd > 1.6) {
      riskLevel = 'HEAT_STRESS';
      riskScore = 40;
      pathogenThreat = 'Excess Transpiration - Stomatal Closure & Blossom End Rot';
    }

    // Organ Stress Level Simulation (Leaves, Fruit, Stem, Roots)
    const organStress = {
      leaves: Math.round(Math.min(100, Math.max(5, (riskScore * 0.45) + (indoorTemp > 32 ? 25 : 5)))),
      fruit: Math.round(Math.min(100, Math.max(2, (riskScore * 0.25) + (vpd > 1.5 ? 20 : 3)))),
      stem: Math.round(Math.min(100, Math.max(3, (riskScore * 0.30)))),
      roots: Math.round(Math.min(100, Math.max(2, (indoorTemp > 34 ? 18 : 2))))
    };

    return {
      indoorTemp: indoorTemp.toFixed(1),
      indoorRH: indoorRH.toFixed(1),
      Es: Es.toFixed(2),
      Ea: Ea.toFixed(2),
      vpd: vpd.toFixed(2),
      dewPoint: dewPoint.toFixed(1),
      riskLevel,
      riskScore,
      pathogenThreat,
      organStress
    };
  }, [ambientTemp, ambientRH, solarRadiation, ventOpen, exhaustFan, fogger, shadeScreen]);

  const resetPreset = (type) => {
    if (type === 'danger') {
      setAmbientTemp(19);
      setAmbientRH(92);
      setSolarRadiation(100);
      setVentOpen(0);
      setExhaustFan(false);
      setFogger(false);
      setShadeScreen(false);
    } else if (type === 'optimal') {
      setAmbientTemp(26);
      setAmbientRH(68);
      setSolarRadiation(600);
      setVentOpen(45);
      setExhaustFan(true);
      setFogger(false);
      setShadeScreen(false);
    } else if (type === 'hot') {
      setAmbientTemp(36);
      setAmbientRH(42);
      setSolarRadiation(950);
      setVentOpen(70);
      setExhaustFan(true);
      setFogger(true);
      setShadeScreen(true);
    }
  };

  return (
    <section id="simulator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Hardware-Free Psychrometric Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Thermodynamic Digital Twin & What-If Studio
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Test the real-time mathematical physics engine. Modulate outdoor weather and toggle polyhouse actuators to evaluate microclimate and disease risk without physical hardware.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs text-slate-400 font-medium mr-1">Load Microclimate Scenario:</span>
          <button
            onClick={() => resetPreset('danger')}
            className="px-3 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 text-xs font-semibold border border-rose-800 transition-all"
          >
            ⚠️ High Fungal Spore Risk (Nighttime Damp)
          </button>
          <button
            onClick={() => resetPreset('optimal')}
            className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 text-xs font-semibold border border-emerald-800 transition-all"
          >
            🌱 Physiological Optimum (VPD 0.8–1.2 kPa)
          </button>
          <button
            onClick={() => resetPreset('hot')}
            className="px-3 py-1.5 rounded-lg bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 text-xs font-semibold border border-amber-800 transition-all"
          >
            ☀️ Midday Solar Peak (Transpiration Stress)
          </button>
        </div>

        {/* Main Grid: Controls on Left, Calculations & Twin on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Outdoor Weather Boundary */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-400" />
                  Outdoor Boundary Inputs (Open-Meteo)
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  Dindigul (10.36°N)
                </span>
              </div>

              {/* Temp Slider */}
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-rose-400" />
                    Ambient Temperature
                  </span>
                  <span className="font-mono font-bold text-white">{ambientTemp} °C</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="45"
                  step="1"
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* RH Slider */}
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-sky-400" />
                    Ambient Relative Humidity
                  </span>
                  <span className="font-mono font-bold text-white">{ambientRH} %</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="1"
                  value={ambientRH}
                  onChange={(e) => setAmbientRH(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Solar Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    Solar Irradiance
                  </span>
                  <span className="font-mono font-bold text-white">{solarRadiation} W/m²</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1100"
                  step="25"
                  value={solarRadiation}
                  onChange={(e) => setSolarRadiation(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            {/* Actuators Control Studio */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  What-If Actuator Override Controls
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  Closed-Loop
                </span>
              </div>

              {/* Roof Vent Slider */}
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5 text-teal-400" />
                    Roof Natural Ventilation
                  </span>
                  <span className="font-mono font-bold text-white">{ventOpen}% Open</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={ventOpen}
                  onChange={(e) => setVentOpen(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
              </div>

              {/* Actuator Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => setExhaustFan(!exhaustFan)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    exhaustFan
                      ? 'bg-emerald-500/20 border-emerald-500/50 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Fan className={`w-4 h-4 ${exhaustFan ? 'animate-spin text-emerald-400' : 'text-slate-500'}`} />
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${exhaustFan ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-800'}`}>
                      {exhaustFan ? 'ON' : 'OFF'}
                    </span>
                  </div>
                  <span className="text-xs font-semibold">Exhaust Fans</span>
                </button>

                <button
                  onClick={() => setFogger(!fogger)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    fogger
                      ? 'bg-sky-500/20 border-sky-500/50 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Droplets className={`w-4 h-4 ${fogger ? 'text-sky-400' : 'text-slate-500'}`} />
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${fogger ? 'bg-sky-500/30 text-sky-300' : 'bg-slate-800'}`}>
                      {fogger ? 'ON' : 'OFF'}
                    </span>
                  </div>
                  <span className="text-xs font-semibold">Misting Fog</span>
                </button>

                <button
                  onClick={() => setShadeScreen(!shadeScreen)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    shadeScreen
                      ? 'bg-amber-500/20 border-amber-500/50 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Sun className={`w-4 h-4 ${shadeScreen ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${shadeScreen ? 'bg-amber-500/30 text-amber-300' : 'bg-slate-800'}`}>
                      {shadeScreen ? 'ON' : 'OFF'}
                    </span>
                  </div>
                  <span className="text-xs font-semibold">Shade Screen</span>
                </button>
              </div>
            </div>

          </div>

          {/* Calculations & Twin State Display (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Digital Twin State HUD */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Virtual Polyhouse Thermodynamic State
                  </h3>
                  <p className="text-xs text-slate-400">
                    Calculated entirely via software psychrometrics ($0 sensor cost)
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    3,000 m³ Twin
                  </span>
                </div>
              </div>

              {/* Main Psychrometric Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Indoor Temp</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">{calculated.indoorTemp}</span>
                    <span className="text-xs font-mono text-rose-400">°C</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Δ {((calculated.indoorTemp - ambientTemp) >= 0 ? '+' : '') + (calculated.indoorTemp - ambientTemp).toFixed(1)}°C</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Indoor Humidity</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">{calculated.indoorRH}</span>
                    <span className="text-xs font-mono text-sky-400">%</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Dew Point: {calculated.dewPoint}°C</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30">
                  <span className="text-[10px] text-emerald-400 uppercase font-bold block mb-1">VPD (Deficit)</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-emerald-400">{calculated.vpd}</span>
                    <span className="text-xs font-mono text-emerald-300">kPa</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Es: {calculated.Es} | Ea: {calculated.Ea}</span>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  calculated.riskLevel === 'CRITICAL' 
                    ? 'bg-rose-950/40 border-rose-500/50' 
                    : calculated.riskLevel === 'MODERATE'
                    ? 'bg-amber-950/40 border-amber-500/50'
                    : 'bg-emerald-950/40 border-emerald-500/50'
                }`}>
                  <span className="text-[10px] uppercase font-bold block mb-1 text-slate-300">Pathogen Risk</span>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-black ${
                      calculated.riskLevel === 'CRITICAL' ? 'text-rose-400' :
                      calculated.riskLevel === 'MODERATE' ? 'text-amber-400' : 'text-emerald-400'
                    }`}>
                      {calculated.riskScore}%
                    </span>
                    <span className="text-[10px] font-mono uppercase font-bold ml-1 text-slate-300">
                      {calculated.riskLevel}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">Fungal index</span>
                </div>
              </div>

              {/* Pathogen Threat Banner */}
              <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                calculated.riskLevel === 'CRITICAL'
                  ? 'bg-rose-900/30 border-rose-500/50 text-rose-200'
                  : calculated.riskLevel === 'MODERATE'
                  ? 'bg-amber-900/30 border-amber-500/50 text-amber-200'
                  : 'bg-emerald-900/30 border-emerald-500/50 text-emerald-200'
              }`}>
                {calculated.riskLevel === 'CRITICAL' ? (
                  <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                ) : calculated.riskLevel === 'MODERATE' ? (
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                <div className="text-xs">
                  <span className="font-bold block">Digital Twin Epidemiological Diagnosis:</span>
                  <span className="text-slate-300">{calculated.pathogenThreat}</span>
                </div>
              </div>

              {/* 4-Organ Plant Stress Telemetry HUD (matching thesis dashboard) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    4-Organ Vegetative Stress Telemetry (Three.js Model Mapping)
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Shivam / US 440
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Foliar (Leaves)</span>
                      <strong className="text-emerald-400">{calculated.organStress.leaves}%</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full transition-all duration-300" style={{ width: `${calculated.organStress.leaves}%` }} />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Fruit (Vascular)</span>
                      <strong className="text-amber-400">{calculated.organStress.fruit}%</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full transition-all duration-300" style={{ width: `${calculated.organStress.fruit}%` }} />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Stem (Xylem)</span>
                      <strong className="text-teal-400">{calculated.organStress.stem}%</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-400 h-full rounded-full transition-all duration-300" style={{ width: `${calculated.organStress.stem}%` }} />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="flex justify-between text-slate-400 mb-1">
                      <span>Roots (Osmotic)</span>
                      <strong className="text-sky-400">{calculated.organStress.roots}%</strong>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full rounded-full transition-all duration-300" style={{ width: `${calculated.organStress.roots}%` }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
