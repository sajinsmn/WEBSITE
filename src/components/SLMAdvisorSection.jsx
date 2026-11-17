import React, { useState } from 'react';
import { Bot, ShieldAlert, CheckCircle2, Languages, Sparkles, Database, Cpu, MessageSquare } from 'lucide-react';

export default function SLMAdvisorSection() {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      title: "Case 1: Late Blight at Ripe Harvest Stage",
      tag: "Harvest Lockout Enforced",
      threat: "Critical Fungal Risk (VPD: 0.32 kPa, RH: 94%)",
      stage: "Ripe Harvest Stage (S6_HARVEST)",
      systemicChemicalBlocked: "Metalaxyl-M 4% + Mancozeb 64% WP (PHI: 14 Days)",
      bioSubstitute: "Trichoderma viride @ 5 g/L + Bacillus subtilis @ 10 mL/L",
      englishAdvisory: `**CRITICAL AGRO-ADVISORY: IMMEDIATE HARVEST PHI LOCKOUT**
1. **Diagnosis & Risk Level**: Microclimate indicates extreme Late Blight sporulation pressure (VPD 0.32 kPa, 94% RH at 19.5°C). 
2. **Deterministic Safety Gating**: Plant is in the **Ripe Harvest Stage**. All systemic fungicides (Metalaxyl, Mancozeb) carry a statutory 7 to 14-day Pre-Harvest Interval (PHI) and are **STRICTLY PROHIBITED** under CIBRC regulations to prevent toxic residue ingestion by consumers.
3. **Mandated Biological Action**: Immediately foliar-spray organic bio-antagonist *Trichoderma viride* @ 5 g/L (zero-day PHI, safe for harvest).
4. **Physical Actuator Override**: Open ridge vents 40% and activate exhaust fans for 25 minutes to drive polyhouse RH down to 75% and elevate VPD above 0.8 kPa.`,
      tamilAdvisory: `**முக்கிய வேளாண்மை எச்சரிக்கை: அறுவடை கால பாதுகாப்பு தடை**
1. **நோய் மற்றும் காலநிலை அபாயம்**: பாலிஹவுஸ் ஈரப்பதம் 94% ஆக உயர்ந்துள்ளதால் தக்காளி பின் பருவ கருகல் நோய் (Late Blight) பரவும் அபாயம் மிக அதிகம்.
2. **பாதுகாப்பு விதிமுறை**: பயிர் **முதிர்ந்த அறுவடை நிலையில்** உள்ளது. மெட்டலாக்சில் அல்லது மேன்கோசெப் போன்ற ரசாயன மருந்துகள் 7-14 நாட்கள் விஷத்தன்மையை தக்கவைக்கும் (PHI). எனவே இவற்றை தெளிப்பது முற்றிலும் தடை செய்யப்பட்டுள்ளது.
3. **பரிந்துரைக்கப்படும் இயற்கை தீர்வு**: உடனே டிரைக்கோடெர்மா விரிடி (Trichoderma viride) 5 கிராம்/லிட்டர் வீதம் நீரில் கலந்து இலைகளில் தெளிக்கவும் (பாதுகாப்பானது).
4. **காற்றோட்ட நடவடிக்கை**: மேல் கூரை வென்ட்களை 40% திறந்து, எக்சாஸ்ட் ஃபேன்களை 25 நிமிடங்கள் இயக்கி ஈரப்பதத்தை குறைக்கவும்.`
    },
    {
      title: "Case 2: Early Blight Risk during Midday Flowering",
      tag: "Pollinator Protection Active",
      threat: "Alternaria solani incubation trigger (RH: 86%, Temp: 27°C)",
      stage: "Flowering Stage (S2_FLOWER)",
      systemicChemicalBlocked: "Daytime spraying barred (10:00 AM – 4:00 PM)",
      bioSubstitute: "Evening application of Pseudomonas fluorescens @ 5 g/L",
      englishAdvisory: `**POLLINATOR SAFETY INTERLOCK: DAYTIME SPRAY BAN ACTIVE**
1. **Phenological Constraint**: Crop is actively in the **Flowering Stage**. Honeybees (*Apis mellifera*) are actively foraging and cross-pollinating tomato blooms.
2. **Safety Barrier**: Chemical or foliar spraying between 10:00 AM and 4:00 PM is **STRICTLY BLOCKED**. Copper-based bactericides are prohibited due to flower-blossom burn.
3. **Delayed Treatment Window**: Defer all biological spray applications until late evening (after 5:30 PM). Apply *Pseudomonas fluorescens* @ 5 g/L.
4. **Microclimate Intervention**: Engage 50% shading screen to moderate canopy temperature and run circulation fans continuously.`,
      tamilAdvisory: `**தேனீக்கள் பாதுகாப்பு எச்சரிக்கை: பகல்நேர தெளிப்பு தடை**
1. **பூக்கும் பருவ கட்டுப்பாடு**: செடிகள் தற்போது **பூக்கும் நிலையில்** உள்ளன. தேனீக்கள் மகரந்த சேர்க்கை செய்யும் நேரம் இது.
2. **பாதுகாப்பு தடை**: காலை 10:00 மணி முதல் மாலை 4:00 மணி வரை எவ்வித மருந்துகளையும் தெளிப்பது தடை செய்யப்பட்டுள்ளது. தாமிர (Copper) மருந்துகள் பூக்களை கருகச் செய்யும் என்பதால் அனுமதிக்கப்படாது.
3. **மாலை நேர சிகிச்சை**: மாலை 5:30 மணிக்கு மேல் சூடோமோனாஸ் ஃபுளோரசன்ஸ் 5 கிராம்/லிட்டர் வீதம் தெளிக்கவும்.
4. **பாலிஹவுஸ் கட்டுப்பாடு**: நிழல் வலைகளை 50% விரித்து தக்காளி பூக்கள் உதிர்வதை தடுக்கவும்.`
    },
    {
      title: "Case 3: Vegetative Stage Preventive Shield",
      tag: "Full Cultural & Chemical Discretion",
      threat: "Moderate Septoria & Leaf Mold risk after cloudy spell",
      stage: "Vegetative Canopy Development (S1_VEG)",
      systemicChemicalBlocked: "None (Zero PHI conflict prior to flowering)",
      bioSubstitute: "Preventive Mancozeb 75% WP @ 2 g/L or Trichoderma viride",
      englishAdvisory: `**ROUTINE VEGETATIVE CANOPY MANAGEMENT**
1. **Growth Stage Context**: Early vegetative growth (Day 22). No open flowers or mature fruit present.
2. **Agronomic Advice**: Both preventive protectant fungicides (Mancozeb 75% WP @ 2 g/L) and biological inoculants are permitted.
3. **Humidity Management**: Maintain night VPD above 0.7 kPa by pulsing side ventilation. Monitor lower leaf canopy for early Septoria spots.`,
      tamilAdvisory: `**வளர்ச்சிப் பருவ பயிர் பாதுகாப்பு ஆலோசனை**
1. **பருவ நிலை**: பயிர் நட்ட 22-ஆம் நாள் வளர்ச்சி நிலை. பூக்களோ காய்களோ இல்லை.
2. **மருந்து தெளிப்பு**: மேன்கோசெப் 2 கிராம்/லிட்டர் அல்லது டிரைக்கோடெர்மா விரிடி தெளித்து நோய் வராமல் தடுக்கலாம்.
3. **பராமரிப்பு**: இரவில் பாலிஹவுஸ் பக்கவாட்டு திரைகளை லேசாக திறந்து ஈரப்பதம் தேங்காமல் பார்த்துக் கொள்ளவும்.`
    }
  ];

  return (
    <section id="slm" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>Edge SLM & Dr. Thangavelu Persona</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Offline Small Language Model "Agronomist-in-a-Box"
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Qwen2.5-3B fine-tuned via 4-bit QLoRA on NVIDIA H200 NVL and quantized to a 1.93 GB GGUF binary. Grounded by ChromaDB RAG across official TNAU, ICAR, and CIBRC crop guidelines, speaking fluent English and Tamil.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCase(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedCase === idx
                  ? 'bg-slate-900 border-emerald-500 shadow-lg ring-1 ring-emerald-500/30'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  {c.tag}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{c.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-1">{c.threat}</p>
            </button>
          ))}
        </div>

        {/* Interactive Advisory Display */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          
          {/* Top metadata banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-700 flex items-center justify-center text-slate-950 font-bold">
                <Bot className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  Dr. Thangavelu, Chief Agronomist AI
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                    Qwen2.5-3B Q4_K_M
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  RAG Knowledgebase: TNAU Agritech Portal • CIBRC Registered Fungicides • ICAR Polyhouse SOP
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 font-mono text-slate-300">
                100% Offline CPU Inference
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 font-mono text-emerald-400">
                Zero Cloud Token Cost
              </span>
            </div>
          </div>

          {/* Safety Interlock Enforcement Box */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <div className="flex items-center gap-2">
                <strong className="text-rose-300 uppercase tracking-wider font-bold">
                  Phenology-Gated Safety Interlock Decision:
                </strong>
                <span className="font-mono text-[11px] text-white bg-rose-500/20 px-2 py-0.2 rounded">
                  {cases[selectedCase].stage}
                </span>
              </div>
              <p className="text-slate-300">
                <span className="text-rose-400 font-semibold">Chemical Restriction:</span> {cases[selectedCase].systemicChemicalBlocked}
              </p>
              <p className="text-slate-300">
                <span className="text-emerald-400 font-semibold">Permitted Biocontrol:</span> {cases[selectedCase].bioSubstitute}
              </p>
            </div>
          </div>

          {/* Parallel English & Tamil Responses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            
            {/* English Column */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-emerald-400" />
                  Technical Agronomic Recommendation (English)
                </span>
                <span className="text-[10px] font-mono text-slate-400">Standard SOP</span>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed space-y-2 whitespace-pre-line font-sans">
                {cases[selectedCase].englishAdvisory}
              </div>
            </div>

            {/* Tamil Column */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-emerald-400" />
                  தமிழ் வழி வேளாண்மை வழிகாட்டல் (Tamil)
                </span>
                <span className="text-[10px] font-mono text-emerald-400">டிண்டுகல் விவசாயிகள் பயன்பாடு</span>
              </div>
              <div className="text-xs text-slate-300 leading-relaxed space-y-2 whitespace-pre-line font-sans">
                {cases[selectedCase].tamilAdvisory}
              </div>
            </div>

          </div>

          {/* Prompt Architecture & RAG Grounding Citation */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 font-mono">
              <Database className="w-3.5 h-3.5 text-teal-400" />
              ChromaDB Dense Embeddings: 384-d (all-MiniLM-L6-v2) • Top-k: 3 documents
            </span>
            <span className="text-slate-500 font-mono">
              Quantization: llama.cpp Q4_K_M (1.93 GB binary)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
