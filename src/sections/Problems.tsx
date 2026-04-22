import { IconLock } from "../components/Icon";

const problems = [
  {
    no: "01",
    title: "ツール選定で社内が割れる",
    body: "ChatGPT、Copilot、Gemini。営業はこれ、技術部はこれと、部署ごとに別のツールを使い始めている。統一すべきか、使い分けさせるか、判断できない。",
  },
  {
    no: "02",
    title: "ベンダーの提案が比較できない",
    body: "3社から提案をもらったが、どれも自社製品を推している。中立な目線でどれがいいか判断してくれる人がいない。",
  },
  {
    no: "03",
    title: "研修を受けたが現場で使われない",
    body: "半年前に全社研修をやった。直後は盛り上がったが、今は3割の社員しか使っていない。定着の打ち手が分からない。",
  },
  {
    no: "04",
    title: "経営にROIを説明できない",
    body: "ツール導入の稟議を通したいが、経営層から「で、結局いくら儲かるの」と聞かれると答えられない。",
  },
];

export function Problems() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="max-w-2xl">
          <h2 className="section-title">こんな悩み、ありませんか</h2>
          <p className="section-lead">
            どれか1つでも当てはまったら、一度話しにいらしてください。
            <br className="hidden md:block" />
            社名も氏名も伏せて構いません。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <article key={p.no} className="card relative">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 text-sm font-bold">
                  {p.no}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-700 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-500 shadow-soft">
            <IconLock className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-ink-900 font-semibold">
              相談内容は一切外部に出しません。NDAもご希望あれば事前に締結します。
            </p>
            <p className="text-sm text-ink-700 mt-1">
              「製造業A社・担当者Bさん」の表記のままで相談OK。営業電話も一切かけません。
            </p>
          </div>
          <a href="#cta" className="btn-secondary flex-shrink-0">
            匿名で相談する
          </a>
        </div>
      </div>
    </section>
  );
}
