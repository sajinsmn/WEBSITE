import React, { useState } from 'react';
import { Target, Leaf, Sparkles, CheckCircle2, ShieldCheck, Layers, Eye } from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function DualVisionSection() {
  const [activeEngine, setActiveEngine] = useState('yolo');
  const [selectedDisease, setSelectedDisease] = useState(0);
  const [selectedStage, setSelectedStage] = useState(1); // default Flowering

  const diseases = [
    {
      name: "Early Blight",
      pathogen: "Alternaria solani",
      symptoms: "Concentric target-board brown rings with chlorotic yellow halos on mature lower leaves.",
      riskFactor: "Prolonged leaf wetness > 8h at 24°C–30°C.",
      treatment: "Bio: Trichoderma viride. Chemical: Mancozeb 75% WP @ 2g/L (Non-Harvest only)."
    },
    {
      name: "Late Blight",
      pathogen: "Phytophthora infestans",
      symptoms: "Water-soaked dark lesions with white fuzzy sporulation on leaf undersides; rapid necrosis.",
      riskFactor: "Saturated humidity (>90%) with cool temperatures (16°C–22°C).",
      treatment: "Bio: Pseudomonas fluorescens. Chemical: Metalaxyl-M + Mancozeb @ 2.5g/L."
    },
    {
      name: "Leaf Mold",
      pathogen: "Passalora fulva (Fulvia fulva)",
      symptoms: "Pale green to yellowish spots on upper leaf surfaces; olive-brown velvety mold underneath.",
      riskFactor: "Relative humidity > 85% with warm polyhouse air (22°C–26°C).",
      treatment: "Cultural: Increase ventilation; Difenoconazole 25% EC @ 0.5 mL/L."
    },
    {
      name: "Powdery Mildew",
      pathogen: "Leveillula taurica / Oidium neolycopersici",
      symptoms: "White powdery fungal mycelium patches on foliar tissue leading to desiccation and leaf drop.",
      riskFactor: "Dry air with high night humidity; low air velocity.",
      treatment: "Bio: Wettable Sulfur 80% WP @ 2g/L; Potassium bicarbonate."
    },
    {
      name: "Septoria Leaf Spot",
      pathogen: "Septoria lycopersici",
      symptoms: "Small, circular spots with dark brown margins and sunken grayish-white centers with pycnidia.",
      riskFactor: "Splashing water droplets and relative humidity > 80%.",
      treatment: "Copper oxychloride 50% WP @ 2.5g/L (Non-Flowering only)."
    },
    {
      name: "Spider Mites",
      pathogen: "Tetranychidae (Two-Spotted Spider Mite)",
      symptoms: "Fine foliar stippling, chlorosis, and micro-webbing on leaf undersides and terminal shoots.",
      riskFactor: "Hot, dry polyhouse microclimate (VPD > 1.8 kPa, Temp > 32°C).",
      treatment: "Bio: Neem oil 10,000 ppm @ 3 mL/L; Predatory mites (Phytoseiulus persimilis)."
    }
  ];

  const stages = [
    {
      name: "Vegetative Stage",
      code: "S1_VEG",
      days: "Days 1–28 post-transplant",
      rules: "Systemic fungicides permitted; canopy building priority. Maintain VPD 0.8–1.1 kPa."
    },
    {
      name: "Flowering Stage",
      code: "S2_FLOWER",
      days: "Days 29–45 post-transplant",
      rules: "SAFETY LOCK ACTIVE: Daytime spray ban (10 AM–4 PM) to protect Apis mellifera bees. No copper compounds."
    },
    {
      name: "Early Fruit Formation",
      code: "S3_FRUIT_INIT",
      days: "Days 46–65 post-transplant",
      rules: "Monitor calcium transport; prevent blossom end rot via steady VPD. Bio-fungicide rotation."
    },
    {
      name: "Mature Green Stage",
      code: "S4_MATURE_GREEN",
      days: "Days 66–80 post-transplant",
      rules: "Last window for systemic fungicides with 14-day PHI. Ensure zero chemical drift."
    },
    {
      name: "Breaker / Turning Stage",
      code: "S5_BREAKER",
      days: "Days 81–95 post-transplant",
      rules: "Chemical lockout initiated. Only bio-antagonists and botanical extracts permitted."
    },
    {
      name: "Ripe Harvest Stage",
      code: "S6_HARVEST",
      days: "Days 96–140 post-transplant",
      rules: "STRICT HARVEST LOCKOUT: 7–14 day PHI chemicals banned. Zero-residue biologicals only."
    }
  ];

  return (
    <section id="vision" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Dual-Engine Computer Vision Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Synchronized Disease Classification & Phenological Gating
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Diagnosing pathology without understanding the plant's developmental stage is dangerous. Our framework couples YOLOv11m disease identification with EfficientNet-B0 phenology to govern chemical safety.
          </p>
        </div>

        {/* Engine Toggle Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveEngine('yolo')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeEngine === 'yolo'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Ultralytics YOLOv11m (Disease Classification)</span>
            <span className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-slate-950 text-emerald-400">
              99.74%
            </span>
          </button>

          <button
            onClick={() => setActiveEngine('phenology')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeEngine === 'phenology'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>EfficientNet-B0 (Phenology Growth Stage)</span>
            <span className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-slate-950 text-emerald-400">
              99.45%
            </span>
          </button>
        </div>

        {/* YOLOv11 Engine Content */}
        {activeEngine === 'yolo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            
            {/* Left: 6 Disease Class Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase font-mono">
                  Diagnostic Target Classes (11,502 Images)
                </span>
                <span className="text-[11px] font-mono text-emerald-400">100% Test Top-1</span>
              </div>

              {diseases.map((d, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDisease(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    selectedDisease === idx
                      ? 'bg-slate-900 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{d.name}</span>
                    <span className="text-[10px] font-mono italic text-emerald-400">{d.pathogen}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{d.symptoms}</p>
                </button>
              ))}

              {/* Selected Disease Detailed Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Agronomic Diagnostic Profile: {diseases[selectedDisease].name}
                </span>
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">Pathology:</strong> {diseases[selectedDisease].symptoms}
                </p>
                <p className="text-slate-300">
                  <strong className="text-amber-300">Microclimate Trigger:</strong> {diseases[selectedDisease].riskFactor}
                </p>
                <p className="text-slate-300 pt-1 border-t border-slate-800">
                  <strong className="text-emerald-400">Standard Mitigation:</strong> {diseases[selectedDisease].treatment}
                </p>
              </div>
            </div>

            {/* Right: Confusion Matrix & Model Training Curves (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="glass-card rounded-2xl p-5 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    YOLOv11m Normalized Confusion Matrix
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    20.1M Params • 20.9 MB
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                  <img
                    src="/assets/yolo_cm_norm.png"
                    alt="YOLOv11m Normalized Confusion Matrix"
                    className="w-full h-auto object-contain max-h-[350px] rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sample Predictions Batch */}
              <div className="glass-card rounded-2xl p-4 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Validation Ground Truth vs YOLOv11 Bounding Diagnostics
                </span>
                <img
                  src="/assets/samples_disease.jpg"
                  alt="YOLOv11 Foliar Disease Visual Samples"
                  className="w-full h-auto object-cover max-h-[160px] rounded-lg border border-slate-800"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        )}

        {/* Phenology Engine Content */}
        {activeEngine === 'phenology' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            
            {/* Left: 6 Phenological Stages (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase font-mono">
                  Developmental Stages (21,711 Images)
                </span>
                <span className="text-[11px] font-mono text-emerald-400">99.45% Test Acc</span>
              </div>

              {stages.map((stg, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedStage(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    selectedStage === idx
                      ? 'bg-slate-900 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-white">{stg.name}</span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{stg.code}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{stg.days}</p>
                </button>
              ))}

              {/* Selected Stage Safety Protocol */}
              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                selectedStage === 1 || selectedStage === 5 
                  ? 'bg-rose-950/40 border-rose-500/40' 
                  : 'bg-slate-900/90 border-slate-800'
              }`}>
                <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                  selectedStage === 1 || selectedStage === 5 ? 'text-rose-400' : 'text-emerald-400'
                }`}>
                  Safety Interlock Directive: {stages[selectedStage].name}
                </span>
                <p className="text-slate-200 leading-relaxed">
                  {stages[selectedStage].rules}
                </p>
              </div>
            </div>

            {/* Right: Growth Confusion Matrix & Samples (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="glass-card rounded-2xl p-5 border border-slate-800 shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    EfficientNet-B0 Growth Stage Confusion Matrix
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    4.0M Params • 99.45% Accuracy
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                  <img
                    src="/assets/growth_cm.png"
                    alt="EfficientNet-B0 Growth Stage Confusion Matrix"
                    className="w-full h-auto object-contain max-h-[350px] rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Growth Samples */}
              <div className="glass-card rounded-2xl p-4 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Phenological Multi-Stage Visual Distribution
                </span>
                <img
                  src="/assets/samples_growth.jpg"
                  alt="Phenological Growth Stage Samples"
                  className="w-full h-auto object-cover max-h-[160px] rounded-lg border border-slate-800"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
