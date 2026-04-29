import { Sunrise, Sun, Sunset, Moon } from "lucide-react";
import { schedule } from "@/lib/data";

const ICONS = { Sunrise, Sun, Sunset, Moon };

export default function Schedule() {
    return (
        <section
            id="schedule"
            data-testid="schedule-section"
            className="relative py-24 md:py-32 bg-[#080f1f]"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="reveal grid md:grid-cols-2 gap-10 mb-14 md:mb-20 items-end">
                    <div>
                        <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
                            — Schedule
                        </span>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
                            18 hours.
                            <br />
                            <span className="text-cyan-300">Every day.</span>
                        </h2>
                    </div>
                    <p className="text-cyan-100/70 text-base md:text-lg leading-relaxed md:max-w-md md:justify-self-end">
                        Doors open at 5 AM and close at 11 PM, all 7 days. Whether you're
                        chasing sunrise laps or melting post-office stress, there's a slot
                        with your name on it.
                    </p>
                </div>

                <div className="reveal relative">
                    {/* Vertical timeline rail */}
                    <div className="absolute left-7 md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 hidden sm:block" />

                    <div className="space-y-4 md:space-y-6">
                        {schedule.map((s, i) => {
                            const Icon = ICONS[s.icon];
                            const isLeft = i % 2 === 0;
                            return (
                                <div
                                    key={s.block}
                                    data-testid={`schedule-row-${i}`}
                                    className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${
                                        isLeft ? "" : "md:[&>*:first-child]:order-2"
                                    }`}
                                >
                                    {/* Spacer side on alternating rows */}
                                    <div className="hidden md:block" />

                                    {/* Card */}
                                    <div className="relative pl-16 sm:pl-20 md:pl-0">
                                        {/* Dot */}
                                        <span className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-7 inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#080f1f] border-2 border-cyan-400 z-10">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                        </span>

                                        <div className="glass-card rounded-2xl p-5 md:p-6 group hover:-translate-y-0.5 transition-transform">
                                            <div className="flex items-start gap-4">
                                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-cyan-500/15 border border-cyan-400/20 flex-shrink-0">
                                                    <Icon
                                                        className="h-5 w-5 text-cyan-300"
                                                        strokeWidth={1.8}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                                                        <h3 className="font-display text-2xl text-white tracking-wide">
                                                            {s.block}
                                                        </h3>
                                                        <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-400/80">
                                                            All days
                                                        </span>
                                                    </div>
                                                    <div className="mt-1.5 font-mono text-cyan-300 text-base md:text-lg">
                                                        {s.time}
                                                    </div>
                                                    <p className="mt-2 text-sm text-cyan-100/65">
                                                        {s.focus}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
