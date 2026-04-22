import { IconArrowRight, IconLock, IconIncognito, IconClock, IconCameraOff, IconSparkle } from "../components/Icon";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-20 xl:pt-14 xl:pb-28">
      {/* 背景の浅葱色グラデーション + 装飾 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/80 via-white to-white" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(10,186,181,0.22), transparent 55%), radial-gradient(circle at 85% 20%, rgba(255,139,107,0.18), transparent 40%)",
        }}
      />
      {/* 薄いドットパターン */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0ABAB5 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-content">
        {/* 上部バッジ(中央配置) */}
        <div className="flex justify-center mb-6 xl:mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 shadow-soft text-center">
            <IconSparkle className="w-3.5 h-3.5 flex-shrink-0" />
            中堅企業のAI導入担当者のための無料相談窓口
          </span>
        </div>

        {/* メインキャッチ(中央・大) */}
        <div className="text-center max-w-4xl mx-auto mb-10 xl:mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight">
            <span className="block">AIの悩みを、</span>
            <span className="block mt-2">
              <span className="relative inline-block">
                <span className="relative z-10">話して</span>
                <span className="absolute inset-x-0 bottom-1 xl:bottom-2 h-3 xl:h-4 bg-coral-200/60 -z-0" />
              </span>
              <span className="text-brand-600">スッキリ</span>
              させる場所。
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink-700 leading-relaxed max-w-2xl mx-auto">
            社名・氏名は仮名でOK、相談内容は一切外に出ません。
            <br className="hidden md:block" />
            貴社の状況を聞きながら、次の一手を一緒に整理します。
          </p>
        </div>

        {/* ヒーローレイアウト: xl以上で3カラム、それ未満は画像+カードを縦積み */}
        <div className="relative grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-6 items-center">
          {/* 中央カラム: 透過画像 */}
          <div className="xl:col-span-6 xl:order-2 relative">
            <div className="relative mx-auto max-w-xl xl:max-w-none">
              {/* 背面の柔らかい光 */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 translate-y-6"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(10,186,181,0.22), transparent 60%)",
                  filter: "blur(30px)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-10 bottom-0 h-32 -z-10 rounded-[50%]"
                style={{ background: "rgba(10,186,181,0.14)", filter: "blur(40px)" }}
              />
              <div
                aria-hidden
                className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square -z-10 rounded-full border border-brand-200/60"
              />
              <img
                src="/images/hero-transparent.png"
                alt="AIの相談所の相談員と顧客、未来を見据えて笑顔"
                className="relative w-full h-auto object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 2px 4px rgba(255,255,255,0.7)) drop-shadow(0 22px 28px rgba(23,72,79,0.18))",
                }}
                loading="eager"
              />
              <div className="absolute top-4 right-8 text-coral-400">
                <IconSparkle className="w-8 h-8 opacity-80" />
              </div>
            </div>
          </div>

          {/* 左カラム: 信頼情報 — xl以上で左、それ未満では画像下に2カラムで並ぶ */}
          <div className="xl:col-span-3 xl:order-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            <div className="rounded-2xl bg-white/70 backdrop-blur border border-brand-100 p-5 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-700 mb-2">
                <IconLock className="w-4 h-4" />
                SECRECY
              </div>
              <div className="font-bold text-ink-900 text-lg leading-tight mb-1">
                秘密厳守、徹底。
              </div>
              <p className="text-xs text-ink-700 leading-relaxed">
                相談内容は一切外部に出ません。NDA標準装備、録画なし。
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 backdrop-blur border border-brand-100 p-5 shadow-soft">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-700 mb-2">
                <IconIncognito className="w-4 h-4" />
                ANONYMOUS
              </div>
              <div className="font-bold text-ink-900 text-lg leading-tight mb-1">
                匿名で、気軽に。
              </div>
              <p className="text-xs text-ink-700 leading-relaxed">
                氏名・社名は仮名OK。「製造業A社 Bさん」表記で予約可能。
              </p>
            </div>
          </div>

          {/* 右カラム: CTA — xl以上で右、それ未満では画像下・信頼情報の下に配置 */}
          <div className="xl:col-span-3 xl:order-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
            <div className="rounded-2xl bg-brand-500 text-white p-6 shadow-card relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10"
              />
              <div className="relative">
                <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                  Free up to 60min
                </div>
                <div className="text-2xl font-bold leading-tight mb-2">
                  まず最大60分、
                  <br />
                  話しませんか。
                </div>
                <p className="text-xs text-white/85 leading-relaxed mb-4">
                  メールと希望日だけで予約完了。貴社の状況を聞くところから始めます。
                </p>
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center w-full gap-1.5 rounded-full bg-coral-400 hover:bg-coral-500 text-white text-sm font-bold px-4 py-3 transition-colors whitespace-nowrap"
                >
                  無料相談を予約する
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur border border-brand-100 p-5 shadow-soft space-y-2.5 text-xs text-ink-700 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <IconClock className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>最大60分・早めに切り上げOK</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCameraOff className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>カメラオフ・顔出し任意</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-500 flex-shrink-0 w-4 text-center">◎</span>
                <span>生成AI研修・セミナー 年100件以上</span>
              </div>
            </div>
          </div>
        </div>

        {/* 下部スクロールヒント */}
        <div className="mt-16 xl:mt-20 flex flex-col items-center text-ink-500 text-xs">
          <span className="tracking-widest mb-2">SCROLL</span>
          <span className="w-px h-10 bg-gradient-to-b from-brand-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
