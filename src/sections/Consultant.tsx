const highlights = [
  "生成AI研修・生成AIセミナー 年100件以上実施",
  "累計対応企業数 100社以上",
  "RAG / LangChain / LangGraph 技術研修の実績",
  "対応業種 製造・金融・IT・小売・不動産・人材・物流",
];

export function Consultant() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/40 to-white">
                <div
                  aria-hidden
                  className="absolute inset-x-8 bottom-8 h-40 rounded-[50%]"
                  style={{ background: "rgba(10,186,181,0.22)", filter: "blur(40px)" }}
                />
                <img
                  src="/images/man1.png"
                  alt="相談員 安田光喜"
                  className="absolute inset-0 w-full h-full object-contain object-bottom"
                  style={{
                    filter:
                      "drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 18px 24px rgba(23,72,79,0.18))",
                  }}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden md:block rounded-2xl bg-brand-500 text-white px-5 py-4 shadow-card">
                <div className="text-xs opacity-90">相談員</div>
                <div className="font-bold text-lg">安田 光喜</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold text-brand-700 bg-brand-100 rounded-full px-3 py-1 mb-3">
              相談員紹介
            </span>
            <h2 className="section-title">隣で一緒に考える人として。</h2>
            <p className="section-lead mb-6">
              生成AI研修・生成AIセミナーを年間100件以上実施。
              <br className="hidden md:block" />
              製造業・金融・IT・小売・不動産の中堅企業を中心に、現場レベルのAI活用設計から全社ロードマップ策定まで伴走しています。
            </p>
            <p className="text-base text-ink-700 leading-relaxed mb-8">
              AI導入は正解が1つに定まらない意思決定の連続です。私の役割は答えを押し付けることではなく、貴社の事情を聞きながら、
              <br className="hidden md:block" />
              一緒に選択肢を並べて判断材料を揃えることだと考えています。
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {h}
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-brand-500 pl-5 py-2 bg-brand-50/60 rounded-r-lg">
              <p className="text-base md:text-lg text-ink-900 italic leading-relaxed">
                「AI導入で迷っている状態を、そのまま話しに来てください。整理しながら、貴社にとって無理のない進め方を一緒に考えます。」
              </p>
              <footer className="mt-3 text-sm text-ink-500">
                — 安田 光喜 / AIの相談所 代表
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
