import { Phone, MapPin, Clock, Heart } from "lucide-react";
import { business } from "@/lib/data";

const quickLinks = [
    { label: "Why Planet Aqua", href: "#why" },
    { label: "Facilities", href: "#facilities" },
    { label: "Membership Plans", href: "#plans" },
    { label: "Schedule", href: "#schedule" },
    { label: "Member Reviews", href: "#reviews" },
    { label: "Visit Us", href: "#visit" },
];

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-[#06101e] pt-20 pb-8 overflow-hidden"
        >
            {/* Top decorative wave */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            {/* Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/8 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
                <div className="grid md:grid-cols-12 gap-10 md:gap-8 pb-12">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/30">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-cyan-300"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                >
                                    <path d="M2 6c.6.5 1.2 1 2.5 1S6.4 6.5 7 6s1.2-1 2.5-1 1.9.5 2.5 1 1.2 1 2.5 1 1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1" />
                                    <path d="M2 12c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1 1.2 1 2.5 1 1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1" />
                                    <path d="M2 18c.6.5 1.2 1 2.5 1s1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1 1.2 1 2.5 1 1.9-.5 2.5-1 1.2-1 2.5-1 1.9.5 2.5 1" />
                                </svg>
                            </span>
                            <div>
                                <div className="font-display text-2xl tracking-wider text-white">
                                    PLANET AQUA
                                </div>
                                <div className="text-xs uppercase tracking-[0.22em] text-cyan-300/70 -mt-0.5">
                                    Pool · Fitness
                                </div>
                            </div>
                        </div>
                        <p className="font-kannada text-cyan-200/80 text-lg mb-3">
                            {business.nameKannada}
                        </p>
                        <p className="text-sm text-cyan-100/65 leading-relaxed max-w-md">
                            A proud neighbourhood institution in BTM Layout for 5+ years.
                            The only place in the area where you can swim and lift on the
                            same membership.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={`tel:${business.phoneTel}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#06121e] font-semibold text-sm transition-colors"
                                data-testid="footer-call-btn"
                            >
                                <Phone className="h-4 w-4" />
                                Call to Join
                            </a>
                            <a
                                href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                                    "Hi! I'd like to know more about Planet Aqua memberships."
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/25 text-cyan-100 hover:bg-cyan-500/10 text-sm transition-colors"
                                data-testid="footer-whatsapp-btn"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="md:col-span-3">
                        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-400/80 mb-5">
                            Quick links
                        </div>
                        <ul className="space-y-2.5">
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-sm text-cyan-100/75 hover:text-white transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-4">
                        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-400/80 mb-5">
                            Find us
                        </div>
                        <ul className="space-y-4 text-sm text-cyan-100/75">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">{business.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-cyan-300 flex-shrink-0" />
                                <a
                                    href={`tel:${business.phoneTel}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {business.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="h-4 w-4 text-cyan-300 flex-shrink-0" />
                                <span>{business.hours} · all days</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="divider-gradient" />

                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cyan-200/50">
                    <div>
                        © {new Date().getFullYear()} Planet Aqua Pool and Fitness. All
                        rights reserved.
                    </div>
                    <div className="flex items-center gap-1.5">
                        Built with{" "}
                        <Heart className="h-3 w-3 fill-cyan-400 text-cyan-400" /> for BTM
                        Layout.
                    </div>
                </div>
            </div>
        </footer>
    );
}
