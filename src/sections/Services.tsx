import { IconArrowRight } from "../components/Icon";

const services = [
  {
    tag: "主力",
    title: "生成AI研修",
    price: "30万円〜 / 半日(税別)",
    body: "現場で使える生成AIを、社員全員に。汎用プロンプト、業務特化ワークショップ、RAG技術ハンズオンまで。年100件以上の実施実績から、貴社の業種・職種に合わせて内容を組み立てます。",
    href: "#pricing",
    featured: true,
  },
  {
    tag: "伴走",
    title: "AI開発支援",
    price: "月額80万円〜",
    body: "専属PMがアサインされ、開発パートナーと並走します。PoC検証から社内ツール内製化、RAG導入まで。貴社チームが自走できる状態まで引き上げる設計です。",
    href: "#pricing",
    featured: false,
  },
  {
    tag: "ミニマム",
    title: "月次AI顧問",
    price: "月額20万円〜",
    body: "研修や開発を入れる前段階で、まず方針を一緒に固めたい会社向け。月2回のオンラインMTG+Slack相談に絞ったミニマム構成。大手コンサルの月次顧問は月100万〜が相場です。",
    href: "#retainer",
    featured: false,
  },
];

export function Services() {
  return (
    <section id="service" className="section bg-brand-50/40">
      <div className="container-content">
        <div className="max-w-2xl">
          <h2 className="section-title">AIの相談所が提供するもの</h2>
          <p className="section-lead">
            生成AI研修を軸に、
            <br className="hidden md:block" />
            必要な会社には開発支援と月次顧問を組み合わせます。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`card flex flex-col ${
                s.featured ? "ring-2 ring-brand-500 bg-gradient-to-br from-white to-brand-50" : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    s.featured ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-700"
                  }`}
                >
                  {s.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">{s.title}</h3>
              <p className="text-brand-700 font-bold text-lg mb-4">{s.price}</p>
              <p className="text-sm text-ink-700 leading-relaxed flex-1">{s.body}</p>
              <a
                href={s.href}
                className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                  s.featured ? "text-coral-500 hover:text-coral-600" : "text-brand-600 hover:text-brand-700"
                }`}
              >
                詳しく見る
                <IconArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
