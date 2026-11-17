import React, { useState } from 'react';
import { CloudSun, Cpu, ShieldAlert, Camera, Bot, CheckCircle2, ArrowRight, ArrowLeft, Activity, Maximize2, ArrowUpRight } from 'lucide-react';
import Interactive3DTilt from './Interactive3DTilt';

export default function HowProjectWorks({ onOpenImage }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: CloudSun,
      accent: "from-sky-500 to-blue-600",
      accentBg: "bg-sky-50 text-sky-700 border-sky-200/60",
      tag: "Live Boundary Data Ingestion",
      title: "Atmospheric Weather Integration",
      shortTitle: "Weather Ingestion",
      image: {
        src: "/assets/microclimate_week.png",
        title: "Live Meteorological Sequence Tracking",
        tag: "Live Weather Feed",
        caption: "Hourly outdoor temperature, solar flux, and humidity ingested to drive the virtual greenhouse twin."
      },
      desc: "Connects directly to open, high-resolution meteorological feeds for the exact geographic coordinates of the greenhouse. Continuously tracks ambient outdoor temperature, relative humidity, solar irradiance, and wind velocity without requiring on-site outdoor weather stations.",
      benefit: "Saves growers $600 to $1,800 per polyhouse bay by eliminating the purchase, cabling, and upkeep of outdoor physical sensor clusters.",
      metrics: [
        { label: "Data Source", value: "Open High-Res Meteorological Feed", note: "Zero external hardware" },
        { label: "Observation Cadence", value: "Hourly Continuous Polling", note: "Real-time updates" },
        { label: "Physical Hardware", value: "0 External Station Nodes", note: "Pure software link" },
        { label: "Geographic Resolution", value: "Coordinates 10.36°N, 77.98°E", note: "Dindigul validation" }
      ]
    },
    {
      num: "02",
      icon: Cpu,
      accent: "from-blue-600 to-indigo-600",
      accentBg: "bg-blue-50 text-blue-700 border-blue-200/60",
      tag: "Software Digital Twin Engine",
      title: "First-Principles Polyhouse Simulation",
      shortTitle: "Climate Simulation",
      image: {
        src: "/assets/psychrometric_model.jpg",
        title: "Thermodynamic Polyhouse Energy Balance",
        tag: "Physics Simulation",
        caption: "Coupled differential equations modeling heat flux, ventilation, crop transpiration, and leaf wetness."
      },
      desc: "Applies mathematical thermodynamics and energy balance calculations to compute the polyhouse indoor microclimate. By modeling solar transmission, crop transpiration, convective air exchange, and wall thermal inertia, it accurately derives indoor air temperature, humidity, dew point, and leaf wetness.",
      benefit: "Entirely immune to sensor calibration drift, corrosive agrochemical sprays, and bio-fouling from routine foliar applications.",
      metrics: [
        { label: "Greenhouse Model", value: "3,000 m³ Quonset Geometry", note: "Multi-span polyhouse" },
        { label: "Simulated States", value: "Temperature, RH & Leaf Moisture", note: "Complete internal state" },
        { label: "Physical Sensor Drift", value: "0% Over Extended Lifecycles", note: "Physics-grounded" },
        { label: "Computation Time", value: "Sub-second Execution", note: "Lightweight CPU model" }
      ]
    },
    {
      num: "03",
      icon: ShieldAlert,
      accent: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      tag: "Temporal Deep Learning",
      title: "72-Hour Pre-Symptomatic Early Warning",
      shortTitle: "72h Early Warning",
      image: {
        src: "/assets/lstm_roc.png",
        title: "Pre-Symptomatic Sequence ROC Trajectory",
        tag: "Temporal Forecasting",
        caption: "Evaluated across 17,544 sequential hours with 0.854 ROC-AUC score at 24 hours advance horizon."
      },
      desc: "Feeds rolling 7-day microclimatic sequences into a bidirectional sequence neural network with multi-head attention. It identifies silent spore germination windows and pathogen incubation hours for Early Blight and Late Blight up to 3 days before any visible lesions appear on leaves.",
      benefit: "Enables preventative climate adjustments (opening ridge vents, switching air circulation) so fungal spores cannot germinate.",
      metrics: [
        { label: "Advance Warning", value: "24h, 48h & 72h Horizons", note: "Actionable lead time" },
        { label: "Temporal Memory", value: "168-Hour Rolling Window", note: "7 full days history" },
        { label: "Target Pathologies", value: "Late Blight & Early Blight", note: "Key greenhouse threats" },
        { label: "Validation Metric", value: "0.854 ROC-AUC (24h Window)", note: "17,544 test hours" }
      ]
    },
    {
      num: "04",
      icon: Camera,
      accent: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 text-amber-700 border-amber-200/60",
      tag: "High-Speed Neural Vision",
      title: "Real-Time Foliar Pathology Scanning",
      shortTitle: "Leaf Vision Scan",
      image: {
        src: "/assets/diagnosis_case.jpg",
        title: "Field Foliar Diagnostic Verification Case",
        tag: "Computer Vision",
        caption: "Leaf pathology scanning running in 14.2 milliseconds with 99.74% classification confidence."
      },
      desc: "When visible spots or anomalies occur on tomato foliage, optimized neural vision classifiers inspect leaf photographs to rapidly identify 6 distinct tomato diseases. Operates with near-instantaneous speed on standard mobile cameras or low-power edge processors.",
      benefit: "Provides immediate, objective botanical verification directly in the field without needing lab testing or agronomy technicians.",
      metrics: [
        { label: "Target Disease Classes", value: "6 Foliar Pathologies + Healthy", note: "Tomato specialized" },
        { label: "Validation Accuracy", value: "99.74% Top-1 Accuracy", note: "100% test holdout" },
        { label: "Edge Latency", value: "14.2 ms on Standard CPU", note: "Sub-frame speed" },
        { label: "Model Memory", value: "20.9 MB Compressed Weight", note: "Ultra-portable" }
      ]
    },
    {
      num: "05",
      icon: Bot,
      accent: "from-purple-500 to-indigo-600",
      accentBg: "bg-purple-50 text-purple-700 border-purple-200/60",
      tag: "Deterministic Bio-Safety Edge SLM",
      title: "Context-Aware Farmer Guidance Engine",
      shortTitle: "Safe Agronomic Advice",
      image: {
        src: "/assets/dual_vision_gate.jpg",
        title: "Dual-Vision Phenological Bio-Safety Gate",
        tag: "Safety Interlock",
        caption: "Deterministic hardware interlock barring daytime spray during flowering and chemical use at harvest."
      },
      desc: "An offline edge reasoning language model synthesizes climate risk forecasts, crop growth stages, and leaf diagnoses to provide tailored treatment steps. A built-in phenological safety interlock enforces vital biological rules—strictly banning daytime spraying during flowering and blocking synthetic chemicals near harvest.",
      benefit: "Safeguards pollinating honeybees, guarantees zero chemical residue on harvested tomatoes, and runs 100% offline in English and Tamil.",
      metrics: [
        { label: "Bio-Safety Interlock", value: "Deterministic Rule Gating", note: "Cannot be hallucinated" },
        { label: "Pollinator Protection", value: "10 AM – 4 PM Spray Lockout", note: "Protects honeybees" },
        { label: "Pre-Harvest Interval", value: "Strict Bio-Only Near Harvest", note: "Residue-free produce" },
        { label: "Language Capabilities", value: "Technical English & Native Tamil", note: "Bilingual agronomist" }
      ]
    }
  ];

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section id="workflow" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062ff] block mb-1">
            SYSTEM METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900">
            End-to-End System Methodology & Pipeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
            A multi-stage engineering methodology linking regional atmospheric boundary ingestion, thermodynamic physics simulation, sequence risk forecasting, dual-model computer vision, and offline edge agronomic advisory.
          </p>
        </div>

        {/* Step Selector Horizontal Bar (Gapsy Clean Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((st, idx) => {
            const StepIcon = st.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#0062ff] to-[#4f46e5] text-white shadow-md shadow-blue-500/25'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200/80 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${
                    isSelected ? 'text-white bg-white/20 px-2 py-0.5 rounded' : 'text-slate-500'
                  }`}>
                    STAGE {st.num}
                  </span>
                  <StepIcon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </div>

                <h4 className="text-xs sm:text-sm font-bold tracking-tight truncate">
                  {st.shortTitle}
                </h4>
                <p className={`text-[10px] truncate mt-0.5 ${
                  isSelected ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  {st.tag}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Display Bento Card */}
        <Interactive3DTilt maxTilt={4} scale={1.01} perspective={1400} glare={false} className="mb-10">
          <div className="gapsy-card p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#f0f0f4] text-[#0d0d11] border border-black/[0.06] inline-block mb-3">
                  STAGE {current.num} OF 05 • {current.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d11] tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm text-[#484852] leading-relaxed mt-3 font-normal">
                  {current.desc}
                </p>
              </div>

              {/* Farmer Benefit Strip */}
              <div className="p-4 rounded-2xl bg-[#edfcf2] border border-[#b7f4cb] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#087443] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#087443]">
                  <strong className="text-[#0d0d11] font-bold block mb-0.5">Practical Farmer Benefit:</strong>
                  <span>{current.benefit}</span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-2 text-xs">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-4 py-2 rounded-full bg-[#f0f0f4] hover:bg-[#e6e6ec] text-[#0d0d11] font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2 rounded-full bg-[#0052cc] hover:bg-[#0047b3] text-white font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-[#86868b] ml-auto font-mono font-bold">
                  {activeStep + 1} / 5
                </span>
              </div>
            </div>

            {/* Right Metrics & Stage Image Card */}
            <div className="lg:col-span-5 space-y-4">
              {current.image && (
                <div 
                  className="p-3 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] group cursor-pointer"
                  onClick={() => onOpenImage && onOpenImage({
                    src: current.image.src,
                    title: current.image.title,
                    tag: current.image.tag,
                    description: current.image.caption
                  })}
                >
                  <div className="overflow-hidden rounded-xl bg-slate-200 relative">
                    <img
                      src={current.image.src}
                      alt={current.image.title}
                      className="w-full h-auto object-cover max-h-[200px] rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Maximize2 className="w-3 h-3" />
                        Inspect Figure
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 px-1 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0d0d11] truncate">{current.image.title}</span>
                    <span className="font-mono text-[10px] text-[#0052cc] font-semibold bg-[#eef4ff] px-2 py-0.5 rounded border border-[#cce0ff] shrink-0 ml-2">
                      {current.image.tag}
                    </span>
                  </div>
                </div>
              )}

              {/* 4 Clean Spec Tiles */}
              <div className="grid grid-cols-2 gap-2.5">
                {current.metrics.map((m, mi) => (
                  <div 
                    key={mi} 
                    className="p-3 rounded-xl bg-[#f7f7f9] border border-black/[0.04]"
                  >
                    <div className="text-[10px] text-[#62626e] font-semibold">{m.label}</div>
                    <div className="text-xs font-bold text-[#0d0d11] truncate mt-0.5">{m.value}</div>
                    <div className="text-[10px] font-mono text-[#0052cc] font-semibold truncate mt-0.5">{m.note}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Interactive3DTilt>

        {/* Full Architecture Blueprint Banner (Luminous Luxury Card) */}
        <Interactive3DTilt maxTilt={5} scale={1.01} perspective={1400} glare={false}>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 border border-blue-200/90 shadow-[0_12px_36px_-6px_rgba(0,98,255,0.09)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded border border-blue-200 shadow-2xs">
                CYBER-PHYSICAL BLUEPRINT
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                End-to-End System Runtime Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Complete 5-tier architecture connecting live boundary ingestion with thermodynamic simulation, temporal sequence forecasting, and offline edge agronomic advisory.
              </p>
            </div>

            <button
              onClick={() => onOpenImage && onOpenImage({
                src: "/assets/runtime_architecture.png",
                title: "End-to-End Cyber-Physical Runtime Architecture",
                tag: "System Architecture",
                description: "Complete architectural blueprint connecting open meteorological boundary data with thermodynamic simulation, temporal sequence learning, dual-model computer vision, and offline edge agronomic reasoning."
              })}
              className="gapsy-btn-primary shrink-0"
            >
              <span>Inspect Blueprint</span>
              <div className="gapsy-btn-arrow">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </Interactive3DTilt>

      </div>
    </section>
  );
}
