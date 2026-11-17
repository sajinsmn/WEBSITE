import React, { useState } from 'react';
import { Target, Trophy, ShieldCheck, Zap, TrendingUp, CheckCircle2, ArrowRight, Maximize2, Layers, ArrowUpRight } from 'lucide-react';
import Interactive3DTilt from './Interactive3DTilt';

export default function ProjectFocusAndAchievements({ onOpenImage }) {
  const [activeFocus, setActiveFocus] = useState(0);

  const focusAreas = [
    {
      id: "focus-1",
      num: "01",
      tag: "Objective 01",
      badge: "Thermodynamic Physics",
      title: "Elimination of In-Situ Sensor Hardware & Electrochemical Drift",
      subtitle: "Physics-grounded thermodynamic microclimate estimation immune to electrochemical sensor degradation",
      summary: "Conventional protected agriculture relies on commercial electronic IoT sensor clusters installed directly inside polyhouses. Under tropical ambient conditions (>95% relative humidity and frequent agrochemical spraying), physical probes suffer rapid electrochemical calibration drift, corrosion, and biological fouling.",
      solution: "This project implements a software-defined cyber-physical digital twin that couples open regional weather data with first-principles greenhouse thermodynamics, calculating indoor air temperature, relative humidity, vapor pressure deficit (VPD), dew point, and foliar moisture duration at zero hardware sensor cost.",
      image: {
        src: "/assets/psychrometric_model.jpg",
        title: "Thermodynamic Polyhouse Physics Model",
        tag: "Software Simulation",
        caption: "Coupled differential equations modeling heat flux, solar transmission, crop transpiration, and leaf wetness."
      },
      points: [
        "Eliminates capital expenditure ($600 to $1,800 per polyhouse bay) for physical sensors",
        "Zero sensor recalibration, zero electrochemical drift, and zero battery replacement overhead",
        "Complete immunity to agrochemical corrosion, condensation waterlogging, and bio-fouling"
      ]
    },
    {
      id: "focus-2",
      num: "02",
      tag: "Objective 02",
      badge: "Sequence Modeling",
      title: "Pre-Symptomatic Early Warning Sequence Forecasting",
      subtitle: "Bidirectional sequence modeling forecasting fungal pathogen incubation 24 to 72 hours ahead",
      summary: "Standard automated diagnostic tools operate reactively, detecting foliar pathology only after macroscopic necrotic lesions and irreversible tissue damage have already manifested.",
      solution: "A three-layer bidirectional LSTM network with multi-head self-attention analyzes 168-hour temporal microclimatic trends (continuous leaf wetness, nocturnal humidity, and temperature oscillations) to forecast disease attack windows 1 to 3 days before macroscopic lesion emergence.",
      image: {
        src: "/assets/samples_disease.jpg",
        title: "Botanical Foliar Disease Dataset (6 Pathologies)",
        tag: "Botanical Dataset",
        caption: "Real image specimens across 6 foliar diseases: Early Blight, Late Blight, Leaf Mold, Powdery Mildew, Septoria, and Mites."
      },
      points: [
        "Forecasts pathogen incubation windows 24, 48, and 72 hours in advance",
        "Enables non-chemical preventative cultural control (ventilation opening, circulation timing)",
        "Dramatically reduces emergency fungicide spraying by preventing initial spore germination"
      ]
    },
    {
      id: "focus-3",
      num: "03",
      tag: "Objective 03",
      badge: "Bio-Safety Gating",
      title: "Phenology-Gated Biological Safety & Offline Edge Advisory",
      subtitle: "Deterministic pollinator safety gating, pre-harvest interval compliance, and offline SLM reasoning",
      summary: "Unconstrained vision models frequently output generic chemical recommendations without context of the crop phenological stage, risking honeybee colony mortality during flowering and chemical residue violations at harvest.",
      solution: "An automated biological safety gating interlock coupled with an offline edge Small Language Model (Qwen2.5-3B-Instruct) strictly prohibits daytime spraying during active flowering and mandates biological antagonists near harvest, providing bilingual advisory in English and Tamil.",
      image: {
        src: "/assets/samples_growth.jpg",
        title: "6-Stage Tomato Phenological Stages",
        tag: "Phenology Stages",
        caption: "Vegetative, Flowering, Fruit Set, Green Fruit, Turning, and Mature Harvest stage classification."
      },
      points: [
        "Protects pollinating honeybees (Apis mellifera) during active flowering phases",
        "Enforces pre-harvest safety intervals (PHI) to guarantee zero toxic chemical residues at market",
        "Executes 100% offline on standard laptop CPU hardware using quantized GGUF artifacts"
      ]
    }
  ];

  const achievements = [
    {
      metric: "$0",
      label: "Sensor Hardware Cost",
      detail: "Completely eliminated indoor physical sensor requirements, saving $600–$1,800 per polyhouse bay.",
      tag: "Economic Feasibility",
      color: "text-[#0052cc]"
    },
    {
      metric: "72 Hours",
      label: "Pre-Symptomatic Warning",
      detail: "High predictive accuracy (ROC-AUC 0.854 at 24h, 0.792 at 48h) on 17,544 sequential microclimate hours.",
      tag: "Epidemiological Early Warning",
      color: "text-teal-700"
    },
    {
      metric: "99.74%",
      label: "Foliar Diagnostic Accuracy",
      detail: "Trained on 11,502 images across 6 diagnostic tomato diseases, achieving 100% accuracy on held-out test sets.",
      tag: "Computer Vision",
      color: "text-[#087443]"
    },
    {
      metric: "99.45%",
      label: "Growth Stage Recognition",
      detail: "Accurately detects 6 plant phenological stages to automatically enforce bee protection and harvest safety.",
      tag: "Biological Gating",
      color: "text-amber-700"
    },
    {
      metric: "1.93 GB",
      label: "Offline Edge Footprint",
      detail: "Fine-tuned on high-performance GPUs and compressed to run locally on a laptop CPU without internet connection.",
      tag: "Edge Compilation",
      color: "text-[#7c3aed]"
    },
    {
      metric: "Zero Drift",
      label: "Operational Stability",
      detail: "Unlike electrochemical probes that drift monthly, software thermodynamic equations maintain consistent mathematical fidelity.",
      tag: "System Reliability",
      color: "text-[#0d0d11]"
    }
  ];

  const currentFocus = focusAreas[activeFocus];

  return (
    <section id="focus" className="py-16 sm:py-20 bg-[#fbfbfd] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062ff] block mb-1">
            RESEARCH OBJECTIVES & SCOPE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900">
            Core Research Objectives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
            Investigating and addressing the operational failure modes of conventional IoT sensor hardware in tropical protected agriculture through software-defined cyber-physical systems.
          </p>
        </div>

        {/* 3 Strategic Focus Tabs (Luminous Bento Switcher) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {focusAreas.map((f, idx) => {
            const isSelected = activeFocus === idx;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFocus(idx)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white shadow-md border-2 border-[#0062ff]'
                    : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 shadow-2xs'
                }`}
              >
                {/* Background Watermark Number */}
                <span className="absolute top-2 right-4 text-5xl font-mono font-black text-slate-200/50 pointer-events-none">
                  {f.num}
                </span>

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    isSelected ? 'bg-gradient-to-r from-[#0062ff] to-[#4f46e5] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {f.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#0062ff]">
                    {f.badge}
                  </span>
                </div>

                <h3 className={`text-sm sm:text-base font-bold tracking-tight line-clamp-2 relative z-10 ${
                  isSelected ? 'text-slate-900' : 'text-slate-600'
                }`}>
                  {f.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Focus Deep Dive Bento Card (with 3D Tilt Wrapper) */}
        <Interactive3DTilt maxTilt={4} scale={1.01} perspective={1400} glare={false} className="mb-14">
          <div className="gapsy-card p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold text-[#0052cc] bg-[#eef4ff] px-3 py-1 rounded-full border border-[#cce0ff] inline-block mb-3">
                    STAGE {currentFocus.num} • {currentFocus.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d11] tracking-tight">
                    {currentFocus.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#0052cc] mt-1.5">
                    {currentFocus.subtitle}
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#484852] leading-relaxed">
                  <p>
                    <strong className="text-[#0d0d11] font-bold">The Core Challenge: </strong>
                    {currentFocus.summary}
                  </p>
                  <p>
                    <strong className="text-[#0d0d11] font-bold">Our Engineering Solution: </strong>
                    {currentFocus.solution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f7f7f9] border border-black/[0.04] space-y-2 text-xs">
                  <span className="font-mono font-bold text-[#0d0d11] uppercase tracking-wider block text-[11px] mb-1">
                    Key Strategic Outcomes:
                  </span>
                  {currentFocus.points.map((pt, pti) => (
                    <div key={pti} className="flex items-start gap-2.5 text-[#33333d]">
                      <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Asset Inspection Card (Guillaume Tomasi Curatorial Zoom) */}
              <div className="lg:col-span-5">
                <div 
                  className="p-3.5 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] group cursor-pointer hover:border-[#0052cc]/40 transition-colors"
                  onClick={() => onOpenImage && onOpenImage({
                    src: currentFocus.image.src,
                    title: currentFocus.image.title,
                    tag: currentFocus.image.tag,
                    description: currentFocus.image.caption
                  })}
                >
                  <div className="overflow-hidden rounded-xl bg-slate-200 relative aspect-[16/10]">
                    <img
                      src={currentFocus.image.src}
                      alt={currentFocus.image.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5 text-[#0052cc]" />
                        Inspect High-Res Dataset
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 px-1">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[#0d0d11] truncate">{currentFocus.image.title}</span>
                      <span className="font-mono text-[10px] text-[#0052cc] font-semibold bg-[#eef4ff] px-2 py-0.5 rounded border border-[#cce0ff] shrink-0 ml-2">
                        {currentFocus.image.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#62626e] line-clamp-2">
                      {currentFocus.image.caption}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Interactive3DTilt>

        {/* Milestone Achievements 6-Grid (Tactile 3D Tilt Cards) */}
        <div>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] block mb-1">
              EMPIRICALLY VERIFIED METRICS
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-slate-900">
              Empirical Research Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
              Empirical performance metrics established across data ingestion, sequence forecasting, foliar diagnosis, and edge deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((item, idx) => (
              <Interactive3DTilt key={idx} maxTilt={8} scale={1.02} className="h-full">
                <div className="gapsy-card p-6 flex flex-col justify-between h-full hover:border-[#0062ff]/30">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0062ff] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <div className={`text-4xl font-black ${item.color} font-mono tracking-tight mb-2`}>
                      {item.metric}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 tracking-tight">
                      {item.label}
                    </h4>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Verified Target</span>
                    <span className="text-[#059669] font-bold flex items-center gap-1 font-mono text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      VERIFIED
                    </span>
                  </div>
                </div>
              </Interactive3DTilt>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
