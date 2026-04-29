import { Star, Quote } from "lucide-react";
import { testimonials, business } from "@/lib/data";

export default function Testimonials() {
    return (
        <section
            id="reviews"
            data-testid="testimonials-section"
            className="relative py-24 md:py-32 bg-[#0a1224]"
        >
            <div className="absolute inset-0 water-grid opacity-20" />

            <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
                <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
                    <div className="max-w-2xl">
                        <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
                            — Member Stories
                        </span>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
                            What BTM
                            <br />
                            <span className="text-cyan-300">says about us.</span>
                        </h2>
                    </div>
                    <div className="glass-card rounded-2xl px-5 py-4 inline-flex items-center gap-4 self-start md:self-auto">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                        i < Math.floor(business.rating)
                                            ? "fill-amber-400 text-amber-400"
                                            : "fill-amber-400/40 text-amber-400/40"
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="leading-tight">
                            <div className="font-display text-2xl text-white">
                                {business.rating}★
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/60">
                                {business.reviews}+ Google reviews
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                    {testimonials.map((t, i) => (
                        <figure
                            key={t.name}
                            data-testid={`testimonial-${i}`}
                            className="reveal glass-card rounded-3xl p-7 md:p-8 relative group hover:-translate-y-1 transition-transform"
                            style={{ transitionDelay: `${i * 70}ms` }}
                        >
                            <Quote className="absolute top-5 right-5 h-8 w-8 text-cyan-400/15 group-hover:text-cyan-400/30 transition-colors" />
                            <div className="flex mb-4">
                                {[...Array(t.rating)].map((_, k) => (
                                    <Star
                                        key={k}
                                        className="h-4 w-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <blockquote className="text-base md:text-lg text-cyan-50/90 leading-relaxed">
                                "{t.text}"
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-cyan-500/10 flex items-center gap-3">
                                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-700 text-[#06121e] font-bold text-sm">
                                    {t.name
                                        .split(" ")
                                        .map((s) => s[0])
                                        .join("")}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">
                                        {t.name}
                                    </div>
                                    <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/70">
                                        {t.role}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
