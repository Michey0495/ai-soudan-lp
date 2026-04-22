import { useEffect, useState } from "react";
import { IconArrowRight } from "./Icon";

const navItems = [
  { href: "#service", label: "サービス" },
  { href: "#flow", label: "相談の流れ" },
  { href: "#cases", label: "実績" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "よくある質問" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || menuOpen ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between h-14 md:h-16 gap-2">
        <a href="#top" className="flex items-center text-ink-900 no-underline flex-shrink-0" onClick={closeMenu}>
          <img
            src="/logo-trans.png"
            alt="AIの相談所"
            className="h-8 md:h-10 w-auto"
            width={180}
            height={72}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-ink-700 hover:text-brand-600 transition-colors link-underline"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="inline-flex items-center gap-1 rounded-full bg-coral-400 hover:bg-coral-500 text-white text-xs md:text-sm font-semibold px-3.5 md:px-5 py-2 md:py-2.5 transition-colors whitespace-nowrap"
          >
            <span className="hidden sm:inline">無料で相談する</span>
            <span className="sm:hidden">相談する</span>
            <IconArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-ink-700 hover:bg-ink-50 transition-colors"
            aria-label="メニューを開閉"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-5 h-5"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-ink-100 bg-white/95 backdrop-blur">
          <nav className="container-content py-4 flex flex-col gap-1">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={closeMenu}
                className="py-3 px-2 text-sm font-semibold text-ink-800 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
