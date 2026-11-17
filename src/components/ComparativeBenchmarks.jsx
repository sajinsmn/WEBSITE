import React from 'react';
import { Check, X, Cpu, ShieldCheck, Zap, HardDrive, Smartphone, Layers, ArrowUpRight } from 'lucide-react';
import Interactive3DTilt from './Interactive3DTilt';

export default function ComparativeBenchmarks() {
  const comparisonData = [
    {
      feature: "Hardware Capital Cost (CapEx)",
      iot: "$600 – $1,800 per polyhouse bay",
      phone: "$0 (Requires high-end smartphone)",
      ours: "$0 (Hardware-Free Thermodynamic Twin)",
      highlight: true
    },
    {
      feature: "Sensor Drift & Bio-Fouling",
      iot: "High (Agrochemical corrosion, spray drift)",
      phone: "N/A (No environmental monitoring)",
      ours: "Zero (Thermodynamic equations immune to drift)",
      highlight: true
    },
    {
      feature: "Pre-Symptomatic Early Warning",
      iot: "None (Reactive threshold alerts only)",
      phone: "None (Operates only after visible lesions)",
      ours: "24h, 48h & 72h Pre-Symptomatic Bi-LSTM",
      highlight: true
    },
    {
      feature: "Biological Safety Interlock",
      iot: "None",
      phone: "None (Unfiltered chemical spray advice)",
      ours: "Deterministic Bee Protection & Harvest Lock",
      highlight: true
    },
    {
      feature: "Offline Edge Execution",
      iot: "Requires Cloud Gateway & cellular uplink",
      phone: "Requires cloud API tokens & fast mobile data",
      ours: "100% Offline Laptop CPU Execution (llama.cpp)",
      highlight: true
    },
    {
      feature: "Bilingual Agronomic Reasoning",
      iot: "None (Raw unformatted telemetry)",
      phone: "Limited English only",
      ours: "Fluent Technical English & Native Tamil (தமிழ்)",
      highlight: true
    }
  ];

  const modelSpecs = [
    {
      model: "Ultralytics YOLOv11m",
      role: "6-Class Foliar Disease Classification",
      params: "20.1 Million",
      size: "20.9 MB",
      accuracy: "99.74% Val / 100% Test",
      latency: "14.2 ms (CPU)",
      badge: "Vision",
      bgGlow: "bg-[#eef4ff] text-[#0052cc] border-[#cce0ff]"
    },
    {
      model: "EfficientNet-B0",
      role: "6-Stage Growth Phenology Estimator",
      params: "4.0 Million",
      size: "15.8 MB",
      accuracy: "99.45% Test Accuracy",
      latency: "8.6 ms (CPU)",
      badge: "Phenology",
      bgGlow: "bg-[#edfcf2] text-[#087443] border-[#b7f4cb]"
    },
    {
      model: "Bi-LSTM + Multi-Head Attention",
      role: "24h / 48h / 72h Disease Forecaster",
      params: "4.88 Million",
      size: "18.6 MB",
      accuracy: "ROC-AUC 0.854 (24h)",
      latency: "3.1 ms (CPU)",
      badge: "Forecasting",
      bgGlow: "bg-amber-50 text-amber-800 border-amber-200/60"
    },
    {
      model: "Qwen2.5-3B-Instruct (QLoRA)",
      role: "Dr. Thangavelu Offline Edge Agronomist",
      params: "3.11 Billion (29.9M trained)",
      size: "1.93 GB (GGUF Q4_K_M)",
      accuracy: "Loss 0.0869 (ChromaDB RAG)",
      latency: "18.4 tokens/sec (CPU)",
      badge: "Reasoning",
      bgGlow: "bg-purple-50 text-purple-800 border-purple-200/60"
    }
  ];

  return (
    <section id="benchmarks" className="py-16 sm:py-20 bg-[#fbfbfd] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062ff] block mb-1">
            PARADIGM MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900">
            Benchmarked Against Traditional Systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            A comprehensive side-by-side comparison illustrating how our software digital twin eliminates physical hardware expenses while introducing proactive pre-symptomatic forecasting.
          </p>
        </div>

        {/* Comparison Matrix Table (Gapsy Clean Card) */}
        <div className="gapsy-card p-6 sm:p-8 mb-14 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-black/[0.08] text-[#62626e]">
                  <th className="py-3.5 px-4 font-mono font-bold uppercase tracking-wider text-xs">Architectural Dimension</th>
                  <th className="py-3.5 px-4 font-mono font-bold uppercase tracking-wider text-xs">Commercial IoT Sensor Grids</th>
                  <th className="py-3.5 px-4 font-mono font-bold uppercase tracking-wider text-xs">Standard Smartphone Apps</th>
                  <th className="py-3.5 px-4 font-mono font-bold uppercase tracking-wider text-xs text-[#0052cc] bg-[#eef4ff] rounded-t-xl border-t border-x border-[#cce0ff] flex items-center justify-between">
                    <span>Our Digital Twin</span>
                    <span className="text-[10px] font-mono bg-[#0052cc] text-white px-2 py-0.5 rounded-full">Breakthrough</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.015] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0d0d11] text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-[#62626e] text-xs">
                      {row.iot}
                    </td>
                    <td className="py-4 px-4 text-[#62626e] text-xs">
                      {row.phone}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#003d99] bg-[#eef4ff]/50 border-x border-[#cce0ff]/60 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#087443] shrink-0" />
                        <span>{row.ours}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section Subhead: Edge Model Suite */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052cc] block mb-1">
            EDGE NEURAL COMPILATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d0d11] tracking-tight">
            Integrated Edge Intelligence Suite.
          </h3>
          <p className="text-xs sm:text-sm text-[#62626e] mt-1 font-normal">
            Four specialized neural models co-designed to execute in real time on resource-constrained edge hardware.
          </p>
        </div>

        {/* 4 Cards for Neural Models (Guillaume Tomasi 3D Tactile Tilt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {modelSpecs.map((m, idx) => (
            <Interactive3DTilt key={idx} maxTilt={8} scale={1.02} className="h-full">
              <div className="gapsy-card p-6 flex flex-col justify-between h-full hover:border-[#0052cc]/30">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${m.bgGlow}`}>
                      {m.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#a0a0ab]">MODEL 0{idx + 1}</span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#0d0d11] tracking-tight">
                    {m.model}
                  </h4>
                  <p className="text-xs text-[#62626e] mt-1.5 leading-relaxed min-h-[36px]">
                    {m.role}
                  </p>

                  {/* Specs Box */}
                  <div className="my-4 p-3.5 rounded-xl bg-[#f7f7f9] border border-black/[0.04] space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#62626e]">Parameters:</span>
                      <strong className="text-[#0d0d11] font-sans font-bold">{m.params}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#62626e]">Model Size:</span>
                      <strong className="text-[#0d0d11] font-sans font-bold">{m.size}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#62626e]">Latency (CPU):</span>
                      <strong className="text-[#087443] font-sans font-bold">{m.latency}</strong>
                    </div>
                  </div>
                </div>

                {/* Bottom Accuracy Metric */}
                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#62626e] font-medium">Verified Metric:</span>
                  <strong className="text-[#0d0d11] font-bold font-mono text-[11px] bg-[#f0f0f4] px-2 py-0.5 rounded">
                    {m.accuracy}
                  </strong>
                </div>
              </div>
            </Interactive3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
