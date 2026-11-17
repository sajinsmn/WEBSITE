import React from 'react';
import { Cpu, Zap, Activity, ShieldCheck, Database, Layers, ArrowRight } from 'lucide-react';

export default function H200PipelineSection() {
  const specs = [
    { label: "Hardware Accelerator", value: "NVIDIA H200 NVL" },
    { label: "High Bandwidth Memory", value: "150.1 GB HBM3e VRAM" },
    { label: "CUDA / PyTorch", value: "CUDA 13.0 • PyTorch 2.4.1" },
    { label: "NVIDIA Display Driver", value: "580.173.02" },
    { label: "SLM Fine-Tuning Wall Time", value: "747.58 seconds (~12.4 min)" },
    { label: "Trainable Parameters", value: "29.93M (0.96% of 3.11B)" },
    { label: "Training Loss Plunge", value: "1.9458 → 0.0869" },
    { label: "Edge Target Binary", value: "1.93 GB GGUF Q4_K_M" }
  ];

  return (
    <section id="h200" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Enterprise High-Performance Compute</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            NVIDIA H200 NVL Training & Artifact Deployment Pipeline
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            All neural perception, temporal sequence forecasters, and parameter-efficient language adaptations were converged on an enterprise NVIDIA H200 NVL GPU before quantizing for zero-cloud edge execution.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {specs.map((item, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                {item.label}
              </span>
              <strong className="text-sm sm:text-base font-extrabold text-white font-mono">
                {item.value}
              </strong>
            </div>
          ))}
        </div>

        {/* Training Curves & Visual Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SLM QLoRA Loss Curve (6 cols) */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Qwen2.5-3B QLoRA Loss Convergence
                </h3>
                <p className="text-xs text-slate-400">1,464 Agronomic Instruction Pairs (Unsloth NF4)</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Loss: 0.0869
              </span>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
              <img
                src="/assets/slm_loss.png"
                alt="QLoRA Training Loss Curve"
                className="w-full h-auto object-contain max-h-[320px] rounded-lg"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Rapid monotonic descent from initial cross-entropy loss 1.9458 down to 0.0869 at step 183. No overfitting detected across held-out TNAU validation queries.
            </p>
          </div>

          {/* Model Deployment Pipeline Diagram (6 cols) */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Artifact Compilation & Edge Quantization
                </h3>
                <p className="text-xs text-slate-400">From H200 Cloud Training to Polyhouse Edge Laptop</p>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                llama.cpp Q4_K_M
              </span>
            </div>

            <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
              <img
                src="/assets/H200 Model Training & Artifact Deployment Pipeline.png"
                alt="H200 Model Training & Artifact Deployment Pipeline"
                className="w-full h-auto object-contain max-h-[320px] rounded-lg"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              The 16-bit LoRA adapter weights are fused back into Qwen2.5-3B-Instruct FP16, converted to GGUF format, and quantized with 4-bit medium block quantization for instantaneous zero-latency responses on edge CPU hardware.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
