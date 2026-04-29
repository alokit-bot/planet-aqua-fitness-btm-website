import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/lib/data";

const links = [
    { label: "Why Us", href: "#why" },
    { label: "Facilities", href: "#facilities" },
    { label: "Plans", href: "#plans" },
    { label: "Schedule", href: "#schedule" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#0a1224]/85 backdrop-blur-xl border-b border-cyan-500/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
                <a
                    href="#top"
                    data-testid="nav-logo"
                    className="flex items-center gap-2.5 group"
                >
                    <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/30">
                        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-cyan-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M2 6c.6.5 1.2 1 2.5 1S6.4 6.5 7 6s1.2-1 2.5-1 1.9.5 2.5 1 1.2 1 2.5 1 1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1" />
                            <path d="M2 12c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1 1.2 1 2.5 1 1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1" />
                            <path d="M2 18c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1 1.2 1 2.5 1 1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1" />
                        </svg>
                    </span>
                    <div className="leading-tight">
                        <div className="font-display text-lg md:text-xl tracking-wider text-white">
                            PLANET AQUA
                        </div>
                        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-cyan-300/70 -mt-0.5">
                            Pool · Fitness
                        </div>
                    </div>
                </a>

                <nav className="hidden lg:flex items-center gap-7">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-sm text-cyan-50/75 hover:text-white transition-colors relative group"
                        >
                            {l.label}
                            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={`tel:${business.phoneTel}`}
                        data-testid="nav-call-btn"
                        className="btn-aqua inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#06121e] font-semibold text-sm transition-all shadow-[0_8px_30px_-8px_rgba(34,211,238,0.6)]"
                    >
                        <Phone className="h-4 w-4" />
                        Call to Join
                    </a>
                </div>

                <button
                    data-testid="nav-mobile-toggle"
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 rounded-lg text-cyan-100 hover:bg-cyan-500/10"
                    aria-label="Menu"
                >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="nav-mobile-panel"
                    className="lg:hidden bg-[#0a1224]/98 backdrop-blur-xl border-t border-cyan-500/10 px-5 py-6 space-y-1"
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 px-3 rounded-lg text-cyan-50/85 hover:bg-cyan-500/10 hover:text-white transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href={`tel:${business.phoneTel}`}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-cyan-500 text-[#06121e] font-semibold"
                    >
                        <Phone className="h-4 w-4" /> Call to Join
                    </a>
                </div>
            )}
        </header>
    );
}
