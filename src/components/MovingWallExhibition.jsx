import React, { useState } from 'react';
import { Maximize2, Pause, Play, Eye, Compass, Layers, ArrowUpRight } from 'lucide-react';
import Interactive3DTilt from './Interactive3DTilt';

export default function MovingWallExhibition({ onOpenImage }) {
  const [isPaused, setIsPaused] = useState(false);
  const [is3DMode, setIs3DMode] = useState(true);

  const lane1Items = [
    {
      id: "wall-1",
      num: "01",
      tag: "VIRTUAL TWIN",
      title: "Real-Time Polyhouse Microclimate",
      desc: "Thermodynamic energy balance calculating temperature, humidity & dew point without sensor hardware.",
      src: "/assets/ui_live_twin.jpg",
      meta: "100% SENSOR-FREE // HOURLY CYCLES"
    },
    {
      id: "wall-2",
      num: "02",
      tag: "VISION DIAGNOSTIC",
      title: "Dual-Model Foliar Classifier",
      desc: "Ultralytics YOLOv11m disease detector paired with EfficientNet-B0 phenology staging at 14.2ms CPU.",
      src: "/assets/ui_vision.jpg",
      meta: "99.74% TOP-1 // 14.2 MS INFERENCE"
    },
    {
      id: "wall-3",
      num: "03",
      tag: "SCENARIO SIMULATOR",
      title: "What-If Climate & Ridge Control",
      desc: "Interactive actuator preview showing microclimate drops from opening natural ridge vents.",
      src: "/assets/ui_whatif.jpg",
      meta: "72H FORECAST // DETERMINISTIC SAFETY"
    },
    {
      id: "wall-4",
      num: "04",
      tag: "ARCHITECTURE",
      title: "Distributed Edge-to-Cloud Blueprint",
      desc: "Local offline compute engine connected to regional weather stations with zero recurring cloud costs.",
      src: "/assets/runtime_architecture.png",
      meta: "MQTT PROTOCOL // OFFLINE EDGE"
    },
    {
      id: "wall-5",
      num: "05",
      tag: "BOTANICAL DATASET",
      title: "Foliar Pathology Detection Grid",
      desc: "Multi-class specimen catalog spanning Early Blight, Late Blight, Septoria, Leaf Mold, and Mites.",
      src: "/assets/samples_disease.jpg",
      meta: "6 PATHOLOGIES // 3,248 SPECIMENS"
    },
    {
      id: "wall-6",
      num: "06",
      tag: "PHENOLOGY STAGING",
      title: "Tomato Growth Chronology",
      desc: "Six-stage phenotypic classifier governing bio-safety rules to safeguard honeybee pollinators.",
      src: "/assets/samples_growth.jpg",
      meta: "6 PHENOTYPIC STAGES // BEE-SAFE"
    }
  ];

  const lane2Items = [
    {
      id: "wall-7",
      num: "07",
      tag: "PATHOLOGY CASE",
      title: "Clinical Septoria Leaf Spot Diagnosis",
      desc: "Detailed algorithmic inspection identifying pinpoint necrotic circular lesions with chlorotic halos.",
      src: "/assets/diagnosis_case.jpg",
      meta: "CONFIDENCE: 98.9% // TARGETED SPRAY"
    },
    {
      id: "wall-8",
      num: "08",
      tag: "EDGE SLM",
      title: "Dual-Agent Agronomic RAG Framework",
      desc: "Small Language Model generating bilingual English & Tamil remediation protocols without Internet.",
      src: "/assets/slm_rag_framework.jpg",
      meta: "QWEN2.5-0.5B // BILINGUAL PROTOCOLS"
    },
    {
      id: "wall-9",
      num: "09",
      tag: "PHYSICS MODEL",
      title: "Psychrometric Vapor Pressure Equation",
      desc: "Coupled mathematical formulations determining vapor pressure deficit and foliar moisture duration.",
      src: "/assets/psychrometric_model.jpg",
      meta: "TETENS EQUATION // VPD ZONING"
    },
    {
      id: "wall-10",
      num: "10",
      tag: "SUPERCOMPUTING",
      title: "NVIDIA H200 Training Pipeline",
      desc: "Distributed mixed-precision acceleration pipeline producing optimized ONNX and PyTorch artifacts.",
      src: "/assets/training_pipeline.png",
      meta: "NVIDIA H200 SXM // 141GB HBM3E"
    },
    {
      id: "wall-11",
      num: "11",
      tag: "DECISION LOOP",
      title: "Autonomous Closed-Loop Flowchart",
      desc: "Cyclic cyber-physical feedback loop linking weather forecasts, thermal simulation, and ridge vents.",
      src: "/assets/twin_flowchart.jpg",
      meta: "AUTONOMOUS FEEDBACK // ZERO DRIFT"
    },
    {
      id: "wall-12",
      num: "12",
      tag: "METRICS VALIDATION",
      title: "YOLO Convergence & Loss Trajectory",
      desc: "Validation accuracy reaching 0.995 mAP50 with rapid bounding box and classification stabilization.",
      src: "/assets/yolo_curves.png",
      meta: "0.995 mAP50 // ZERO OVERFITTING"
    }
  ];

  const handleCardClick = (item) => {
    if (onOpenImage) {
      onOpenImage({
        src: item.src,
        title: item.title,
        tag: item.tag,
        description: item.desc
      });
    }
  };

  return (
    <section id="moving-wall" className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] text-[#0f172a] overflow-hidden relative border-y border-slate-200/80">
      {/* Background Soft Ambient Luminous Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0062ff]" />
              <span>EMPIRICAL RESEARCH ARTIFACTS // DINDIGUL VALIDATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              System Architecture & Empirical Research Artifacts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2 font-normal leading-relaxed">
              Comprehensive technical documentation of thermodynamic simulation modules, neural network architectures, botanical datasets, and edge runtime interfaces.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIs3DMode(!is3DMode)}
              className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
                is3DMode
                  ? 'bg-[#0062ff] text-white border-[#0062ff] shadow-[0_4px_16px_rgba(0,98,255,0.35)]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{is3DMode ? '3D Perspective: Enabled' : 'Perspective: Flat'}</span>
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-600" /> : <Pause className="w-3.5 h-3.5 text-slate-500" />}
              <span>{isPaused ? 'Resume Motion' : 'Pause Artifacts'}</span>
            </button>

            <div className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-slate-200/80 text-xs font-mono text-slate-600 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#0062ff]" />
              <span>12 Validated Artifacts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Kinetic Moving Wall Canvas */}
      <div className="w-full overflow-hidden transition-all duration-700 ease-out select-none">
        <div 
          className="wall-perspective-wrapper space-y-6 sm:space-y-8 py-4"
          style={{
            transform: is3DMode 
              ? 'perspective(1400px) rotateX(7deg) rotateY(-3deg) scale(0.97)' 
              : 'perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* LANE 1: Drifting Left */}
          <div className="relative w-full overflow-hidden">
            <div 
              className={`flex items-center gap-6 whitespace-nowrap animate-wall-left ${
                isPaused ? 'animation-paused' : ''
              }`}
            >
              {lane1Items.concat(lane1Items).map((item, idx) => (
                <div
                  key={`l1-${idx}`}
                  onClick={() => handleCardClick(item)}
                  className="group relative w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 p-4 cursor-pointer transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_-8px_rgba(37,99,235,0.18)] hover:-translate-y-2"
                >
                  {/* Curatorial Header */}
                  <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                    <span className="text-[#0062ff] font-bold tracking-wider">
                      ARTIFACT // {item.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Image Viewport with Smooth Zoom */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5 border border-slate-200/80">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    
                    <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-900 flex items-center gap-1.5 shadow-md border border-slate-200/80 font-bold">
                      <Maximize2 className="w-3 h-3 text-[#0062ff]" />
                      <span>Inspect Asset</span>
                    </div>
                  </div>

                  {/* Card Typography */}
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight truncate group-hover:text-[#0062ff] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Card Metadata Footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{item.meta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0062ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LANE 2: Drifting Right */}
          <div className="relative w-full overflow-hidden">
            <div 
              className={`flex items-center gap-6 whitespace-nowrap animate-wall-right ${
                isPaused ? 'animation-paused' : ''
              }`}
            >
              {lane2Items.concat(lane2Items).map((item, idx) => (
                <div
                  key={`l2-${idx}`}
                  onClick={() => handleCardClick(item)}
                  className="group relative w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 p-4 cursor-pointer transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_-8px_rgba(5,150,105,0.18)] hover:-translate-y-2"
                >
                  {/* Curatorial Header */}
                  <div className="flex items-center justify-between text-[10px] font-mono mb-3">
                    <span className="text-[#059669] font-bold tracking-wider">
                      ARTIFACT // {item.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200/60">
                      {item.tag}
                    </span>
                  </div>

                  {/* Image Viewport */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5 border border-slate-200/80">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    />
                    
                    <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-900 flex items-center gap-1.5 shadow-md border border-slate-200/80 font-bold">
                      <Maximize2 className="w-3 h-3 text-[#059669]" />
                      <span>Inspect Asset</span>
                    </div>
                  </div>

                  {/* Card Typography */}
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight truncate group-hover:text-[#059669] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Card Metadata Footer */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{item.meta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#059669] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Exhibition Footnote Banner (Clean Luminous Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span className="text-slate-600 font-medium">
              Click any artifact to inspect high-resolution architecture diagrams, confusion matrices, and empirical validation curves.
            </span>
          </div>

          <a 
            href="#workflow" 
            className="inline-flex items-center gap-1.5 text-[#0062ff] hover:text-[#004ecc] font-bold transition-colors font-mono uppercase text-[11px] tracking-wider shrink-0"
          >
            <span>Proceed to 5-Stage Engineering Pipeline</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
