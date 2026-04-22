import { IconCheck, IconArrowRight } from "../components/Icon";

const trainingIncludes = [
  "貴社業種・職種に合わせたカリキュラム設計",
  "ワーク中心の体験型(スライドより手を動かす)",
  "講師用スライド・演習データ一式納品",
  "研修後1ヶ月のSlack質問受付",
  "アンケート集計と次回提案",
];

const devIncludes = [
  "専属PMによる要件定義・進行管理",
  "開発パートナー(エンジニア2〜3名)のアサイン",
  "PoC→本実装までの段階設計",
  "貴社エンジニアへの内製化引き継ぎ支援",
  "毎週の進捗MTGと月次成果レポート",
];

const retainerIncludes = [
  "月2回のオンラインMTG(各60分)",
  "Slackチャンネルでの随時相談",
  "AI活用ロードマップの策定・見直し",
  "ツール選定と比較資料の提供",
  "ベンダー中立紹介(追加費用なし)",
];

export function Pricing() {
  return (
    <section id="pricing" className="section bg-ink-50/40">
      <div className="container-content">
        <div className="max-w-2xl">
          <h2 className="section-title">料金</h2>
          <p className="section-lead">
            主力は生成AI研修。開発が必要な会社には専属PM型の支援、
            <br className="hidden md:block" />
            方針固めの段階には月次顧問をご用意しています。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 rounded-3xl bg-white border-2 border-brand-500 shadow-card overflow-hidden flex flex-col">
            <div className="bg-brand-500 text-white px-6 py-4 flex items-center justify-between">
              <span className="font-bold">生成AI研修</span>
              <span className="text-xs bg-white/20 rounded-full px-3 py-1">主力</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                  ¥300,000
                </span>
                <span className="text-ink-700 text-sm">〜 / 半日</span>
              </div>
              <p className="text-xs text-ink-500 mb-5">
                1日研修は50万円〜。複数回のカスタム研修はご相談ください。
              </p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {trainingIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-ink-700 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn-primary w-full">
                相談する
                <IconArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-ink-500 mt-3 leading-relaxed">
                年100件以上の実施実績。既存顧客の再発注率が高いサービスです。
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 rounded-3xl bg-white border border-ink-100 shadow-soft overflow-hidden flex flex-col">
            <div className="bg-ink-900 text-white px-6 py-4 flex items-center justify-between">
              <span className="font-bold">AI開発支援</span>
              <span className="text-xs bg-white/15 rounded-full px-3 py-1">専属PM型</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                  ¥800,000
                </span>
                <span className="text-ink-700 text-sm">〜 / 月</span>
              </div>
              <p className="text-xs text-ink-500 mb-5">
                PMフィー80万円〜+開発実費。3ヶ月単位、スコープに応じてお見積もり。
              </p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {devIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-ink-700 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn-secondary w-full">
                相談する
                <IconArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-ink-500 mt-3 leading-relaxed">
                丸投げ受託ではなく、貴社チームが自走できる状態までの伴走です。
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 rounded-3xl bg-white border border-ink-100 shadow-soft overflow-hidden flex flex-col">
            <div className="bg-brand-50 text-brand-700 px-6 py-4 flex items-center justify-between">
              <span className="font-bold">月次AI顧問</span>
              <span className="text-xs bg-white rounded-full px-3 py-1 border border-brand-200">ミニマム</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight">
                  ¥200,000
                </span>
                <span className="text-ink-700 text-sm">〜 / 月</span>
              </div>
              <p className="text-xs text-ink-500 mb-5">
                最低3ヶ月〜、1ヶ月前通知で解約可。研修・開発導入前の方針固めに。
              </p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {retainerIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-ink-700 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn-secondary w-full">
                相談する
                <IconArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-ink-500 mt-3 leading-relaxed">
                大手コンサルの月次顧問は月100万〜が相場。ミニマム構成で導入期を支える価格設計です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
