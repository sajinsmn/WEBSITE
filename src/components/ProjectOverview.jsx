import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Maximize2, Activity, ShieldCheck, Sliders, ArrowUpRight, Zap, Target, Lock, Layers, BookOpen, GraduationCap, UserCheck, Calendar, MapPin, Award, Mail } from 'lucide-react';
import { projectInfo } from '../data/projectData';
import Interactive3DTilt from './Interactive3DTilt';

export default function ProjectOverview({ onOpenSearch, onOpenImage }) {
  const [activeUiTab, setActiveUiTab] = useState(0);

  const softwareScreens = [
    {
      id: "live-twin",
      label: "Virtual Polyhouse Twin",
      badge: "Thermodynamic Simulation",
      icon: Activity,
      src: "/assets/ui_live_twin.jpg",
      title: "Real-Time Microclimate Energy Balance",
      caption: "Continuous thermodynamic simulation calculating indoor air temperature, relative humidity, dew point, and leaf wetness duration without physical sensor nodes.",
      stats: [
        { label: "Internal Volume", value: "3,000 m³" },
        { label: "Physical Sensor Nodes", value: "0 (Sensor-Free)" },
        { label: "Temporal Resolution", value: "Hourly Continuous" }
      ]
    },
    {
      id: "vision-scan",
      label: "Foliar Pathology Scanner",
      badge: "Computer Vision",
      icon: ShieldCheck,
      src: "/assets/ui_vision.jpg",
      title: "Dual-Model Foliar & Phenology Classifier",
      caption: "Ultralytics YOLOv11m disease classifier paired with EfficientNet-B0 phenological growth estimator executing simultaneously in 14.2 milliseconds on CPU.",
      stats: [
        { label: "Diagnostic Classes", value: "6 Foliar Diseases" },
        { label: "Validation Accuracy", value: "99.74% Top-1" },
        { label: "Inference Latency", value: "14.2 ms (CPU)" }
      ]
    },
    {
      id: "whatif-sim",
      label: "What-If Climate Simulator",
      badge: "Scenario Control",
      icon: Sliders,
      src: "/assets/ui_whatif.jpg",
      title: "Actuator & Ridge Ventilation Simulator",
      caption: "Simulates the microclimatic impact of opening natural ridge vents, drawing thermal shading screens, and activating evaporative misting before physical execution.",
      stats: [
        { label: "Forecast Horizon", value: "72 Hours Ahead" },
        { label: "Early Warning Lead", value: "1–3 Days Advance" },
        { label: "Pollinator Protection", value: "Deterministic Lock" }
      ]
    }
  ];

  const currentScreen = softwareScreens[activeUiTab];

  return (
    <section id="overview" className="pt-8 sm:pt-12 pb-16 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Formal Thesis Title */}
        <div className="max-w-5xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0062ff]" />
            <span>Cyber-Physical Systems & Machine Learning Research</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-950 leading-[1.12]">
            {projectInfo.title}
          </h1>

          {/* Academic Attribution Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-xs max-w-4xl">
            {/* About Sajin Candidate Card */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062ff] flex items-center justify-center shrink-0 border border-blue-100">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 text-[10px] uppercase font-mono font-bold tracking-wider block">
                  ABOUT SAJIN • M.TECH DEGREE CANDIDATE
                </span>
                <div className="flex items-baseline gap-2">
                  <strong className="text-slate-900 font-bold text-base">{projectInfo.author.name}</strong>
                  <span className="text-[#0062ff] font-mono font-semibold text-xs bg-blue-50/80 px-2 py-0.5 rounded border border-blue-200/60">
                    {projectInfo.author.rollNo}
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 leading-snug space-y-0.5 pt-1">
                  <div className="font-bold text-slate-900 tracking-wide">AMRITA VISHWA VIDYAPEETHAM</div>
                  <div className="text-slate-600">Amrita School of Computing, Coimbatore</div>
                  <div className="text-[#0062ff] font-semibold">Department of Computer Science and Engineering</div>
                </div>
                <div className="pt-1.5">
                  <a 
                    href={`mailto:${projectInfo.author.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 hover:text-[#0062ff] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0062ff]" />
                    <span>{projectInfo.author.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Thesis Advisor Card */}
            <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 text-[10px] uppercase font-mono font-bold tracking-wider block">
                  THESIS ADVISOR & GUIDE
                </span>
                <div className="flex items-baseline gap-2">
                  <strong className="text-slate-900 font-bold text-base">{projectInfo.guide.name}</strong>
                </div>
                <div className="text-[11px] text-slate-600 leading-snug space-y-0.5 pt-1">
                  <div className="font-bold text-slate-900">{projectInfo.guide.designation}</div>
                  <div className="text-slate-600">Amrita School of Computing, Coimbatore</div>
                  <div className="text-[#087443] font-semibold">Department of Computer Science and Engineering</div>
                </div>
                <div className="pt-1.5">
                  <a 
                    href={`mailto:${projectInfo.guide.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 hover:text-emerald-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{projectInfo.guide.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#workflow" className="gapsy-btn-primary">
              <span>System Methodology</span>
              <div className="gapsy-btn-arrow">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            <a 
              href="#focus" 
              className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200/90 shadow-2xs transition-all"
            >
              <span>Research Objectives</span>
            </a>

            <a 
              href="#graphs" 
              className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200/90 shadow-2xs transition-all"
            >
              <span>Experimental Data</span>
            </a>

            <a 
              href="#supervision" 
              className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200/90 shadow-2xs transition-all"
            >
              <span>Faculty Mentorship</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Comprehensive Project Description & Executive Abstract Card */}
        <div className="gapsy-card p-6 sm:p-8 mb-10 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062ff] block mb-1">
                EXECUTIVE RESEARCH ABSTRACT
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                Project Overview & Scientific Description
              </h2>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-xs font-semibold">
              Thesis Section 1.0
            </span>
          </div>

          <div className="text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
            <p>
              Tomato (<em className="italic">Solanum lycopersicum</em>) growers in protected polyhouses across tropical agricultural basins such as Dindigul, Tamil Nadu, lose between 30% and 70% of seasonal yield to foliar fungal pathogens, notably <strong>Late Blight</strong> (<em className="italic">Phytophthora infestans</em>) and <strong>Early Blight</strong> (<em className="italic">Alternaria solani</em>). These fungal infections proliferate during silent nocturnal periods of saturated indoor air (exceeding 95% relative humidity) and prolonged leaf wetness, remaining asymptomatic until macroscopic necrosis has already destroyed vascular plant tissue.
            </p>

            <p>
              Conventional smart agriculture proposes dense in-situ electronic IoT sensor grids. However, commercial greenhouse sensor nodes cost <strong>$600 to $1,800 per polyhouse bay</strong>. When continuously exposed to high humidity, daily agrochemical sprays, and biological condensation, physical electrochemical probes suffer severe calibration drift, corrosion, and bio-fouling within weeks, rendering physical sensor networks economically and operationally prohibitive for tropical smallholder cultivation. Furthermore, consumer smartphone vision tools act purely reactively, identifying disease only after macroscopic leaf lesions have already developed.
            </p>

            <p>
              This thesis establishes a comprehensive, software-defined <strong>Cyber-Physical Digital Twin</strong> that operates with <strong>zero physical sensor nodes inside the polyhouse</strong>. The system functions through five co-designed computational pillars:
            </p>

            {/* 5 Technical Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-[#0062ff] uppercase tracking-wider block">Pillar 1 • Microclimate Physics</span>
                <h4 className="text-xs font-bold text-slate-900">Thermodynamic Simulation</h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Ingests open meteorological observations (Open-Meteo) and applies coupled Tetens psychrometric equations and energy balance differential models to compute indoor air temperature, humidity, VPD, and leaf wetness at zero hardware cost.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-[#0062ff] uppercase tracking-wider block">Pillar 2 • Sequence AI</span>
                <h4 className="text-xs font-bold text-slate-900">72h Pre-Symptomatic Early Warning</h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  A 3-layer bidirectional LSTM network with multi-head self-attention monitors 168-hour temporal sequences across 9 engineered microclimatic features, forecasting fungal spore germination windows 1 to 3 days before macroscopic lesion emergence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-[#0062ff] uppercase tracking-wider block">Pillar 3 • Computer Vision</span>
                <h4 className="text-xs font-bold text-slate-900">Dual-Model Diagnostic Gate</h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Ultralytics YOLOv11m classifies 6 foliar disease classes (99.74% Val, 100% held-out test), executed simultaneously alongside EfficientNet-B0 estimating 6 phenological growth stages (99.45% accuracy) in 14.2 ms on CPU.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-[#059669] uppercase tracking-wider block">Pillar 4 • Biological Gating</span>
                <h4 className="text-xs font-bold text-slate-900">Pollinator & Harvest Interlock</h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Deterministic safety gating strictly bars daytime chemical spraying during active flowering to safeguard pollinating bees (<em className="italic">Apis mellifera</em>) and enforces Pre-Harvest Intervals (PHIs) to guarantee zero consumer chemical residues.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-[#7c3aed] uppercase tracking-wider block">Pillar 5 • Edge Reasoning</span>
                <h4 className="text-xs font-bold text-slate-900">Offline Edge Agronomic SLM</h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Fine-tuned Qwen2.5-3B-Instruct (4-bit QLoRA, 1.93 GB GGUF) coupled with ChromaDB RAG (TNAU, ICAR, CIBRC), generating grounded bilingual English and Tamil remediation protocols 100% offline on a standard laptop CPU.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-mono text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Pillar 6 • Scenario Control</span>
                <h4 className="text-xs font-bold text-slate-900">What-If Actuator Simulator</h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  Enables polyhouse growers to evaluate microclimatic modifications—including ridge vent actuation, shading screen deployment, and evaporative fogging—on the digital twin before physically triggering greenhouse machinery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Formal Empirical Pedestals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Interactive3DTilt className="h-full">
            <div className="gapsy-card p-6 flex flex-col justify-between h-full hover:border-blue-300">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Physical Sensor CapEx
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#0062ff] font-mono tracking-tight">
                $0
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                Physics-derived virtual microclimate (saves $600–$1,800/bay)
              </p>
            </div>
          </Interactive3DTilt>

          <Interactive3DTilt className="h-full">
            <div className="gapsy-card p-6 flex flex-col justify-between h-full hover:border-emerald-300">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Diagnostic Accuracy
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#059669] font-mono tracking-tight">
                99.74%
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                Validation accuracy across 6 foliar crop pathologies
              </p>
            </div>
          </Interactive3DTilt>

          <Interactive3DTilt className="h-full">
            <div className="gapsy-card p-6 flex flex-col justify-between h-full hover:border-indigo-300">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Early Warning Lead
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#4f46e5] font-mono tracking-tight">
                72 hrs
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                Pre-symptomatic sequence risk forecasting before visible lesions
              </p>
            </div>
          </Interactive3DTilt>

          <Interactive3DTilt className="h-full">
            <div className="gapsy-card p-6 flex flex-col justify-between h-full hover:border-purple-300">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Offline Edge Footprint
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[#7c3aed] font-mono tracking-tight">
                100%
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                Local CPU execution via quantized GGUF (zero cloud fees)
              </p>
            </div>
          </Interactive3DTilt>
        </div>

        {/* Operational System Runtime Interfaces */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062ff] block">
                SYSTEM INTERFACES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Operational Architecture & Visualizations
              </h3>
            </div>

            {/* Interface Tab Selector */}
            <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200/80 self-start sm:self-auto">
              {softwareScreens.map((screen, idx) => {
                const isSelected = activeUiTab === idx;
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveUiTab(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-tight transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#0062ff] to-[#4f46e5] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {screen.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interface Display Window */}
          <Interactive3DTilt>
            <div className="studio-window">
              <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-[11px] font-mono text-slate-500 font-semibold hidden sm:inline">
                    System Architecture Module • {currentScreen.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {currentScreen.badge}
                  </span>
                  <button
                    onClick={() => onOpenImage && onOpenImage({
                      src: currentScreen.src,
                      title: currentScreen.title,
                      tag: currentScreen.label,
                      description: currentScreen.caption
                    })}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center gap-1 border border-slate-200/90 shadow-2xs cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#0062ff]" />
                    <span>Inspect</span>
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div 
                className="relative cursor-pointer bg-slate-100 group"
                onClick={() => onOpenImage && onOpenImage({
                  src: currentScreen.src,
                  title: currentScreen.title,
                  tag: currentScreen.label,
                  description: currentScreen.caption
                })}
              >
                <img
                  src={currentScreen.src}
                  alt={currentScreen.title}
                  className="w-full h-auto object-cover max-h-[480px] transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all" />
              </div>

              {/* Window Footer Strip */}
              <div className="p-5 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {currentScreen.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 max-w-xl">
                    {currentScreen.caption}
                  </p>
                </div>

                <div className="flex items-center gap-5 text-xs font-mono">
                  {currentScreen.stats.map((s, si) => (
                    <div key={si} className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">{s.label}</span>
                      <strong className="text-xs text-slate-900 font-bold">{s.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Interactive3DTilt>
        </div>

        {/* Formal Research Problem Formulation & Cyber-Physical Solution */}
        <div className="gapsy-card p-8 sm:p-10 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062ff] block mb-1">
              RESEARCH FORMULATION & MOTIVATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              Cyber-Physical Paradigms for Protected Cultivation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3 p-6 rounded-2xl bg-red-50/40 border border-red-200/70 h-full">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                Vulnerability of Physical IoT Sensor Grids in Tropical Polyhouses
              </h3>
              <p>
                In protected polyhouses across tropical agricultural basins such as Dindigul, Tamil Nadu, growers experience severe crop destruction from fungal pathogens like Late Blight (<em className="italic">Phytophthora infestans</em>) and Early Blight (<em className="italic">Alternaria solani</em>). These diseases proliferate during silent overnight periods of high humidity and extended foliar wetness.
              </p>
              <p>
                Commercial electronic IoT sensor nodes require substantial capital outlay ($600 to $1,800 per polyhouse bay). When continuously exposed to 95% relative humidity, corrosive chemical sprays, and biological fouling, physical electrochemical probes suffer rapid calibration drift and hardware degradation, making widespread deployment unsustainable.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-blue-50/40 border border-blue-200/70 h-full">
              <h3 className="text-base font-bold text-[#0062ff] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0062ff]" />
                The Software-Defined Cyber-Physical Twin Framework
              </h3>
              <p className="text-slate-700">
                This research establishes a software-defined cyber-physical digital twin that couples open regional meteorological data with thermodynamic greenhouse equations, calculating indoor microclimatic parameters at zero physical sensor cost.
              </p>
              <p className="text-slate-700">
                Deep sequence modeling with multi-head attention forecasts pathogen incubation windows 24 to 72 hours in advance, while computer vision models provide fast leaf pathology diagnosis governed by deterministic biological safety rules to protect honeybee pollinators and prevent toxic chemical residues at harvest.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
