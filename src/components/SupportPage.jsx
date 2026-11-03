import React, { useState } from 'react';
import {
  Search, PhoneCall, MessageCircle, Mail, MapPin, Clock, FileText, CreditCard, RefreshCw,
  FolderOpen, ShieldAlert, Plus, Minus, Send, ArrowRight, Headphones, ClipboardCheck
} from 'lucide-react';
import { useInsuranceContext } from '../context/InsuranceContext';
import { CONTACT } from '../utils/contact';

const channels = [
  { icon: PhoneCall, title: 'Call us', value: CONTACT.phoneDisplay, note: 'Mon to Sun, 9 AM to 9 PM', href: CONTACT.phoneHref, tone: 'bg-indigo-50 text-indigo-600' },
  { icon: MessageCircle, title: 'WhatsApp', value: 'Chat with us', note: 'Replies within minutes', href: CONTACT.whatsappHref, tone: 'bg-emerald-50 text-emerald-600' },
  { icon: Mail, title: 'Email', value: CONTACT.email, note: 'We reply within one working day', href: `mailto:${CONTACT.email}`, tone: 'bg-rose-50 text-rose-600' },
  { icon: MapPin, title: 'Visit us', value: 'Greater Noida West', note: 'Techzone-4, NX One', href: CONTACT.mapHref, tone: 'bg-amber-50 text-amber-600' }
];

const topics = [
  { icon: ShieldAlert, title: 'Claims', desc: 'Raise, track or understand a claim' },
  { icon: FileText, title: 'My policy', desc: 'Download, edit or understand cover' },
  { icon: CreditCard, title: 'Payments', desc: 'Premium receipts and refunds' },
  { icon: RefreshCw, title: 'Renewals', desc: 'Renew early and keep your NCB' },
  { icon: FolderOpen, title: 'Documents', desc: 'What you need and how to upload' },
  { icon: Headphones, title: 'Something else', desc: 'Talk to a real person' }
];

const faqs = [
  { q: 'How do I raise a claim?', a: 'This website is an illustrative demo and cannot file real claims. Please call us on ' + CONTACT.phoneDisplay + ' to speak with someone about a claim.' },
  { q: 'How can I track my claim status?', a: 'The tracker on this page is a demo and does not show real claims. Please call or WhatsApp us for the status of a real claim.' },
  { q: 'Where can I download my policy document?', a: 'Your policy is sent on WhatsApp and email right after purchase. You can also download it any time from My Policies in the app.' },
  { q: 'Can I change details on my policy?', a: 'Yes. Name, address, nominee and contact details can be updated from the app. Changes that affect the premium, like vehicle details, are reviewed by our team.' },
  { q: 'How do I get a refund after cancelling?', a: 'Eligible refunds are credited to the original payment method within 7 working days of the cancellation being approved.' },
  { q: 'How do I renew my policy and keep my No Claim Bonus?', a: 'Choose Renewals from the menu, enter your vehicle number and we apply your NCB automatically. You can renew up to 60 days before expiry.' }
];

