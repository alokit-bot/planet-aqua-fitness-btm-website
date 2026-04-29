import { Waves, Clock, MapPin, Star } from "lucide-react";
import { whyUs } from "@/lib/data";

const ICONS = { Waves, Clock, MapPin, Star };

export default function WhyUs() {
    return (
        <section
            id="why"
            data-testid="why-section"
            className="relative py-24 md:py-32 bg-[#0a1224]"
        >
            <div className="absolute inset-0 water-grid opacity-30" />
            <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
                <div className="reveal max-w-3xl mb-14 md:mb-20">
                    <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
                        — Why Planet Aqua
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
                        Where BTM
                        <br />
                        <span className="text-cyan-300">gets fit.</span>
                    </h2>
                    <p className="mt-6 text-cyan-100/70 text-base md:text-lg max-w-2xl leading-relaxed">
                        We're not a chain. We're not a fad. We're a neighbourhood
                        institution — and the only place in BTM where you can swim laps
                        and hit the squat rack on the same membership.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {whyUs.map((item, idx) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <div
                                key={item.title}
                                data-testid={`why-card-${idx}`}
                                className="reveal group relative glass-card rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5"
                                style={{ transitionDelay: `${idx * 80}ms` }}
                            >
                                <div className="absolute top-5 right-5 text-[11px] font-mono text-cyan-400/40">
                                    0{idx + 1}
                                </div>
                                <div className="relative inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-cyan-700/10 border border-cyan-300/20 mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="h-6 w-6 text-cyan-300" strokeWidth={1.8} />
                                </div>
                                <h3 className="font-display text-xl md:text-2xl tracking-wide text-white mb-2.5">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-cyan-100/65 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-700" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
