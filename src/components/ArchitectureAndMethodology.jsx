import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export default function ArchitectureAndMethodology() {
  const layers = [
    {
      num: "01",
      title: "Meteorological Ingestion",
      tech: "Open-Meteo API + Solar Diurnal Model",
      desc: "Fetches ambient dry-bulb temperature, relative humidity, solar radiation, and wind velocity for Dindigul (10.36°N, 77.97°E). An analytical solar fallback model guarantees 100% microclimate computation during rural network dropouts."
    },
    {
      num: "02",
      title: "Thermodynamic Physics Twin",
      tech: "Magnus-Tetens Psychrometrics",
      desc: "Solves greenhouse microclimate dynamics mathematically without indoor hardware. Calculates indoor dry-bulb temperature, relative humidity, saturated vapor pressure (Es), actual vapor pressure (Ea), dew point (Tdew), and vapor pressure deficit (VPD) inside a 3,000 m³ polyhouse."
    },
    {
      num: "03",
      title: "Sequence Risk Forecaster",
      tech: "2-Layer Bi-LSTM with 4-Head Attention",
      desc: "Reads 168-hour temporal sequences across 9 engineered microclimatic features to detect latent incubation windows for Phytophthora infestans (Late Blight) and Alternaria solani (Early Blight) 24h (AUC 0.854), 48h (AUC 0.799), and 72h (AUC 0.725) ahead."
    },
    {
      num: "04",
      title: "Dual Vision & Bio-Safety",
      tech: "YOLOv11m (99.74%) + EfficientNet-B0 (99.45%)",
      desc: "YOLOv11m classifies 6 foliar diseases while EfficientNet-B0 identifies 6 developmental growth stages. A deterministic safety interlock blocks daytime sprays during Flowering to protect honeybees and bans systemic fungicides (Metalaxyl/Mancozeb) during Harvest."
    },
    {
      num: "05",
      title: "Offline Edge SLM Reasoning",
      tech: "Qwen2.5-3B QLoRA (1.93 GB) + ChromaDB RAG",
      desc: "Fine-tuned virtual agronomist 'Dr. Thangavelu' synthesizes physics telemetry, LSTM risk scores, and vision predictions into actionable recommendations in English and native Tamil, fully offline on a standard laptop CPU."
    }
  ];

  return (
    <section id="architecture" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0071e3] block mb-2">
            System Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight">
            Five Layers. Zero Physical Sensors.
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] mt-3">
            From atmospheric boundary ingestion to offline edge language generation, every stage is mathematically coupled.
          </p>
        </div>

        {/* Runtime Architecture Big Figure Display */}
        <div className="bg-[#f5f5f7] rounded-3xl p-6 sm:p-10 border border-black/[0.06] mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-black/[0.06]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] block font-mono">
                Full-Stack Cyber-Physical Runtime Pipeline
              </span>
              <span className="text-xs text-[#86868b]">
                Continuous closed-loop synchronization from Open-Meteo boundary inputs to offline Dr. Thangavelu SLM
              </span>
            </div>
            <span className="text-xs font-mono text-[#0071e3] font-semibold">
              Thesis Figure 3.1
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-black/[0.04] shadow-xs flex items-center justify-center">
            <img 
              src="/assets/runtime architecture.png" 
              alt="Runtime Architecture" 
              className="w-full h-auto object-contain max-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {layers.map((layer, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#86868b] block mb-1">
                  LAYER {layer.num}
                </span>
                <h3 className="text-base font-bold text-[#1d1d1f] leading-snug">
                  {layer.title}
                </h3>
                <span className="inline-block text-[10px] font-mono font-semibold text-[#0071e3] mt-1 mb-3">
                  {layer.tech}
                </span>
                <p className="text-xs text-[#515154] leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