export default function SupportPage() {
  const { showToast } = useInsuranceContext();
  const [query, setQuery] = useState('');
  const [openIdx, setOpenIdx] = useState(0);
  const [claimNo, setClaimNo] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', topic: 'Claims', msg: '' });

  const shown = faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(query.trim().toLowerCase()));
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const track = (e) => {
    e.preventDefault();
    showToast('Demo only: claim tracking is not available yet. Please call or WhatsApp us for claim status.');
    setClaimNo('');
  };

  const submit = (e) => {
    e.preventDefault();
    showToast('Demo only: this form does not send your message. Please call or WhatsApp us.');
    setForm({ name: '', phone: '', topic: 'Claims', msg: '' });
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6332ec]/30 focus:border-[#6332ec]';

  return (
    <div>
      {/* Hero + search */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-b border-gray-200/60">
        <div className="w-full px-[4%] py-14 sm:py-20 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-indigo-100 text-xs font-bold text-[#6332ec]">
            <Headphones className="w-3.5 h-3.5" /> ACKOIndia Support
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
            How can we <span className="text-[#6332ec]">help you</span> today?
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium max-w-xl mx-auto">
            Find quick answers, track a claim or talk to a real person. We are here every day.
          </p>

          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for claims, renewals, refunds..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6332ec]/30 focus:border-[#6332ec]"
            />
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="w-full px-[4%] py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map(({ icon: Icon, title, value, note, href, tone }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="rounded-3xl border border-gray-200 bg-white p-6 hover:shadow-xl hover:border-indigo-200 transition-all group"
            >
              <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tone}`}>
                <Icon className="w-6 h-6" />
              </span>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-400">{title}</div>
              <div className="mt-1 text-base font-extrabold text-gray-900 break-words group-hover:text-[#6332ec] transition-colors">{value}</div>
              <div className="mt-1 text-xs text-gray-500 font-medium">{note}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="bg-slate-50/80 border-y border-gray-200/60">
        <div className="w-full px-5 sm:px-[4%] py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Browse by topic</h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {topics.map(({ icon: Icon, title, desc }) => (
              <button
                key={title}
                onClick={() => { setQuery(title === 'Something else' ? '' : title.toLowerCase()); showToast(`Showing help for ${title}`); }}
                className="text-left rounded-3xl bg-white border border-gray-200 p-5 hover:shadow-lg hover:border-indigo-200 transition-all"
              >
                <span className="w-10 h-10 rounded-xl bg-indigo-50 text-[#6332ec] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="mt-3 text-sm sm:text-base font-extrabold text-gray-900">{title}</div>
                <div className="mt-1 text-xs text-gray-500 leading-relaxed">{desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tracker + FAQ */}
      <section className="w-full px-[4%] py-14 sm:py-16 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24 rounded-[28px] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-7 sm:p-8">
          <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-indigo-200">
            <ClipboardCheck className="w-6 h-6" />
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight leading-tight">Track your claim</h2>
          <p className="mt-2 text-sm text-slate-300">Demo tracker: it does not show real claims. For a real claim status, please call or WhatsApp us.</p>
          <form onSubmit={track} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              required
              value={claimNo}
              onChange={(e) => setClaimNo(e.target.value)}
              placeholder="e.g. CLM-1048293"
              className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button type="submit" className="px-5 py-3 rounded-xl bg-white text-gray-900 text-sm font-extrabold hover:bg-indigo-50 transition inline-flex items-center justify-center gap-2">
              Track <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Frequently asked</h2>
          <div className="mt-6 space-y-3">
            {shown.length === 0 && (
              <div className="rounded-2xl border border-dashed border-gray-300 p-6 text-sm text-gray-500">
                No answers match "{query}". Try another word or call us on <a className="font-bold text-[#6332ec]" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
              </div>
            )}
            {shown.map((faq, idx) => {
              const open = openIdx === idx;
              return (
                <div key={faq.q} className={`rounded-2xl border transition ${open ? 'border-indigo-200 bg-indigo-50/40' : 'border-gray-200 bg-white'}`}>
                  <button
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left text-sm sm:text-base font-bold text-gray-900"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${open ? 'bg-[#6332ec] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {open && <p className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form + office */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-t border-gray-200/60">
        <div className="w-full px-5 sm:px-[4%] py-14 sm:py-20 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">Still need help? Write to us</h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium max-w-md">Share a few details and our team will call you back.</p>

            <div className="mt-8 rounded-3xl bg-white border border-gray-200 p-6 space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#6332ec] shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700 font-medium leading-relaxed">
                  {CONTACT.addressLines.map((l) => <div key={l}>{l}</div>)}
                  <a href={CONTACT.mapHref} target="_blank" rel="noreferrer" className="inline-block mt-1.5 text-xs font-bold text-[#6332ec] hover:underline">Open in Maps</a>
                </div>
              </div>
              <div className="flex gap-3 items-center text-sm font-semibold text-gray-800">
                <PhoneCall className="w-5 h-5 text-[#6332ec] shrink-0" />
                <a href={CONTACT.phoneHref} className="hover:text-[#6332ec]">{CONTACT.phoneDisplay}</a>
              </div>
              <div className="flex gap-3 items-center text-sm font-semibold text-gray-800">
                <Clock className="w-5 h-5 text-[#6332ec] shrink-0" />
                Mon to Sun, 9 AM to 9 PM
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 rounded-[28px] bg-white border border-gray-200 shadow-xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-bold text-gray-600">Your name</span>
              <input required value={form.name} onChange={update('name')} placeholder="Full name" className={`mt-1.5 ${inputCls}`} />
            </label>
            <label className="block">
              <span className="text-xs font-bold text-gray-600">Phone number</span>
              <input required type="tel" value={form.phone} onChange={update('phone')} placeholder="10-digit mobile" className={`mt-1.5 ${inputCls}`} />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-bold text-gray-600">Topic</span>
              <select value={form.topic} onChange={update('topic')} className={`mt-1.5 ${inputCls}`}>
                {topics.map((t) => <option key={t.title}>{t.title === 'Something else' ? 'Other' : t.title}</option>)}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-bold text-gray-600">How can we help?</span>
              <textarea required rows={4} value={form.msg} onChange={update('msg')} placeholder="Tell us a little about your question" className={`mt-1.5 ${inputCls} resize-none`} />
            </label>
            <button type="submit" className="sm:col-span-2 px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-[#6332ec] text-white text-sm font-extrabold transition inline-flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Request a callback
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
