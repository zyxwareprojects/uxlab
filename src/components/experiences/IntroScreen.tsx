import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZyxwareLogo } from "@/components/brand/ZyxwareLogo";


interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen = ({ onStart }: IntroScreenProps) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative transition-colors duration-300">
      {/* Logo top-left */}
      <div className="absolute top-0 left-0 px-6 py-5 z-10">
        <ZyxwareLogo />
      </div>

      <AnimatePresence mode="wait">
        {!isReady ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="text-center space-y-12 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="text-sm font-mono text-primary/70 uppercase tracking-widest mb-4">
                  Zyxware Human Centric Behaviour
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-foreground">
                  This is not training.
                </h1>
                <p className="text-xl md:text-2xl font-display font-semibold text-primary">
                  This is an experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="space-y-4 text-muted-foreground"
              >
                <p className="text-lg">You won't be tested.</p>
                <p className="text-lg">You won't be scored.</p>
                <p className="text-lg">You will simply notice things differently after.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="pt-8"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.2, duration: 1.5, ease: "easeOut" }}
                  className="h-px mb-8 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                />

                <button
                  onClick={() => setIsReady(true)}
                  className="px-10 py-5 text-xl rounded-md font-semibold transition-all duration-300 bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  I'm ready
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="text-center space-y-12 max-w-2xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-display font-semibold text-foreground"
              >
                Let's begin with something familiar.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-xl text-muted-foreground"
              >
                Everyday moments you've felt before.
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                onClick={onStart}
                className="px-8 py-4 text-lg rounded-md font-semibold transition-colors bg-primary text-primary-foreground hover:opacity-90"
              >
                Start
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
