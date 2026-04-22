import { IconCheck } from "../components/Icon";

const included = [
  "月2回のオンラインMTG(各60分)",
  "Slackチャンネルでの随時相談(平均半営業日以内に返信)",
  "AI活用ロードマップの策定と月次見直し",
  "ツール選定サポート(比較資料・トライアル手配)",
  "ベンダー中立紹介(追加費用なし)",
  "月次レポート(成果・次月の打ち手)",
];

const notIncluded = [
  "開発作業(別途AI開発支援メニューへ)",
  "研修の実施(別途生成AI研修メニューへ)",
  "毎日の常駐・常時対応",
];

const schedule = [
  { week: "第1週", body: "MTG1 — 月次ロードマップレビュー" },
  { week: "第2週", body: "Slack相談 — Copilot導入ガイドラインの壁打ち" },
  { week: "第3週", body: "ベンダー3社紹介ミーティング同席" },
  { week: "第4週", body: "MTG2 — 翌月アクションプラン合意+レポート送付" },
];

export function Retainer() {
  return (
    <section id="retainer" className="section bg-gradient-to-b from-brand-50/60 to-white">
      <div className="container-content">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold text-brand-700 bg-brand-100 rounded-full px-3 py-1 mb-3">
            ミニマム構成
          </span>
          <h2 className="section-title">月次顧問内容</h2>
          <p className="section-lead">
            研修や開発に入る前の方針固め向け。月20万円に収めるため、
            <br className="hidden md:block" />
            スコープを正直に絞っています。ツール代や紹介手数料はかかりません。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 card">
            <h3 className="text-lg font-bold mb-5 text-ink-900">含まれるもの</h3>
            <ul className="space-y-3">
              {included.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm text-ink-700 leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-ink-100">
              <h4 className="text-xs font-bold text-ink-500 uppercase tracking-wider mb-3">含まれないもの</h4>
              <ul className="space-y-2">
                {notIncluded.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-100 text-ink-500 text-xs font-bold">
                      −
                    </span>
                    <span className="text-sm text-ink-500 leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-ink-100 grid grid-cols-3 gap-3 text-sm">
              <div>
                <div className="text-xs text-ink-500">最低契約期間</div>
                <div className="font-bold text-ink-900 mt-0.5">3ヶ月〜</div>
              </div>
              <div>
                <div className="text-xs text-ink-500">更新単位</div>
                <div className="font-bold text-ink-900 mt-0.5">1ヶ月</div>
              </div>
              <div>
                <div className="text-xs text-ink-500">解約</div>
                <div className="font-bold text-ink-900 mt-0.5">1ヶ月前通知</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 card bg-white p-0 overflow-hidden">
            <div className="relative aspect-[16/10]">
              <img
                src="/images/retainer-team.png"
                alt="月次MTGで並走する担当と顧客のイメージ"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-brand-700 text-[11px] font-bold px-3 py-1.5 shadow-soft">
                月次で並走
              </span>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="text-xs font-bold opacity-90">ある月のスケジュール例</div>
                <div className="text-sm opacity-80 mt-0.5">MTG×2+Slack相談で約16時間/月の稼働</div>
              </div>
            </div>
            <div className="p-6">
              <ol className="space-y-3.5">
                {schedule.map((s) => (
                  <li key={s.week} className="flex gap-3">
                    <span className="flex-shrink-0 text-xs font-bold text-brand-500 w-10 pt-0.5">
                      {s.week}
                    </span>
                    <span className="text-sm text-ink-700 leading-relaxed">{s.body}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
