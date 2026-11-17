import React, { useState } from 'react';
import { Layers, CheckCircle2, ChevronRight, Activity, Cpu, ShieldAlert, Sparkles, Binary } from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function CoreInnovations() {
  const [activePillar, setActivePillar] = useState('physics-twin');

  const selected = projectInfo.corePillars.find(p => p.id === activePillar) || projectInfo.corePillars[0];

  return (
    <section id="pillars" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>Architectural Breakthroughs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 5 Core Implementation Innovations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            A comprehensive, sensor-less cyber-physical stack bridging thermodynamic physics, deep sequence modeling, dual-stream computer vision, and offline generative intelligence.
          </p>
        </div>

        {/* Pillar Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {projectInfo.corePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activePillar === pillar.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold scale-[1.02]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                activePillar === pillar.id ? 'bg-slate-950 text-emerald-400' : 'bg-slate-800 text-slate-400'
              }`}>
                {pillar.num}
              </span>
              <span>{pillar.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Pillar Content View */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Details, Specs, Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-emerald-400 text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    PILLAR {selected.num}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {selected.subtitle}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {selected.title}
                </h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              {/* Dynamic Sub-Sections: Equations for Physics */}
              {selected.equations && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>First-Principles Psychrometric Formulations</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selected.equations.map((eq, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 font-mono">
                        <span className="text-[10px] text-emerald-400 block font-sans font-semibold mb-1">{eq.name}</span>
                        <code className="text-slate-200 text-[11px]">{eq.latex}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic Sub-Sections: Metrics for LSTM */}
              {selected.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">24h ROC-AUC</span>
                    <span className="text-xl font-black text-emerald-400">{selected.metrics.auc24}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">48h ROC-AUC</span>
                    <span className="text-xl font-black text-emerald-400">{selected.metrics.auc48}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">72h ROC-AUC</span>
                    <span className="text-xl font-black text-emerald-400">{selected.metrics.auc72}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Validation Loss</span>
                    <span className="text-xl font-black text-amber-400">{selected.metrics.valLoss}</span>
                  </div>
                </div>
              )}

              {/* Dynamic Sub-Sections: Models for Vision */}
              {selected.models && (
                <div className="space-y-3">
                  {selected.models.map((mod, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <strong className="text-sm font-bold text-white">{mod.name}</strong>
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          {mod.accuracy}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {mod.params} • Dataset: {mod.dataset}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {mod.classes.map((cls, ci) => (
                          <span key={ci} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                            {cls}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Dynamic Sub-Sections: Rules for Safety */}
              {selected.rules && (
                <div className="space-y-3">
                  {selected.rules.map((rule, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-900/90 border border-rose-500/30 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          {rule.stage} Enforcement
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                          {rule.gate}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong className="text-white">Threat:</strong> {rule.threat}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {rule.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Dynamic Sub-Sections: Specs for SLM */}
              {selected.specs && (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Model Architecture:</span>
                      <strong className="text-white font-mono">{selected.specs.baseModel}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Fine-Tuning Hardware:</span>
                      <strong className="text-amber-300 font-mono">{selected.specs.hardware}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Deployment Weight:</span>
                      <strong className="text-emerald-400 font-mono">{selected.specs.format}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">RAG Vector Index:</span>
                      <strong className="text-slate-200 font-mono">{selected.specs.ragEmbeddings}</strong>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Grounding Corpus:</strong> {selected.specs.knowledgeCorpus}
                  </div>
                </div>
              )}

              {/* Features List */}
              {selected.features && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Operational Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selected.features.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Architectural Diagram / High-res Figure */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-xl flex items-center justify-center p-2 min-h-[320px]">
                <img
                  src={selected.diagram}
                  alt={selected.title}
                  className="w-full h-auto object-contain max-h-[380px] rounded-lg hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="font-mono text-[11px]">Figure Source: M.Tech Thesis & Patent Document</span>
                <a
                  href={selected.diagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline font-mono text-[11px]"
                >
                  Full Scale ↗
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
