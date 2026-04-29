import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { business } from "@/lib/data";

export default function WhatsAppFloat() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(t);
    }, []);

    if (!show) return null;

    const link = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
        "Hi! I'd like to know more about Planet Aqua Pool and Fitness."
    )}`;

    return (
        <>
            {/* Tooltip card */}
            {open && (
                <div
                    data-testid="whatsapp-tooltip"
                    className="fixed bottom-24 right-5 md:right-7 z-40 max-w-[300px] rounded-2xl glass-card p-5 animate-fade-up"
                >
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                            <div className="font-display text-lg tracking-wide text-white">
                                Chat with us
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/70">
                                Reception · 5 AM – 11 PM
                            </div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="p-1 text-cyan-200/60 hover:text-white"
                            aria-label="Close"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-sm text-cyan-100/75 leading-relaxed mb-4">
                        Ask about membership, free trials, or coaching schedules. We'll get
                        back fast.
                    </p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="whatsapp-tooltip-link"
                        onClick={() => setOpen(false)}
                        className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-sm transition-colors"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Open WhatsApp
                    </a>
                </div>
            )}

            <button
                data-testid="whatsapp-float-btn"
                onClick={() => setOpen(!open)}
                className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 inline-flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-[0_15px_45px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-all animate-pulse-ring"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 32 32"
                    className="h-7 w-7 md:h-8 md:w-8 fill-white"
                    aria-hidden
                >
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.402.402-.92 1.29-.92 2.36 0 1.06.36 2.165.86 2.96 1.146 1.748 2.69 3.46 4.61 4.39.74.36 1.62.665 2.475.78.39.057.79.057 1.16.057.96 0 2.06-.43 2.6-1.39.317-.57.43-1.18.43-1.835 0-.215-.043-.43-.087-.645-.144-.215-.502-.358-.788-.502-.358-.143-.717-.286-1.075-.43-.286-.144-1.115-.43-1.515-.43z" />
                    <path d="M16 0C7.165 0 0 7.165 0 16c0 2.823.747 5.583 2.165 8.013L0 32l8.165-2.135A15.93 15.93 0 0 0 16 32c8.835 0 16-7.165 16-16S24.835 0 16 0zm0 29.347a13.32 13.32 0 0 1-6.787-1.85l-.487-.288-5.04 1.318 1.346-4.9-.317-.502A13.27 13.27 0 0 1 2.653 16C2.653 8.642 8.642 2.653 16 2.653S29.347 8.642 29.347 16c0 7.358-5.99 13.347-13.347 13.347z" />
                </svg>
            </button>
        </>
    );
}
