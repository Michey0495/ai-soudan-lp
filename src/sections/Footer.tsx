export function Footer() {
  return (
    <footer className="bg-ink-900 text-white py-16">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/logo-white.png"
                alt="AIの相談所"
                className="h-10 w-auto"
                width={200}
                height={80}
              />
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              中堅企業のAI導入担当者のための無料相談窓口。社名・氏名は仮名で相談できます。
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-white/80 mb-3 tracking-wider">SERVICE</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#service" className="hover:text-white">サービス</a></li>
              <li><a href="#flow" className="hover:text-white">相談の流れ</a></li>
              <li><a href="#retainer" className="hover:text-white">月次顧問</a></li>
              <li><a href="#pricing" className="hover:text-white">料金</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white/80 mb-3 tracking-wider">INFO</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#cases" className="hover:text-white">実績・事例</a></li>
              <li><a href="#faq" className="hover:text-white">よくある質問</a></li>
              <li><a href="#cta" className="hover:text-white">無料相談予約</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white/80 mb-3 tracking-wider">LEGAL</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white">特定商取引法に基づく表記</a></li>
              <li><a href="#" className="hover:text-white">運営会社</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between items-start md:items-center text-xs text-white/50">
          <div>© 2026 AIの相談所 / EZOAI. All rights reserved.</div>
          <div>Built with care. 秘密厳守・相談無料。</div>
        </div>
      </div>
    </footer>
  );
}
