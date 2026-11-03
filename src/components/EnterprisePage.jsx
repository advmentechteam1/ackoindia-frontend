import React, { useState } from 'react';
import {
  Building2, Users, Truck, Bike, Code2, ShieldCheck, HeartPulse, Briefcase,
  ArrowRight, Check, Zap, FileText, BarChart3, Headphones, Rocket, Send
} from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';

const solutions = [
  { icon: HeartPulse, title: 'Group Health', desc: 'Cashless cover for employees and their families, live from day one. Add or remove members in minutes.', tag: 'Most chosen', tone: 'rose' },
  { icon: Bike, title: 'Gig Worker Cover', desc: 'Accident and medical cover for delivery and app-based partners, active only while they work.', tag: 'Pay per use', tone: 'emerald' },
  { icon: Truck, title: 'Fleet & Logistics', desc: 'One policy for every vehicle, with goods-in-transit cover and a single claims desk.', tag: 'Commercial', tone: 'amber' },
  { icon: Code2, title: 'Embedded Insurance API', desc: 'Sell cover inside your own app or checkout with a few lines of code. We handle issuance and claims.', tag: 'For platforms', tone: 'indigo' },
  { icon: Briefcase, title: 'Employee Benefits', desc: 'Term life, personal accident and wellness plans bundled into one benefits dashboard.', tag: 'HR teams', tone: 'sky' },
  { icon: Building2, title: 'Property & Office', desc: 'Protect offices, stock and equipment against fire, theft and natural calamities.', tag: 'SMEs', tone: 'violet' }
];

const tones = {
  rose: 'bg-rose-50 text-rose-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  sky: 'bg-sky-50 text-sky-600',
  violet: 'bg-violet-50 text-violet-600'
};

const stats = [
  { v: '5,000+', l: 'Businesses covered' },
  { v: '25 L+', l: 'Employees protected' },
  { v: '60 min', l: 'Cashless pre-auth' },
  { v: '98%', l: 'Claims settled digitally' }
];

const steps = [
  { icon: FileText, title: 'Tell us about your team', desc: 'Share headcount, locations and the cover you need. No lengthy forms.' },
  { icon: BarChart3, title: 'Get a tailored plan', desc: 'A dedicated advisor builds a plan and a transparent quote within 24 hours.' },
  { icon: Rocket, title: 'Go live in days', desc: 'Onboard employees through a single sheet or an API. Policies are issued instantly.' },
  { icon: Headphones, title: 'We stay by your side', desc: 'A named account manager and a 24x7 helpline for you and your people.' }
];

const perks = [
  'Dedicated account manager',
  'Single dashboard for policies and claims',
  'Add or remove members anytime',
  'Cashless at 14,300+ hospitals',
  'Zero paperwork onboarding',
  'GST invoices and audit-ready reports'
];

const snippet = `POST /v1/policies
{
  "product": "gig_accident",
  "partner_id": "rider_48211",
  "cover_amount": 500000,
  "valid_for": "8h"
}

// 201 Created
{ "policy_id": "pol_91x2", "status": "active" }`;

