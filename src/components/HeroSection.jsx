import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Activity, 
  Cpu, 
  Target, 
  Clock, 
  DollarSign, 
  Leaf, 
  Zap,
  Award,
  Layers,
  BookOpen,
  Search,
  CheckCircle2,
  Play
} from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function HeroSection({ onOpenSearch }) {
  const [activeArchTab, setActiveArchTab] = useState('runtime');

  const archTabs = [
    { id: 'runtime', label: 'Runtime Architecture', image: '/assets/runtime architecture.png', caption: 'Cyber-Physical Digital Twin complete runtime pipeline from Open-Meteo API to 3D WebGL HUD and Edge SLM.' },
    { id: 'training', label: 'H200 Training Pipeline', image: '/assets/H200 Model Training & Artifact Deployment Pipeline.png', caption: 'NVIDIA H200 NVL (150GB VRAM) dual vision, Bi-LSTM attention, and QLoRA SLM training pipeline.' },
    { id: 'layers', label: 'System Layers', image: '/assets/system_layers.jpg', caption: 'Layered hierarchy: Boundary Ingestion, Thermodynamic Physics, Dual Perception, Phenology Gating, and RAG Reasoning.' }
  ];

  return (
    <section id="overview" className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Institutional & Guide Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-semibold text-white">M.Tech Thesis Defense & Research System</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amrita-maroon/20 border border-rose-500/30 text-rose-200 text-xs font-medium">
            <span className="font-bold text-rose-300">Amrita Vishwa Vidyapeetham</span>
            <span className="text-rose-400">•</span>
            <span>NAAC A++ • NIRF #7</span>
          </div>

          <a 
            href="#leadership" 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:border-emerald-400 hover:text-emerald-200 transition-all"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Guided by <strong>Dr. Anbazhagan M.</strong></span>
          </a>
        </div>

        {/* Thesis Title */}
        <div className="text-center max-w-4xl mx-auto mb-8 animate-in fade-in slide-in-from-top-6 duration-700">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
            A Hardware-Free Cyber-Physical <span className="text-gradient-emerald">Digital Twin</span> for Pre-Symptomatic Disease Forecasting & Mitigation
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
            Democratizing protected tomato horticulture in the <strong className="text-white">Dindigul Agricultural Basin</strong> by replacing costly, drifting physical IoT sensors with a <strong className="text-emerald-400">zero-hardware psychrometric physics model</strong>, Bi-LSTM attention forecaster, dual-engine vision, and an offline edge SLM.
          </p>

          {/* Authorship and Academic Metadata Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-xs sm:text-sm text-slate-300 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Researcher:</span>
              <strong className="text-white font-semibold">Sajin Simon</strong>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                [CB.SC.P2CSE25031]
              </span>
            </div>
            <div className="hidden sm:block text-slate-600">|</div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Thesis Advisor:</span>
              <a href="#leadership" className="text-amber-300 font-semibold hover:underline flex items-center gap-1">
                Dr. Anbazhagan M.
                <Award className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
            <div className="hidden sm:block text-slate-600">|</div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Dept:</span>
              <span className="text-slate-200">CSE, Amrita School of Computing, Coimbatore</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#simulator"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all"
          >
            <Activity className="w-4 h-4 text-slate-950" />
            <span>Launch Live Twin Simulator</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#leadership"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Guide & University Profile</span>
          </a>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-emerald-400 font-semibold text-sm border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Search Research Side (/)</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14">
          {projectInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-hover p-4 rounded-2xl flex flex-col justify-between border border-slate-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-slate-400 leading-tight">
                  {stat.label}
                </span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium font-mono">
                    {stat.unit}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                  {stat.comparison}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture Viewer Container */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Validated Research Architecture & Execution Pipeline
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Full-stack integration of physics twins, Bi-LSTM attention, dual vision classifiers, and offline SLM
              </p>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              {archTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeArchTab === tab.id
                      ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Preview */}
          {archTabs.map((tab) => {
            if (tab.id !== activeArchTab) return null;
            return (
              <div key={tab.id} className="space-y-3 animate-in fade-in duration-300">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center min-h-[300px] max-h-[520px]">
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="w-full h-auto object-contain max-h-[500px] hover:scale-[1.01] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {tab.caption}
                  </span>
                  <a 
                    href={tab.image} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-emerald-400 hover:underline font-mono text-[11px]"
                  >
                    View High-Res Figure →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
