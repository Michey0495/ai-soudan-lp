import { IconArrowRight, IconLock, IconIncognito, IconClock, IconCameraOff, IconSparkle } from "../components/Icon";

const infoCards = [
  {
    icon: IconLock,
    label: "SECRECY",
    title: "秘密厳守、徹底。",
    body: "相談内容は一切外部に出ません。NDA標準装備、録画なし。",
  },
  {
    icon: IconIncognito,
    label: "ANONYMOUS",
    title: "匿名で、気軽に。",
    body: "氏名・社名は仮名OK。「製造業A社 Bさん」表記で予約可能。",
  },
  {
    icon: IconClock,
    label: "FREE UP TO 60MIN",
    title: "最大60分、無料。",
    body: "早めに切り上げもOK。メールと希望日だけで予約完了。",
  },
  {
    icon: IconSparkle,
    label: "TRAINING",
    title: "年100件以上の実績。",
    body: "生成AI研修・セミナーを年間100件以上実施している講師が直接担当。",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-6 pb-14 md:pt-10 md:pb-20 lg:pt-14 lg:pb-24">
      {/* 背景の浅葱色グラデーション + 装飾 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/80 via-white to-white" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(10,186,181,0.18), transparent 55%), radial-gradient(circle at 85% 12%, rgba(255,139,107,0.18), transparent 45%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0ABAB5 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-content">
        {/* 上部バッジ */}
        <div className="flex justify-center mb-5 md:mb-7">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 shadow-soft">
            <IconSparkle className="w-3.5 h-3.5 flex-shrink-0" />
            中堅企業のAI導入担当者のための無料相談窓口
          </span>
        </div>

        {/* メインキャッチ */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10 relative z-10">
          <h1 className="text-[2.25rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight">
            <span className="block">AIの悩みを、</span>
            <span className="block mt-2">
              <span className="relative inline-block">
                <span className="relative z-10">話して</span>
                <span className="absolute inset-x-0 bottom-1 lg:bottom-2 h-3 lg:h-4 bg-coral-200/60 -z-0" />
              </span>
              <span className="text-brand-600">スッキリ</span>
              させる場所。
            </span>
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-700 leading-relaxed max-w-2xl mx-auto px-2">
            社名・氏名は仮名でOK、相談内容は一切外に出ません。
            <br className="hidden md:block" />
            貴社の状況を聞きながら、次の一手を一緒に整理します。
          </p>
        </div>

        {/* メインビジュアル(横長) */}
        <div className="relative mb-6 md:mb-10">
          {/* 背面の柔らかい光 */}
          <div
            aria-hidden
            className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-[3rem]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(10,186,181,0.22), transparent 60%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-card">
            <picture>
              <source srcSet="/images/hero-main.webp" type="image/webp" />
              <img
                src="/images/hero-main.jpg"
                alt="都会を背景に前を向いて笑顔の男女ビジネスパーソン、AI導入の未来へ"
                className="block w-full h-auto object-cover aspect-[16/9] md:aspect-[1920/960]"
                width={1920}
                height={960}
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            {/* 下部のコーラル+浅葱色のアクセント帯 */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1.5 md:h-2 bg-gradient-to-r from-brand-400 via-coral-300 to-brand-500"
            />
          </div>

          {/* 浮遊CTAバッジ(右下、PCのみ) */}
          <div className="hidden md:block absolute -bottom-6 right-6 lg:right-10">
            <a
              href="#cta"
              className="inline-flex items-center gap-1.5 rounded-full bg-coral-400 hover:bg-coral-500 text-white text-sm lg:text-base font-bold px-6 py-3.5 shadow-card transition-colors"
            >
              無料相談を予約する
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 情報カード 4カラム */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mt-8 md:mt-12">
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl bg-white/80 backdrop-blur border border-brand-100 p-4 md:p-5 shadow-soft"
            >
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-brand-700 mb-2 tracking-wider">
                <card.icon className="w-4 h-4 flex-shrink-0" />
                {card.label}
              </div>
              <div className="font-bold text-ink-900 text-base md:text-lg leading-tight mb-1.5">
                {card.title}
              </div>
              <p className="text-xs text-ink-700 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* モバイル用CTAボタン */}
        <div className="flex justify-center mt-8 md:hidden">
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-coral-400 hover:bg-coral-500 text-white text-sm font-bold px-6 py-3 shadow-card transition-colors"
          >
            無料相談を予約する
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* スクロールヒント(PC) */}
        <div className="hidden md:flex mt-12 lg:mt-16 flex-col items-center text-ink-500 text-[11px]">
          <span className="tracking-widest mb-2">SCROLL</span>
          <span className="w-px h-10 bg-gradient-to-b from-brand-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
