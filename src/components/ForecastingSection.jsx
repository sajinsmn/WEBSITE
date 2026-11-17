import React, { useState } from 'react';
import { Clock, TrendingUp, Cpu, CheckCircle2, AlertOctagon, BarChart3, LineChart, Sparkles } from 'lucide-react';
import { projectInfo } from '../data/projectData';

export default function ForecastingSection() {
  const [selectedHorizon, setSelectedHorizon] = useState('24h');

  const horizons = [
    {
      id: '24h',
      time: '24 Hours Ahead',
      auc: '0.8538',
      precision: '84.2%',
      recall: '86.1%',
      riskAction: 'Immediate Cultural Intervention',
      actionDetails: 'Trigger nighttime vent crack (15%) + circulation fans to break foliar boundary layer and avert dew formation.'
    },
    {
      id: '48h',
      time: '48 Hours Ahead',
      auc: '0.7988',
      precision: '79.5%',
      recall: '80.3%',
      riskAction: 'Preventive Biological Bio-Shield',
      actionDetails: 'Schedule application of Trichoderma viride or Bacillus subtilis before sporulation window opens.'
    },
    {
      id: '72h',
      time: '72 Hours Ahead',
      auc: '0.7250',
      precision: '72.8%',
      recall: '73.4%',
      riskAction: 'Microclimate Regime Adjustment',
      actionDetails: 'Pre-condition greenhouse thermal mass and reduce irrigation frequency to lower ambient transpiration load.'
    }
  ];

  const featuresList = [
    { name: 'Indoor Temperature (T_in)', desc: 'Dry-bulb temperature derived from psychrometric solar coupling' },
    { name: 'Relative Humidity (RH_in)', desc: 'Ambient moisture saturation level governing fungal conidia hydration' },
    { name: 'Vapor Pressure Deficit (VPD)', desc: 'Direct thermodynamic indicator of plant transpiration stress' },
    { name: 'Nonlinear VPD Risk Score', desc: 'Exponential penalty when VPD drops below critical 0.4 kPa barrier' },
    { name: 'Binary Leaf Wetness (LWP)', desc: 'Surface condensation flag derived from Magnus dew-point exceedance' },
    { name: '24h Rolling Wetness (W_24h)', desc: 'Cumulative hours of foliar saturation required for fungal germ tube penetration' },
    { name: '24h Diurnal Temp Swing', desc: 'Differential driving thermal condensation cycles on polyethylene cladding' },
    { name: 'Dew-Point Exceedance Margin', desc: 'Safety delta (T_in - T_dew) indicating proximity to microclimatic saturation' },
    { name: 'Normalized Solar Radiation', desc: 'Astronomical diurnal curve driving daylight stomatal gas exchange' }
  ];

  return (
    <section id="forecasting" className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Pre-Symptomatic Sequence Forecaster</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Predicting Pathogens 72 Hours Before Lesions Erupt
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Conventional phone apps detect fungal blight only after foliar necrosis occurs. Our 2-layer Bidirectional LSTM with 4-head Multi-Head Self-Attention processes 168-hour microclimatic windows to intervene before spores germinate.
          </p>
        </div>

        {/* Horizons Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {horizons.map((h) => {
            const isSelected = selectedHorizon === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setSelectedHorizon(h.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900/90 border-emerald-500 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/40'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Horizon Window
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    ROC-AUC {h.auc}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  {h.time}
                </h3>
                <span className="text-xs font-semibold text-emerald-400 block mb-3">
                  {h.riskAction}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {h.actionDetails}
                </p>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Grid: Figures on Left, Feature Engineering on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Validation Charts (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="glass-card rounded-2xl p-5 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <LineChart className="w-4 h-4 text-emerald-400" />
                  Multi-Horizon ROC Validation Curves
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  17,544 Hours Curation
                </span>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 p-2 flex items-center justify-center">
                <img
                  src="/assets/lstm_roc.png"
                  alt="Bi-LSTM Multi-Horizon ROC-AUC Curves"
                  className="w-full h-auto object-contain max-h-[350px] rounded-lg"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Empirical ROC-AUC convergence demonstrating strong discriminatory capability: 0.8538 at 24h, 0.7988 at 48h, and 0.7250 at 72h.
              </p>
            </div>

            {/* Microclimate Time-Series Trace */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-teal-400" />
                  7-Day Microclimate Sequence & Leaf Wetness Trace
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Dindigul Polyhouse
                </span>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 p-2 flex items-center justify-center">
                <img
                  src="/assets/microclimate_week.png"
                  alt="7-day microclimate sequence"
                  className="w-full h-auto object-contain max-h-[260px] rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 9 Engineered Microclimate Features (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono block mb-1">
                Mathematical Architecture
              </span>
              <h3 className="text-lg font-black text-white">
                9 Engineered Microclimate Features
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fed sequentially into the 2-layer Bi-LSTM (4,884,483 parameters) with 4-head Multi-Head Self-Attention.
              </p>
            </div>

            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
              {featuresList.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-emerald-300">
                      f_{idx + 1}: {feat.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      t-168h..t
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-mono">
              <span>Loss: 0.015603 (MSE)</span>
              <span>Optimizer: AdamW (lr=1e-4)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