export default function EnterprisePage() {
  const { showToast } = useInsuranceContext();
  const [form, setForm] = useState({ name: '', company: '', email: '', size: '11-50', need: 'Group Health' });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    showToast(`Thanks ${form.name || 'there'}! Our enterprise team will contact you within 24 hours.`);
    setForm({ name: '', company: '', email: '', size: '11-50', need: 'Group Health' });
  };

  const scrollToForm = () => document.getElementById('enterprise-contact')?.scrollIntoView({ behavior: 'smooth' });

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6332ec]/30 focus:border-[#6332ec]';

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-indigo-500/25 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none"></div>
        <div className="relative w-full px-[4%] py-16 sm:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-indigo-200">
              <Building2 className="w-3.5 h-3.5" /> ACKOIndia for Enterprise
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
              Insurance your team <span className="text-violet-300">will actually use</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl font-medium">
              Health, accident, fleet and embedded cover for businesses of every size. Fast onboarding, cashless care and claims that settle in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={scrollToForm} className="px-7 py-3.5 rounded-2xl bg-white text-gray-900 text-sm font-extrabold hover:bg-indigo-50 transition inline-flex items-center gap-2">
                Talk to our team <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#" className="px-7 py-3.5 rounded-2xl border border-white/20 text-sm font-bold text-white hover:bg-white/10 transition">
                Back to home
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="text-3xl font-black">{s.v}</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="w-full px-[4%] py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6332ec]">Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2 leading-[1.1]">One partner for every kind of cover</h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium">Pick a plan that fits your business today and scale it as you grow.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map(({ icon: Icon, title, desc, tag, tone }) => (
            <div key={title} className="rounded-[28px] border border-gray-200 bg-white p-6 hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col group">
              <div className="flex items-center justify-between">
                <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tones[tone]}`}>
                  <Icon className="w-6 h-6" />
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
              <button onClick={scrollToForm} className="mt-5 text-sm font-bold text-[#6332ec] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Get a quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50/80 border-y border-gray-200/60">
        <div className="w-full px-[4%] py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6332ec]">How it works</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2 leading-[1.1]">Live in four simple steps</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative rounded-3xl bg-white border border-gray-200 p-6">
                <span className="absolute top-5 right-5 text-4xl font-black text-gray-100">{i + 1}</span>
                <span className="w-11 h-11 rounded-2xl bg-indigo-50 text-[#6332ec] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why + API */}
      <section className="w-full px-[4%] py-16 sm:py-20 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-[28px] border border-gray-200 bg-white p-8">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6332ec]">Why teams choose us</span>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mt-2 leading-[1.1]">Built for HR, finance and product teams</h2>
          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] bg-gray-950 text-white p-8 flex flex-col">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-widest">
            <Zap className="w-4 h-4" /> Embedded insurance API
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-3 leading-tight">Add insurance to your app in an afternoon</h2>
          <p className="text-sm text-slate-400 mt-2">Create a policy with one request. We take care of underwriting, documents and claims.</p>
          <pre className="mt-6 flex-1 rounded-2xl bg-black/50 border border-white/10 p-5 text-[12px] sm:text-[13px] leading-relaxed text-emerald-200 overflow-x-auto"><code>{snippet}</code></pre>
        </div>
      </section>

      {/* Contact */}
      <section id="enterprise-contact" className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-t border-gray-200/60 scroll-mt-24">
        <div className="w-full px-[4%] py-16 sm:py-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6332ec]">Get in touch</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-2 leading-[1.1]">Let's build your cover</h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-medium max-w-md">
              Tell us a little about your business. An enterprise advisor will reach out within one working day.
            </p>
            <div className="mt-8 space-y-3 text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#6332ec]" /> IRDAI regulated insurer</div>
              <div className="flex items-center gap-3"><Users className="w-5 h-5 text-[#6332ec]" /> Dedicated onboarding team</div>
              <div className="flex items-center gap-3"><Headphones className="w-5 h-5 text-[#6332ec]" /> enterprise@ackoindia.com</div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 rounded-[28px] bg-white border border-gray-200 shadow-xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-bold text-gray-600">Your name</span>
              <input required value={form.name} onChange={update('name')} placeholder="Full name" className={`mt-1.5 ${inputCls}`} />
            </label>
            <label className="block">
              <span className="text-xs font-bold text-gray-600">Company</span>
              <input required value={form.company} onChange={update('company')} placeholder="Company name" className={`mt-1.5 ${inputCls}`} />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-bold text-gray-600">Work email</span>
              <input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" className={`mt-1.5 ${inputCls}`} />
            </label>
            <label className="block">
              <span className="text-xs font-bold text-gray-600">Team size</span>
              <select value={form.size} onChange={update('size')} className={`mt-1.5 ${inputCls}`}>
                {['1-10', '11-50', '51-200', '201-1000', '1000+'].map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-bold text-gray-600">I'm interested in</span>
              <select value={form.need} onChange={update('need')} className={`mt-1.5 ${inputCls}`}>
                {solutions.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </label>
            <button type="submit" className="sm:col-span-2 mt-2 px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-[#6332ec] text-white text-sm font-extrabold transition inline-flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Request a callback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
