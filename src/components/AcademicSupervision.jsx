import React from 'react';
import { Mail, CheckCircle2, UserCheck, GraduationCap, Building2, Award, ShieldCheck, BookOpen, ArrowUpRight } from 'lucide-react';
import { projectInfo } from '../data/projectData';
import Interactive3DTilt from './Interactive3DTilt';

export default function AcademicSupervision() {
  return (
    <section id="supervision" className="py-16 sm:py-20 bg-[#f7f7f9] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0052cc] block mb-1">
            RESEARCH LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[#0d0d11]">
            Faculty Guidance & Mentorship.
          </h2>
          <p className="text-sm sm:text-base text-[#62626e] mt-2 font-normal">
            Conducted under the research supervision of distinguished faculty at the Department of Computer Science and Engineering, Amrita School of Computing, Amrita Vishwa Vidyapeetham, Coimbatore.
          </p>
        </div>

        {/* Advisors 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Thesis Advisor Dr. Anbazhagan M. */}
          <Interactive3DTilt maxTilt={6} scale={1.01} className="h-full">
            <div className="gapsy-card p-8 flex flex-col justify-between h-full hover:border-[#0052cc]/30">
              <div>
                {/* Header Lockup */}
                <div className="flex items-start gap-4 pb-5 border-b border-black/[0.06]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0062ff] to-[#4f46e5] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <UserCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        {projectInfo.guide.name}
                      </h3>
                    </div>
                    <p className="text-xs font-bold text-[#0052cc] mt-0.5 uppercase tracking-wide">
                      {projectInfo.guide.role} • {projectInfo.guide.designation}
                    </p>
                    <p className="text-xs text-[#484852] mt-0.5 font-medium">
                      {projectInfo.guide.department}, {projectInfo.guide.school}
                    </p>
                    <p className="text-xs text-[#86868b]">
                      {projectInfo.guide.institution}
                    </p>
                  </div>
                </div>

                {/* Research Supervision Focus */}
                <div className="pt-5 space-y-4">
                  <span className="text-xs font-mono font-bold text-[#0d0d11] uppercase tracking-wider block">
                    Thesis Supervision Focus
                  </span>
                  <p className="text-xs sm:text-sm text-[#484852] leading-relaxed">
                    Direct academic guidance spanning cyber-physical system architecture, thermodynamic indoor climate simulation, bidirectional sequence learning for 72-hour disease risk forecasting, and deterministic phenological bio-safety gating.
                  </p>

                  {/* 4 Focus Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-[#f7f7f9] border border-black/[0.04] flex items-center gap-2 text-[#33333d]">
                      <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                      <span className="font-semibold">Cyber-Physical Twin</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#f7f7f9] border border-black/[0.04] flex items-center gap-2 text-[#33333d]">
                      <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                      <span className="font-semibold">Sequence Forecasting</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#f7f7f9] border border-black/[0.04] flex items-center gap-2 text-[#33333d]">
                      <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                      <span className="font-semibold">Plant Pathology Vision</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#f7f7f9] border border-black/[0.04] flex items-center gap-2 text-[#33333d]">
                      <CheckCircle2 className="w-4 h-4 text-[#087443] shrink-0" />
                      <span className="font-semibold">Offline Edge Reasoning</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Contact Strip */}
              <div className="pt-5 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#62626e]">
                <a 
                  href={`mailto:${projectInfo.guide.email}`}
                  className="font-mono text-xs text-[#0052cc] hover:underline font-bold flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {projectInfo.guide.email}
                </a>
                <span className="font-bold text-[#0d0d11] bg-[#f0f0f4] px-3 py-1 rounded-full text-[11px]">
                  Thesis Advisor & Guide
                </span>
              </div>
            </div>
          </Interactive3DTilt>

          {/* Card 2: M.Tech Program Advisor Dr. Bagavathi C. */}
          <Interactive3DTilt maxTilt={6} scale={1.01} className="h-full">
            <div className="gapsy-card p-8 flex flex-col justify-between h-full hover:border-[#0052cc]/30">
              <div>
                {/* Header Lockup */}
                <div className="flex items-start gap-4 pb-5 border-b border-black/[0.06]">
                  <div className="w-14 h-14 rounded-2xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d0d11] tracking-tight">
                        {projectInfo.mtechAdvisor.name}
                      </h3>
                    </div>
                    <p className="text-xs font-bold text-[#0052cc] mt-0.5 uppercase tracking-wide">
                      {projectInfo.mtechAdvisor.role}
                    </p>
                    <p className="text-xs text-[#484852] mt-0.5 font-medium">
                      {projectInfo.mtechAdvisor.designation}, {projectInfo.mtechAdvisor.department}
                    </p>
                    <p className="text-xs text-[#86868b]">
                      {projectInfo.mtechAdvisor.institution}
                    </p>
                  </div>
                </div>

                {/* Program Supervision */}
                <div className="pt-5 space-y-4">
                  <span className="text-xs font-mono font-bold text-[#0d0d11] uppercase tracking-wider block">
                    M.Tech CSE Program Governance
                  </span>
                  <p className="text-xs sm:text-sm text-[#484852] leading-relaxed">
                    Academic leadership, curriculum coordination, and institutional research oversight for the Master of Technology program in Computer Science and Engineering, fostering cyber-physical innovation for agricultural sustainability.
                  </p>

                  {/* Institutional Specs */}
                  <div className="p-4 rounded-xl bg-[#f7f7f9] border border-black/[0.04] space-y-2 text-xs text-[#484852]">
                    <div className="flex justify-between items-center">
                      <span className="text-[#62626e]">Postgraduate Degree:</span>
                      <strong className="text-[#0d0d11]">M.Tech Computer Science & Engineering</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#62626e]">Academic School:</span>
                      <strong className="text-[#0d0d11]">Amrita School of Computing, Coimbatore</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#62626e]">Institutional Rank:</span>
                      <strong className="text-[#087443] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        NAAC A++ Grade • NIRF Top 10
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Governance Strip */}
              <div className="pt-5 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#62626e]">
                <span className="font-bold text-[#0d0d11]">
                  Department Chairperson
                </span>
                <span className="font-mono text-xs font-bold text-[#0052cc] bg-[#eef4ff] px-3 py-1 rounded-full border border-[#cce0ff]">
                  M.Tech CSE Program
                </span>
              </div>
            </div>
          </Interactive3DTilt>

        </div>

        {/* Scholar Attribution Strip */}
        <div className="gapsy-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#484852]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#edfcf2] text-[#087443] flex items-center justify-center font-bold shrink-0 border border-[#b7f4cb]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[#62626e] block text-[10px] font-mono uppercase font-bold tracking-wider">
                ABOUT SAJIN • M.TECH DEGREE CANDIDATE
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <strong className="text-[#0d0d11] text-base font-extrabold">{projectInfo.author.name}</strong>
                <span className="text-[#0052cc] font-mono font-bold bg-[#eef4ff] px-2 py-0.5 rounded border border-[#cce0ff]">
                  {projectInfo.author.rollNo}
                </span>
              </div>
              <a 
                href={`mailto:${projectInfo.author.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 hover:text-[#0052cc] transition-colors mt-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#0052cc]" />
                <span>{projectInfo.author.email}</span>
              </a>
            </div>
          </div>
          <div className="text-left md:text-right text-xs space-y-0.5">
            <div className="font-bold text-[#0d0d11] tracking-wide">AMRITA VISHWA VIDYAPEETHAM</div>
            <div className="text-[#484852]">Amrita School of Computing, Coimbatore</div>
            <div className="text-[#0052cc] font-medium">Department of Computer Science and Engineering</div>
          </div>
        </div>

      </div>
    </section>
  );
}
