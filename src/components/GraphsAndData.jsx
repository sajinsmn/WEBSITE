import React, { useState } from 'react';
import { BarChart3, LineChart, Cpu, ShieldCheck, Zap, Activity, CheckCircle2, AlertTriangle, Layers, Maximize2, ArrowUpRight } from 'lucide-react';

export default function GraphsAndData({ onOpenImage }) {
  const [activeTab, setActiveTab] = useState('lstm');

  const tabs = [
    { id: 'lstm', label: '72h Early Warning', icon: LineChart },
    { id: 'microclimate', label: '7-Day Climate Sequence', icon: Activity },
    { id: 'yolo', label: 'Leaf Disease Detection', icon: ShieldCheck },
    { id: 'phenology', label: 'Plant Growth Stages', icon: Layers },
    { id: 'h200', label: 'GPU Model Training', icon: Cpu },
    { id: 'psychrometric', label: 'Moisture Risk Zones', icon: BarChart3 }
  ];

  return (
    <section id="graphs" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052cc] block mb-1">
            EXPERIMENTAL PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0d0d11]">
            Verified Experimental Data.
          </h2>
          <p className="text-sm sm:text-base text-[#62626e] mt-2 font-normal">
            Rigorous validation metrics across 17,544 sequential hours of greenhouse observations, 11,500+ botanical leaf images, and offline edge execution benchmarks.
          </p>
        </div>

        {/* Gapsy Segmented Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-full bg-[#f0f0f4] border border-black/[0.06]">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-tight whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0062ff] to-[#4f46e5] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0052cc]' : 'text-[#86868b]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Early Warning Curves */}
        {activeTab === 'lstm' && (
          <div className="gapsy-card p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold text-[#0052cc] bg-[#eef4ff] px-2.5 py-1 rounded-full border border-[#cce0ff] inline-block mb-2">
                  SEQUENCE MODELING • Bi-LSTM + Multi-Head Attention
                </span>
                <h3 className="text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                  Early Warning Disease Prediction Curves
                </h3>
                <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
                  Predicts fungal attack risk 24, 48, and 72 hours before visible lesions damage leaves.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#edfcf2] text-[#087443] border border-[#b7f4cb] self-start sm:self-auto">
                17,544 Sequential Test Hours
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div 
                className="lg:col-span-7 p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: "/assets/lstm_roc.png",
                  title: "Figure 1: Pre-Symptomatic ROC-AUC Trajectory",
                  tag: "Sequence Modeling",
                  description: "Multi-horizon receiver operating characteristic curves showing 0.854 score at 24 hours, 0.792 at 48 hours, and 0.738 at 72 hours advance lead time."
                })}
              >
                <img
                  src="/assets/lstm_roc.png"
                  alt="Early Disease Prediction ROC Curves"
                  className="w-full h-auto object-contain max-h-[360px] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Figure
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="p-5 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#0d0d11] mb-3 flex items-center justify-between">
                    <span>Forecast Score by Horizon</span>
                    <span className="text-[10px] font-mono text-[#0052cc]">168h Window</span>
                  </h4>
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-black/[0.08] text-[#62626e]">
                        <th className="py-2">Advance Horizon</th>
                        <th className="py-2">ROC-AUC</th>
                        <th className="py-2">Precision</th>
                        <th className="py-2">Recall</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/[0.04] text-[#0d0d11]">
                      <tr>
                        <td className="py-2.5 font-bold text-[#0052cc]">24h Ahead</td>
                        <td className="py-2.5 font-extrabold">0.854</td>
                        <td className="py-2.5">84.2%</td>
                        <td className="py-2.5">86.1%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-teal-700">48h Ahead</td>
                        <td className="py-2.5 font-extrabold">0.792</td>
                        <td className="py-2.5">79.5%</td>
                        <td className="py-2.5">80.3%</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-slate-700">72h Ahead</td>
                        <td className="py-2.5 font-extrabold">0.738</td>
                        <td className="py-2.5">72.8%</td>
                        <td className="py-2.5">73.4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-[#eef4ff] border border-[#cce0ff] text-xs text-[#1e3a8a] leading-relaxed">
                  <strong className="text-[#0d0d11] block font-bold mb-1">Preventative Action Trigger:</strong>
                  By identifying high-risk humidity and temperature accumulation hours before fungal spores can germinate, growers can simply open greenhouse ridge vents or switch on ventilation fans to arrest pathogen spread naturally.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 7-Day Microclimate Sequence */}
        {activeTab === 'microclimate' && (
          <div className="gapsy-card p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold text-[#0052cc] bg-[#eef4ff] px-2.5 py-1 rounded-full border border-[#cce0ff] inline-block mb-2">
                  THERMODYNAMIC TWIN • Sensorless Simulation
                </span>
                <h3 className="text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                  7-Day Virtual Greenhouse Microclimate Tracking
                </h3>
                <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
                  Continuous simulation of internal polyhouse heat, relative humidity, and foliar moisture.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#eef4ff] text-[#0052cc] border border-[#cce0ff] self-start sm:self-auto">
                0 Physical Sensor Drift
              </span>
            </div>

            <div 
              className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
              onClick={() => onOpenImage && onOpenImage({
                src: "/assets/microclimate_week.png",
                title: "Figure 2: 7-Day Microclimatic Sequence Trajectory",
                tag: "Thermodynamic Simulation",
                description: "168-hour continuous simulation tracking ambient solar radiation, internal air temperature, relative humidity, and vapor pressure deficit."
              })}
            >
              <img
                src="/assets/microclimate_week.png"
                alt="7-Day Microclimate Sequence"
                className="w-full h-auto object-contain max-h-[400px] rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Inspect Figure
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                <strong className="text-[#0d0d11] block text-xs font-bold mb-1">Night Humidity Watch</strong>
                <p className="text-xs text-[#62626e] leading-relaxed">
                  Identifies nocturnal near-saturation cycles where air cools below dew point, creating wet foliage where pathogens thrive.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                <strong className="text-[#0d0d11] block text-xs font-bold mb-1">Solar Heat Retention</strong>
                <p className="text-xs text-[#62626e] leading-relaxed">
                  Models solar radiation entering the polyethylene envelope, balancing diurnal thermal accumulation against crop transpiration.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                <strong className="text-[#0d0d11] block text-xs font-bold mb-1">Leaf Wetness Duration</strong>
                <p className="text-xs text-[#62626e] leading-relaxed">
                  Calculates cumulative hours of foliar liquid film, raising critical pre-symptomatic alerts before the 8-hour germination threshold.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Leaf Disease Diagnosis */}
        {activeTab === 'yolo' && (
          <div className="gapsy-card p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold text-[#087443] bg-[#edfcf2] px-2.5 py-1 rounded-full border border-[#b7f4cb] inline-block mb-2">
                  COMPUTER VISION • Ultralytics YOLOv11m Classifier
                </span>
                <h3 className="text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                  Instant Foliar Disease Diagnosis
                </h3>
                <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
                  High-speed vision model trained and validated on over 11,500 real foliar photographs.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#edfcf2] text-[#087443] border border-[#b7f4cb] self-start sm:self-auto">
                99.74% Val • 100% Test Holdout
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div 
                className="lg:col-span-7 p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: "/assets/yolo_cm_norm.png",
                  title: "Figure 3: Normalized Disease Confusion Matrix",
                  tag: "Computer Vision",
                  description: "Ultralytics YOLOv11m confusion matrix showing near-perfect discrimination across 6 tomato leaf pathologies and healthy control leaves."
                })}
              >
                <img
                  src="/assets/yolo_cm_norm.png"
                  alt="Leaf Disease Detection Matrix"
                  className="w-full h-auto object-contain max-h-[360px] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Figure
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="p-5 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#0d0d11] mb-3 flex items-center justify-between">
                    <span>6 Diagnostic Tomato Classes</span>
                    <span className="text-[10px] font-mono text-[#087443] font-bold">14.2 ms / CPU</span>
                  </h4>
                  
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Early Blight</span>
                      <strong className="text-[#087443] font-bold">99.8%</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Late Blight</span>
                      <strong className="text-[#087443] font-bold">100.0%</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#48484a]">Leaf Mold</span>
                      <strong className="text-[#087443] font-bold">99.6%</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#48484a]">Powdery Mildew</span>
                      <strong className="text-[#087443] font-bold">99.7%</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#48484a]">Septoria Leaf Spot</span>
                      <strong className="text-[#087443] font-bold">99.7%</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#48484a]">Spider Mites</span>
                      <strong className="text-[#087443] font-bold">99.7%</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#edfcf2] border border-[#b7f4cb] text-xs text-[#087443] leading-relaxed">
                  Ultra-compact 20.9 MB binary executes in 14 milliseconds per image directly on a phone or basic laptop CPU without requiring cloud GPU servers.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Phenology Growth Stages */}
        {activeTab === 'phenology' && (
          <div className="gapsy-card p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 inline-block mb-2">
                  PHENOLOGICAL RECOGNITION • EfficientNet-B0 Backbone
                </span>
                <h3 className="text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                  Crop Developmental Stage Recognition
                </h3>
                <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
                  Identifies 6 physiological growth phases to enforce deterministic biological spraying safety rules.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#edfcf2] text-[#087443] border border-[#b7f4cb] self-start sm:self-auto">
                99.45% Test Accuracy
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div 
                className="lg:col-span-7 p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: "/assets/growth_cm.png",
                  title: "Figure 4: Phenology Confusion Matrix",
                  tag: "Phenology Recognition",
                  description: "EfficientNet-B0 confusion matrix classifying 6 tomato plant growth stages: Vegetative, Flowering, Fruit Set, Green Fruit, Turning, and Mature Harvest."
                })}
              >
                <img
                  src="/assets/growth_cm.png"
                  alt="Growth Stage Matrix"
                  className="w-full h-auto object-contain max-h-[360px] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Figure
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="p-5 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#0d0d11] mb-3 flex items-center justify-between">
                    <span>Bio-Safety Gating Rule</span>
                    <span className="text-[10px] font-mono text-amber-600 font-bold">Hardware Interlock</span>
                  </h4>
                  
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Vegetative Stage</span>
                      <strong className="text-[#087443] font-bold">Standard Regimen</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Flowering Stage</span>
                      <strong className="text-amber-600 font-bold">Bee Protection Lock</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Fruit Formation</span>
                      <strong className="text-[#087443] font-bold">Bio-Shield Only</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Green Fruit</span>
                      <strong className="text-[#0052cc] font-bold">Strict Drift Lock</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Breaker / Turning</span>
                      <strong className="text-rose-600 font-bold">Chemical Lockout</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#484852]">Ripe Harvest</span>
                      <strong className="text-rose-600 font-bold">Zero-Residue Bio Only</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                  Protects beneficial honeybees from chemical poisoning during active morning pollination, and guarantees ripe tomatoes carry zero harmful chemical residues into commercial food markets.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: GPU Training Speed */}
        {activeTab === 'h200' && (
          <div className="gapsy-card p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60 inline-block mb-2">
                  EDGE SLM FINE-TUNING • Qwen2.5-3B-Instruct (QLoRA)
                </span>
                <h3 className="text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                  High-Performance Enterprise GPU Training
                </h3>
                <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
                  Fine-tuned on enterprise GPU infrastructure and compressed for offline laptop execution.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-purple-50 text-[#7c3aed] border border-purple-200/60 self-start sm:self-auto">
                Loss 0.0869 • 12.4 Min Convergence
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div 
                className="lg:col-span-7 p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: "/assets/slm_loss.png",
                  title: "Figure 5: QLoRA Training Loss Dynamics",
                  tag: "Edge SLM Fine-Tuning",
                  description: "Fine-tuning trajectory of Qwen2.5-3B-Instruct on enterprise GPU infrastructure, showing rapid convergence from 1.28 to 0.0869 training loss."
                })}
              >
                <img
                  src="/assets/slm_loss.png"
                  alt="Training Loss Curve"
                  className="w-full h-auto object-contain max-h-[360px] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Figure
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="p-5 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#0d0d11] mb-3 flex items-center justify-between">
                    <span>Edge Deployment Highlights</span>
                    <span className="text-[10px] font-mono text-[#7c3aed] font-bold">llama.cpp Engine</span>
                  </h4>
                  
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Training Platform</span>
                      <strong className="text-[#0d0d11] font-bold">NVIDIA H200 (141GB)</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Convergence Duration</span>
                      <strong className="text-[#0d0d11] font-bold">12.4 Minutes (3 Epochs)</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Base Architecture</span>
                      <strong className="text-[#0d0d11] font-bold">Qwen2.5-3B-Instruct</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-black/[0.04]">
                      <span className="text-[#484852]">Quantized Binary</span>
                      <strong className="text-[#7c3aed] font-bold">1.93 GB (Q4_K_M GGUF)</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#484852]">Inference Throughput</span>
                      <strong className="text-[#087443] font-bold">18.4 tokens/sec (CPU)</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/60 text-xs text-purple-900 leading-relaxed">
                  Once compiled, the reasoning agronomist runs 100% locally on an ordinary farmer laptop without needing internet connectivity, third-party API subscriptions, or cloud tokens.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Moisture Risk Zones */}
        {activeTab === 'psychrometric' && (
          <div className="gapsy-card p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
              <div>
                <span className="text-xs font-mono font-bold text-[#0052cc] bg-[#eef4ff] px-2.5 py-1 rounded-full border border-[#cce0ff] inline-block mb-2">
                  PSYCHROMETRIC RISK MAPPING • Vapor Pressure Deficit Analysis
                </span>
                <h3 className="text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                  Greenhouse Moisture & Foliar Risk Zones
                </h3>
                <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
                  Understanding how leaf-to-air moisture vapor gradients govern tomato health and spore incubation.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#eef4ff] text-[#0052cc] border border-[#cce0ff] self-start sm:self-auto">
                Physics-Driven Psychrometrics
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div 
                className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: "/assets/psychrometric_model.jpg",
                  title: "Psychrometric Energy Balance Coupling",
                  tag: "Physics Model",
                  description: "Physical coupling between indoor greenhouse air, external solar flux, wall thermal conductance, and foliar moisture films."
                })}
              >
                <img
                  src="/assets/psychrometric_model.jpg"
                  alt="Greenhouse Model Architecture"
                  className="w-full h-auto object-contain max-h-[320px] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Model
                  </span>
                </div>
              </div>

              <div 
                className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.08] flex items-center justify-center relative group cursor-pointer"
                onClick={() => onOpenImage && onOpenImage({
                  src: "/assets/vpd_zones.png",
                  title: "Figure 6: Vapor Pressure Deficit Risk Zones",
                  tag: "Psychrometric Risk",
                  description: "Categorization of saturation risk (< 0.4 kPa), optimal transpiration growth (0.8–1.2 kPa), and excessive heat stress (> 1.6 kPa)."
                })}
              >
                <img
                  src="/assets/vpd_zones.png"
                  alt="Moisture Risk Zones"
                  className="w-full h-auto object-contain max-h-[320px] rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center rounded-2xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Figure
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                <strong className="text-rose-600 block text-xs uppercase font-mono font-bold mb-1">
                  Danger Zone (&lt; 0.4 kPa)
                </strong>
                <p className="text-xs text-[#62626e] leading-relaxed">
                  Air is saturated with moisture and cold. Liquid water condenses directly onto foliage, triggering fungal spore germination within 6 to 8 hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                <strong className="text-[#087443] block text-xs uppercase font-mono font-bold mb-1">
                  Optimal Growth (0.8 – 1.2 kPa)
                </strong>
                <p className="text-xs text-[#62626e] leading-relaxed">
                  Ideal balance between temperature and humidity. Plants transpire smoothly, nutrient uptake is maximized, and foliage remains dry and disease-free.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f7f7f9] border border-black/[0.06]">
                <strong className="text-amber-600 block text-xs uppercase font-mono font-bold mb-1">
                  Heat Stress Zone (&gt; 1.6 kPa)
                </strong>
                <p className="text-xs text-[#62626e] leading-relaxed">
                  Dry, arid polyhouse air causes excessive transpirational demand. Tomato leaves close stomata to conserve water, stalling fruit development.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
