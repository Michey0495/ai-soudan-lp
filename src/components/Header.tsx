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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between h-16">
        <a href="#top" className="flex items-center text-ink-900 no-underline">
          <img
            src="/logo-trans.png"
            alt="AIの相談所"
            className="h-9 md:h-10 w-auto"
            width={180}
            height={72}
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
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

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-coral-400 hover:bg-coral-500 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
        >
          無料で相談する
          <IconArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}
