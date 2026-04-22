import { useState } from "react";
import { faqs } from "../data/faqs";
import { IconChevronDown, IconLock } from "../components/Icon";

type AccordionProps = {
  q: string;
  a: string;
  defaultOpen?: boolean;
};

function AccordionItem({ q, a, defaultOpen = false }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink-100 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-600 text-xs font-bold">
          Q
        </span>
        <span className="flex-1 font-semibold text-ink-900 group-hover:text-brand-700 transition-colors">
          {q}
        </span>
        <IconChevronDown
          className={`w-5 h-5 text-ink-500 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-11 text-sm text-ink-700 leading-relaxed">{a}</div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const privacyFaqs = faqs.filter((f) => f.group === "privacy");
  const generalFaqs = faqs.filter((f) => f.group === "general");

  return (
    <section id="faq" className="section bg-white">
      <div className="container-content">
        <div className="max-w-2xl">
          <h2 className="section-title">よくある質問</h2>
          <p className="section-lead">
            お申込み前の不安をあらかじめ解消します。
            <br className="hidden md:block" />
            匿名性・秘密保持については上段にまとめています。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-3xl bg-brand-50/70 border border-brand-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white">
                <IconLock className="w-4 h-4" />
              </span>
              <h3 className="text-lg font-bold text-ink-900">
                匿名性・秘密保持について
              </h3>
            </div>
            {privacyFaqs.map((f, i) => (
              <AccordionItem
                key={f.question}
                q={f.question}
                a={f.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>

          <div className="lg:col-span-2 rounded-3xl bg-white border border-ink-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-ink-900 mb-4">その他のご質問</h3>
            {generalFaqs.map((f) => (
              <AccordionItem key={f.question} q={f.question} a={f.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
