import React from 'react';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { CONTACT } from '../utils/contact';

const UPDATED = '3 November 2026';

const docs = {
  privacy: {
    icon: ShieldCheck,
    title: 'Privacy Policy',
    intro: 'This policy explains what information you may share with ACKOIndia through this website, how we use it, and the choices you have.',
    sections: [
      {
        h: 'Who we are',
        p: ['ACKOIndia is an online platform that helps you explore insurance options and request indicative quotes. You can reach us at the address and phone number listed at the end of this page.']
      },
      {
        h: 'Information you give us',
        p: ['We only receive information that you type into a form on this website. Depending on the form, this may include:'],
        list: ['Your name, company name and work email (Enterprise enquiry form)', 'Your mobile number, vehicle number or city/age (quote form)', 'Your name, phone number and message (Support form)', 'A claim reference number (claim tracker)']
      },
      {
        h: 'Information we never ask for',
        p: ['We will never ask you for your passwords, one-time passwords (OTPs), card numbers, CVV, UPI PIN or net-banking details on this website, or over a call or message. If someone asks for these in our name, do not share them and contact us immediately.']
      },
      {
        h: 'How we use your information',
        list: ['To prepare the estimate or respond to the enquiry you submitted', 'To call or message you back about your request', 'To improve the clarity and usefulness of this website']
      },
      {
        h: 'Sharing',
        p: ['We do not sell your personal information. We may share it only with service providers who help us respond to your request, or when the law requires us to.']
      },
      {
        h: 'Cookies and third-party content',
        p: ['This website does not use advertising or tracking cookies. Fonts are loaded from Google Fonts, which means Google may receive your IP address and browser details when the page loads. Links to WhatsApp, Google Maps and social networks open on those services and are covered by their own policies.']
      },
      {
        h: 'Retention and security',
        p: ['We keep your information only for as long as it is needed for the purpose you shared it. We use HTTPS and security headers on this website, but no method of transmission over the internet is completely secure.']
      },
      {
        h: 'Your choices',
        p: ['You can ask us to access, correct or delete the information you have shared, or withdraw your consent to be contacted, by writing to us at the email below.']
      },
      {
        h: 'Children',
        p: ['This website is not intended for children under 18.']
      },
      {
        h: 'Changes to this policy',
        p: ['We may update this policy from time to time. The date at the top of this page shows when it was last changed.']
      }
    ]
  },
  terms: {
    icon: FileText,
    title: 'Terms & Conditions',
    intro: 'Please read these terms before using this website. By using it, you agree to them.',
    sections: [
      {
        h: 'About this website',
        p: ['ACKOIndia provides information about insurance and lets you request indicative quotes and contact our team. Content and quotes shown here are for information only and are not an offer, a contract or a policy.']
      },
      {
        h: 'No affiliation',
        p: ['ACKOIndia is an independent platform. It is not affiliated with, endorsed by or connected to ACKO General Insurance Limited or any other insurer or brand mentioned on this website.']
      },
      {
        h: 'Quotes and prices',
        p: ['Prices, discounts, coverage and benefits shown are indicative. The final terms depend on the insurer, your details and the policy documents. Please read the policy wording before you buy.']
      },
      {
        h: 'Using the website',
        list: ['Give accurate information when you fill in a form', 'Do not misuse the website, attempt to disrupt it or access it unlawfully', 'Do not copy or reuse our content or design without our written permission']
      },
      {
        h: 'Fraud awareness',
        p: ['We will never ask for your passwords, OTPs, card details or bank PIN. We do not charge fees to release a claim or a refund. Be careful of calls, messages or links that claim to be from us and ask for these. Report them using the contact details below.']
      },
      {
        h: 'Third-party links',
        p: ['This website links to services we do not control, such as WhatsApp, Google Maps and social networks. We are not responsible for their content or practices.']
      },
      {
        h: 'Limitation of liability',
        p: ['We try to keep the information on this website accurate and up to date, but we do not guarantee that it is complete or error free. To the extent allowed by law, we are not liable for losses arising from the use of this website.']
      },
      {
        h: 'Complaints and grievances',
        p: ['If you are unhappy with our service, write to us with your name, contact details and a description of the issue. We will acknowledge your complaint and respond as quickly as we can.']
      },
      {
        h: 'Governing law',
        p: ['These terms are governed by the laws of India.']
      },
      {
        h: 'Changes to these terms',
        p: ['We may update these terms from time to time. Continued use of the website means you accept the updated terms.']
      }
    ]
  }
};

export default function LegalPage({ type = 'privacy' }) {
  const doc = docs[type] || docs.privacy;
  const Icon = doc.icon;

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-b border-gray-200/60">
        <div className="w-full px-[4%] py-12 sm:py-16">
          <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6332ec] hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </a>
          <div className="mt-5 flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-white border border-indigo-100 text-[#6332ec] flex items-center justify-center">
              <Icon className="w-6 h-6" />
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">{doc.title}</h1>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium max-w-2xl">{doc.intro}</p>
          <p className="mt-2 text-xs font-semibold text-gray-400">Last updated: {UPDATED}</p>
        </div>
      </section>

      <section className="w-full px-[4%] py-12 sm:py-16">
        <div className="max-w-3xl space-y-9">
          {doc.sections.map((s, i) => (
            <div key={s.h}>
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900">
                <span className="text-[#6332ec] mr-2">{i + 1}.</span>{s.h}
              </h2>
              {s.p && s.p.map((t) => (
                <p key={t} className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">{t}</p>
              ))}
              {s.list && (
                <ul className="mt-2 space-y-1.5 text-sm sm:text-base text-gray-600 leading-relaxed list-disc pl-5">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
            <h2 className="text-lg font-extrabold text-gray-900">Contact us</h2>
            <div className="mt-3 text-sm text-gray-600 leading-relaxed space-y-1">
              {CONTACT.addressLines.map((l) => <div key={l}>{l}</div>)}
              <div>
                Phone: <a className="font-bold text-[#6332ec]" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </div>
              <div>
                Email: <a className="font-bold text-[#6332ec]" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
