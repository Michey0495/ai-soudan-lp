import { IconLock, IconCameraOff, IconArrowRight } from "../components/Icon";

const steps = [
  {
    num: "01",
    title: "フォームから日程予約",
    time: "所要 30秒",
    body: "必要なのはメールアドレスと希望日だけ。氏名・会社名は仮名でも構いません。",
    note: "「製造業A社・担当者Bさん」の表記でも予約を受け付けます",
  },
  {
    num: "02",
    title: "最大60分のオンライン相談",
    time: "所要 最大60分",
    body: "Zoomで雑談のように話してください。録画はしません。メモも外部共有しません。話し足りたら早めに切り上げてOK。",
    note: "カメラオフでの参加もOK。顔出しは任意です",
  },
  {
    num: "03",
    title: "必要なら次のステップを提案",
    time: "メールで後日",
    body: "研修・開発支援・月次顧問のどれが貴社に合うか、一緒に判断材料を並べます。合うものが無ければ、紹介やそれ以外の選択肢もお伝えします。",
    note: "ステップ3まで進まず、1回の相談だけで終わる方も一定数います",
  },
];

export function Flow() {
  return (
    <section id="flow" className="section bg-white relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-50/60 to-transparent -z-10" />

      <div className="container-content">
        <div className="max-w-2xl">
          <h2 className="section-title">相談の流れ</h2>
          <p className="section-lead">
            3ステップで完了。まずは1回、状況を整理しにいらしてください。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              <div className="card h-full">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-4xl font-bold text-brand-500 tracking-tight">
                    {s.num}
                  </span>
                  <span className="text-xs text-ink-500">{s.time}</span>
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-3">{s.title}</h3>
                <p className="text-sm text-ink-700 leading-relaxed mb-4">{s.body}</p>
                <p className="text-xs text-brand-700 bg-brand-50 rounded-lg px-3 py-2 leading-relaxed">
                  {s.note}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-white border border-brand-200 text-brand-500 shadow-soft">
                  <IconArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-4 md:gap-6 rounded-2xl border border-brand-100 bg-white p-6">
          <div className="flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
              <IconLock className="w-5 h-5" />
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 text-ink-700">
              <IconCameraOff className="w-5 h-5" />
            </span>
          </div>
          <div className="text-sm text-ink-700 flex-1">
            無料相談後に契約を強要することは一切ありません。相談内容を第三者に共有することもありません。
            <span className="text-ink-900 font-semibold">
              NDA締結は無料相談前でも可能
            </span>
            。相談のみで終わっても歓迎です。
          </div>
        </div>
      </div>
    </section>
  );
}
