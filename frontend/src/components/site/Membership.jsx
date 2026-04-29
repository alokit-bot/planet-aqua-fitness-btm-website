import { Phone, Check, Sparkles } from "lucide-react";
import { plans, business } from "@/lib/data";

export default function Membership() {
    return (
        <section
            id="plans"
            data-testid="membership-section"
            className="relative py-24 md:py-32 bg-[#0a1224]"
        >
            {/* Decorative pool ripple */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-30">
                <div className="water-ripple w-full h-full" />
                <div
                    className="water-ripple w-full h-full"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
                <div className="reveal text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
                        — Membership Plans
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
                        Pick your{" "}
                        <span className="text-cyan-300">lane.</span>
                    </h2>
                    <p className="mt-5 text-cyan-100/70 text-base md:text-lg leading-relaxed">
                        No hidden charges. No mystery fees. Pay for the lane you swim in,
                        the floor you lift on, or both — your call.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {plans.map((p, i) => (
                        <article
                            key={p.name}
                            data-testid={`plan-card-${i}`}
                            className={`reveal relative rounded-3xl p-7 md:p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                                p.highlight
                                    ? "bg-gradient-to-br from-cyan-500/20 via-cyan-700/10 to-[#0a1224] border border-cyan-300/40 shadow-[0_30px_80px_-20px_rgba(34,211,238,0.4)]"
                                    : "glass-card"
                            } ${i === 4 ? "lg:col-start-2" : ""}`}
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            {p.badge && (
                                <span
                                    className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] ${
                                        p.highlight ? "tag-gold" : "bg-cyan-500 text-[#06121e] font-bold"
                                    }`}
                                >
                                    {p.highlight && <Sparkles className="inline h-3 w-3 mr-1 -mt-0.5" />}
                                    {p.badge}
                                </span>
                            )}

                            <div className="flex items-baseline justify-between">
                                <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">
                                    {p.name}
                                </h3>
                                <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/70">
                                    {p.period}
                                </span>
                            </div>

                            <div className="mt-6 flex items-baseline gap-1.5">
                                <span className="text-2xl text-cyan-300 font-semibold">₹</span>
                                <span className="font-display text-6xl md:text-7xl text-white leading-none">
                                    {p.price}
                                </span>
                                <span className="text-cyan-100/60 text-sm ml-1">{p.unit}</span>
                            </div>

                            <ul className="mt-6 space-y-2.5">
                                {p.features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-2.5 text-sm text-cyan-50/80"
                                    >
                                        <Check className="h-4 w-4 text-cyan-300 mt-0.5 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`tel:${business.phoneTel}`}
                                data-testid={`plan-cta-${i}`}
                                className={`mt-7 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-all ${
                                    p.highlight
                                        ? "bg-cyan-400 hover:bg-cyan-300 text-[#06121e] shadow-[0_12px_30px_-10px_rgba(34,211,238,0.6)]"
                                        : "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-100 border border-cyan-400/20 hover:border-cyan-400/50"
                                }`}
                            >
                                <Phone className="h-4 w-4" />
                                Call to Join
                            </a>

                            <p className="mt-3 text-[11px] text-center text-cyan-200/45">
                                Contact for current pricing
                            </p>
                        </article>
                    ))}
                </div>

                <div className="reveal mt-12 text-center text-sm text-cyan-200/50">
                    <span className="text-cyan-300">Note:</span> Pricing is illustrative.
                    Call{" "}
                    <a
                        href={`tel:${business.phoneTel}`}
                        className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                    >
                        {business.phone}
                    </a>{" "}
                    for current rates and joining offers.
                </div>
            </div>
        </section>
    );
}
