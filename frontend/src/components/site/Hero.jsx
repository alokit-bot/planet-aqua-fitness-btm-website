import { Phone, Star, Clock, ArrowDown } from "lucide-react";
import { business, faqStats } from "@/lib/data";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1224]"
        >
            {/* Background image with deep blue overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80"
                    alt="Indoor pool"
                    className="w-full h-full object-cover opacity-30"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1224]/85 via-[#0a1224]/70 to-[#0a1224]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1224] via-transparent to-[#0a1224]/40" />
            </div>

            {/* Grid + grain */}
            <div className="absolute inset-0 water-grid opacity-70" />
            <div className="grain" />

            {/* Concentric ripples top-right */}
            <div className="absolute top-32 -right-20 w-[480px] h-[480px] hidden md:block">
                <div className="water-ripple w-full h-full" />
                <div
                    className="water-ripple w-full h-full"
                    style={{ animationDelay: "1.2s" }}
                />
                <div
                    className="water-ripple w-full h-full"
                    style={{ animationDelay: "2.4s" }}
                />
                <div
                    className="water-ripple w-full h-full"
                    style={{ animationDelay: "3.6s" }}
                />
            </div>

            {/* Drifting glow orbs */}
            <div
                className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-3xl"
                style={{ animation: "drift 18s ease-in-out infinite" }}
            />
            <div
                className="absolute top-20 right-1/4 w-[260px] h-[260px] rounded-full bg-teal-400/10 blur-3xl"
                style={{ animation: "drift 22s ease-in-out infinite reverse" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 md:pt-28 pb-32 w-full">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-8 space-y-8">
                        {/* Eyebrow */}
                        <div
                            data-testid="hero-eyebrow"
                            className="animate-fade-up inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/25 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                            </span>
                            <span className="text-xs uppercase tracking-[0.22em] text-cyan-200 font-medium">
                                BTM Layout · 1st Stage · Open Now
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            data-testid="hero-headline"
                            className="animate-fade-up font-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.92] text-white tracking-tight"
                            style={{ animationDelay: "0.08s" }}
                        >
                            Swim. Lift.
                            <br />
                            <span className="text-aqua-glow text-cyan-300">
                                Transform.
                            </span>
                        </h1>

                        {/* Subhead */}
                        <p
                            data-testid="hero-sub"
                            className="animate-fade-up max-w-2xl text-base md:text-lg text-cyan-50/80 leading-relaxed"
                            style={{ animationDelay: "0.18s" }}
                        >
                            BTM's only fitness destination with a{" "}
                            <span className="text-cyan-300 font-semibold">
                                full gym
                            </span>{" "}
                            and a{" "}
                            <span className="text-cyan-300 font-semibold">
                                swimming pool
                            </span>{" "}
                            under one roof. Built for the early-morning swimmer, the
                            lunch-hour lifter, and everyone in between.
                        </p>

                        {/* Trust row */}
                        <div
                            data-testid="hero-trust"
                            className="animate-fade-up flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-cyan-100/85"
                            style={{ animationDelay: "0.26s" }}
                        >
                            <span className="inline-flex items-center gap-2">
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                <strong className="text-white">{business.rating}★</strong>
                                <span className="text-cyan-100/60">
                                    · {business.reviews}+ Google reviews
                                </span>
                            </span>
                            <span className="hidden md:inline-flex h-4 w-px bg-cyan-400/30" />
                            <span className="inline-flex items-center gap-2">
                                <Clock className="h-4 w-4 text-cyan-300" />
                                <strong className="text-white">5 AM – 11 PM</strong>
                                <span className="text-cyan-100/60">· every day</span>
                            </span>
                        </div>

                        {/* CTAs */}
                        <div
                            className="animate-fade-up flex flex-col sm:flex-row gap-4 pt-2"
                            style={{ animationDelay: "0.34s" }}
                        >
                            <a
                                href={`tel:${business.phoneTel}`}
                                data-testid="hero-cta-call"
                                className="btn-aqua group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#06121e] font-bold text-base transition-all shadow-[0_18px_50px_-12px_rgba(34,211,238,0.5)] hover:shadow-[0_22px_60px_-12px_rgba(34,211,238,0.7)] hover:-translate-y-0.5"
                            >
                                <Phone className="h-5 w-5" />
                                Join Now · {business.phone}
                            </a>
                            <a
                                href="#plans"
                                data-testid="hero-cta-plans"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-cyan-300/30 hover:border-cyan-300/60 hover:bg-cyan-500/5 text-white font-semibold text-base transition-all"
                            >
                                View Membership Plans
                                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                            </a>
                        </div>

                        {/* Kannada subtle */}
                        <div
                            className="animate-fade-up pt-4 flex items-center gap-3 text-cyan-300/55"
                            style={{ animationDelay: "0.42s" }}
                        >
                            <div className="h-px w-10 bg-cyan-300/30" />
                            <span className="font-kannada text-base md:text-lg">
                                {business.nameKannada}
                            </span>
                            <span className="text-xs uppercase tracking-[0.22em]">
                                · namma BTM
                            </span>
                        </div>
                    </div>

                    {/* Stats panel */}
                    <div
                        data-testid="hero-stats"
                        className="lg:col-span-4 animate-fade-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <div className="glass-card rounded-3xl p-6 md:p-7 grid grid-cols-2 gap-5">
                            {faqStats.map((s) => (
                                <div
                                    key={s.label}
                                    className="relative"
                                    data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    <div className="stat-num text-5xl md:text-6xl leading-none">
                                        {s.value}
                                        <span className="text-cyan-300 text-3xl md:text-4xl">
                                            {s.suffix}
                                        </span>
                                    </div>
                                    <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.18em] text-cyan-100/60">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <a
                href="#why"
                data-testid="hero-scroll-cue"
                className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 text-cyan-300/70 hover:text-cyan-200 transition-colors flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
                <div className="h-9 w-5 rounded-full border border-cyan-300/40 flex items-start justify-center p-1">
                    <span className="block h-2 w-1 rounded-full bg-cyan-300 animate-float" />
                </div>
            </a>

            {/* Bottom wave */}
            <div className="wave-bottom">
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path
                        d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
                        fill="#0a1224"
                    />
                </svg>
            </div>
        </section>
    );
}
