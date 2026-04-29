import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/state/ThemeContext";
import { ZyxwareLogo } from "@/components/brand/ZyxwareLogo";

interface ClientLayoutProps {
    children: ReactNode;
    step: number;
    totalSteps: number;
    title?: string;
}

export const ClientLayout = ({ children, step, totalSteps, title }: ClientLayoutProps) => {
    const { theme } = useTheme();
    const isLight = theme === "light";

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
            {/* Header: logo · progress · hamburger menu */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center backdrop-blur-md border-b ${
                    isLight ? "bg-background/80 border-border" : "bg-void/80 border-white/5"
                }`}
            >
                {/* Left side */}
                <div className="flex-1 flex justify-start">
                    <ZyxwareLogo className="h-9 md:h-10 w-auto" />
                </div>

                {/* Center */}
                <div className="flex gap-1 justify-center shrink-0">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 w-3 rounded-full transition-all duration-500 ${
                                i + 1 <= step
                                    ? isLight ? "bg-primary" : "bg-white/40"
                                    : isLight ? "bg-primary/15" : "bg-white/5"
                            }`}
                        />
                    ))}
                </div>

                {/* Right side spacer to match width so center stays centered */}
                <div className="flex-1 flex justify-end">
                    {/* Spacer to balance the logo on the left — actual menu lives in ClientDebugMenu */}
                    <div className="w-[36px]" />
                </div>
            </header>

            <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-screen flex flex-col">
                {title && (
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-2xl md:text-4xl font-display font-bold mb-12 text-foreground"
                    >
                        {title}
                    </motion.h1>
                )}

                <div className="flex-1 flex flex-col justify-center">
                    {children}
                </div>
            </main>
        </div>
    );
};
