import { useState } from "react";
import { Check, Waves, Dumbbell } from "lucide-react";
import { poolFeatures, gymFeatures } from "@/lib/data";

const TABS = [
    {
        id: "pool",
        label: "Swimming Pool",
        icon: Waves,
        image:
            "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80",
        sub: "Heated. Maintained. Olympic-practice.",
        features: poolFeatures,
        accent: "from-cyan-500/20 to-teal-500/5",
    },
    {
        id: "gym",
        label: "Gym Floor",
        icon: Dumbbell,
        image:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
        sub: "Air-conditioned. Full kit. Real coaches.",
        features: gymFeatures,
        accent: "from-amber-400/15 to-cyan-500/5",
    },
];

export default function Facilities() {
    const [active, setActive] = useState("pool");
    const tab = TABS.find((t) => t.id === active);
    const Icon = tab.icon;

    return (
        <section
            id="facilities"
            data-testid="facilities-section"
            className="relative py-24 md:py-32 bg-[#080f1f]"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
                            — Facilities
                        </span>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
                            Two worlds.
                            <br />
                            <span className="text-cyan-300">One membership.</span>
                        </h2>
                    </div>

                    {/* Tab toggle */}
                    <div
                        data-testid="facilities-tabs"
                        className="inline-flex p-1.5 rounded-full glass-card self-start md:self-auto"
                    >
                        {TABS.map((t) => (
                            <button
                                key={t.id}
                                data-testid={`facilities-tab-${t.id}`}
                                onClick={() => setActive(t.id)}
                                className={`relative px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                                    active === t.id
                                        ? "bg-cyan-500 text-[#06121e]"
                                        : "text-cyan-100/70 hover:text-white"
                                }`}
                            >
                                <t.icon className="h-4 w-4" />
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="reveal grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
                    {/* Image */}
                    <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[380px] md:min-h-[520px]">
                        <img
                            key={tab.id}
                            src={tab.image}
                            alt={tab.label}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            style={{
                                animation: "fade-in-up 0.7s ease both",
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1224] via-[#0a1224]/40 to-transparent" />
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${tab.accent} mix-blend-overlay`}
                        />

                        {/* Floating tag */}
                        <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0a1224]/70 backdrop-blur-md border border-cyan-300/20">
                            <Icon className="h-4 w-4 text-cyan-300" />
                            <span className="text-xs uppercase tracking-[0.18em] text-cyan-100">
                                {tab.label}
                            </span>
                        </div>

                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <div className="font-display text-3xl md:text-5xl text-white leading-none">
                                {tab.sub.split(".")[0]}.
                            </div>
                            <div className="font-display text-3xl md:text-5xl text-cyan-300 leading-none">
                                {tab.sub.split(".").slice(1, 3).join(".") + "."}
                            </div>
                        </div>
                    </div>

                    {/* Features list */}
                    <div className="lg:col-span-5 glass-card rounded-3xl p-7 md:p-9">
                        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-400/70 mb-2">
                            What's included
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl text-white mb-7">
                            {tab.label}{" "}
                            <span className="text-cyan-300">essentials</span>
                        </h3>

                        <ul className="space-y-3.5">
                            {tab.features.map((f, i) => (
                                <li
                                    key={f}
                                    data-testid={`facilities-feature-${tab.id}-${i}`}
                                    className="flex items-start gap-3 group"
                                >
                                    <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/15 border border-cyan-400/30 group-hover:bg-cyan-500/30 transition-colors">
                                        <Check className="h-3.5 w-3.5 text-cyan-300" strokeWidth={2.6} />
                                    </span>
                                    <span className="text-sm md:text-base text-cyan-50/85 leading-relaxed">
                                        {f}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-cyan-500/10 text-xs text-cyan-200/60 leading-relaxed">
                            {tab.id === "pool"
                                ? "Hygiene matters: swimming attire and caps are mandatory for all swimmers — kids, beginners, advanced."
                                : "Personal trainers available on most floor hours. Ask reception about 1-on-1 packages."}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
