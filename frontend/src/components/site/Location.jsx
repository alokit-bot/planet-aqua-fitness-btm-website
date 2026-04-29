import { MapPin, Phone, Clock, Navigation, Building2 } from "lucide-react";
import { business } from "@/lib/data";

export default function Location() {
    return (
        <section
            id="visit"
            data-testid="location-section"
            className="relative py-24 md:py-32 bg-[#080f1f]"
        >
            <div className="max-w-7xl mx-auto px-5 md:px-8">
                <div className="reveal text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-4">
                        — Visit Us
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
                        Find us in{" "}
                        <span className="text-cyan-300">BTM 1st Stage.</span>
                    </h2>
                    <p className="mt-5 text-cyan-100/70 text-base md:text-lg leading-relaxed">
                        Look for Corporation Bank on 20th Main Road — we're right above
                        it. You can't miss the blue signage.
                    </p>
                </div>

                <div className="reveal grid lg:grid-cols-12 gap-6">
                    {/* Map */}
                    <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-cyan-500/15 shadow-[0_30px_80px_-30px_rgba(8,145,178,0.5)] min-h-[420px] md:min-h-[520px] relative bg-[#0a1224]">
                        <iframe
                            data-testid="location-map"
                            title="Planet Aqua Pool & Fitness location"
                            src={business.mapsEmbed}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                position: "absolute",
                                inset: 0,
                                filter: "invert(0.92) hue-rotate(180deg) saturate(0.8) contrast(0.9)",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Contact panel */}
                    <div className="lg:col-span-5 space-y-4">
                        <div
                            data-testid="contact-card-address"
                            className="glass-card rounded-2xl p-6 group hover:-translate-y-0.5 transition-transform"
                        >
                            <div className="flex items-start gap-4">
                                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-cyan-500/15 border border-cyan-400/25 flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-400/80 mb-1">
                                        Address
                                    </div>
                                    <p className="text-sm md:text-base text-white leading-relaxed">
                                        {business.address}
                                    </p>
                                    <a
                                        href={business.mapsLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid="contact-directions-btn"
                                        className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 font-semibold"
                                    >
                                        <Navigation className="h-4 w-4" />
                                        Get Directions →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div
                            data-testid="contact-card-phone"
                            className="glass-card rounded-2xl p-6 group hover:-translate-y-0.5 transition-transform"
                        >
                            <div className="flex items-start gap-4">
                                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-cyan-500/15 border border-cyan-400/25 flex-shrink-0">
                                    <Phone className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-400/80 mb-1">
                                        Call to join
                                    </div>
                                    <a
                                        href={`tel:${business.phoneTel}`}
                                        className="font-display text-3xl md:text-4xl text-white tracking-wide hover:text-cyan-300 transition-colors block"
                                    >
                                        {business.phone}
                                    </a>
                                    <p className="text-xs text-cyan-200/55 mt-1">
                                        Tap to call · Reception 5 AM–11 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            data-testid="contact-card-hours"
                            className="glass-card rounded-2xl p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-cyan-500/15 border border-cyan-400/25 flex-shrink-0">
                                    <Clock className="h-5 w-5 text-cyan-300" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-400/80 mb-1">
                                        Hours
                                    </div>
                                    <div className="font-display text-2xl md:text-3xl text-white">
                                        {business.hours}
                                    </div>
                                    <p className="text-xs text-cyan-200/55 mt-1">
                                        Mon – Sun · 365 days a year
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            data-testid="contact-card-landmark"
                            className="rounded-2xl p-6 bg-gradient-to-br from-cyan-500/15 to-transparent border border-cyan-300/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-cyan-400/20 border border-cyan-300/40 flex-shrink-0">
                                    <Building2 className="h-5 w-5 text-cyan-200" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-200 mb-1">
                                        Landmark
                                    </div>
                                    <p className="text-sm text-white/90 leading-relaxed">
                                        Above{" "}
                                        <span className="font-semibold text-cyan-200">
                                            Corporation Bank
                                        </span>{" "}
                                        on 20th Main Road, BTM 1st Stage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
