import { cases } from "../data/cases";
import { IconLock } from "../components/Icon";

const stats = [
  { value: "100+", label: "年間生成AI研修・セミナー", sub: "実施実績" },
  { value: "7", label: "対応業界数", sub: "製造・金融・IT・小売・不動産・物流・人材" },
  { value: "100+", label: "累計相談実績", sub: "無料相談含む" },
];

export function Cases() {
  return (
    <section id="cases" className="section bg-white">
      <div className="container-content">
        <div className="max-w-2xl">
          <h2 className="section-title">実績と事例</h2>
          <p className="section-lead">
            過去に伴走した案件を匿名化して公開しています。
            <br className="hidden md:block" />
            業種と規模レンジのみ記載、詳細はお答えしません。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-600 tracking-tight">
                {s.value}
              </div>
              <div className="mt-3 font-semibold text-ink-900">{s.label}</div>
              <div className="text-xs text-ink-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-ink-100 bg-white p-6 hover:border-brand-300 hover:shadow-soft transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="label-industry">{c.industry}</span>
                <span className="text-xs text-ink-500">{c.size}</span>
              </div>
              <h3 className="font-semibold text-ink-900 leading-snug mb-2">
                {c.theme}
              </h3>
              <p className="text-sm text-brand-700 font-medium">→ {c.result}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-50 border border-brand-100 p-6 md:p-8 flex items-start gap-4">
          <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
            <IconLock className="w-5 h-5" />
          </span>
          <div>
            <p className="font-semibold text-ink-900 text-base">
              事例はすべて守秘義務に基づき、社名・地域・具体数値を非公開としています。
            </p>
            <p className="text-sm text-ink-700 mt-2 leading-relaxed">
              お問い合わせいただいても個別案件の詳細はお答えできません。これは相談いただく皆様にも同じ水準で徹底している姿勢です。安心してご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
