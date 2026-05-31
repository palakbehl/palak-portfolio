import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const startupSequence = [
    { text: "> INITIALIZING PERSONAL PORTFOLIO PORT [PB.OS v3.0]...", delay: 100 },
    { text: "> LOAD KERNEL ENGINE............................... SUCCESS", delay: 400 },
    { text: "> ESTABLISHING SECURE PROTOCOLS.................... ACTIVE", delay: 700 },
    { text: "> SYNCHRONIZING CORE TELEMETRY..................... DONE", delay: 1000 },
    { text: "> MOUNTING HOST DATABASE (MongoDB)................. ACTIVE", delay: 1200 },
    { text: "> COMPILING TECH MATRIX MODULES.................... 30/30 DETECTED", delay: 1500 },
    { text: "> SCANNING BIOMETRICS (PALAK BEHL)................. VERIFIED", delay: 1800 },
    { text: "> BOOT SEQUENCE COMPLETE. ONLINE STATE ENABLED.", delay: 2100 }
  ];

  useEffect(() => {
    // Add logs step-by-step
    startupSequence.forEach((step) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step.text]);
      }, step.delay);
    });

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Fade out and trigger complete
    const fadeTimeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600); // Allow fade out animation to finish
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col justify-between p-8 font-mono text-xs text-[#00D9FF] select-none"
        >
          {/* Header Panel */}
          <div className="flex justify-between items-center border-b border-[#7C5CFC]/20 pb-4">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7C5CFC] animate-ping" />
              <span className="font-bold tracking-widest text-[#7C5CFC] text-sm">PB.OS // SYSTEM BOOT</span>
            </div>
            <div className="text-right text-[10px] text-[#94A3B8]">
              DATE_STAMP: {new Date().toISOString().split('T')[0]} // TIME: {new Date().toTimeString().split(' ')[0]}
            </div>
          </div>

          {/* Terminal Core logs */}
          <div className="flex-grow flex flex-col justify-start items-start gap-2.5 my-12 overflow-y-auto max-w-3xl w-full mx-auto text-left">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={log.includes("SUCCESS") || log.includes("VERIFIED") || log.includes("COMPLETE") ? "text-[#7C5CFC] font-semibold" : "text-[#00D9FF]"}
              >
                {log}
              </motion.div>
            ))}
            <div className="h-4 border-l-2 border-[#00D9FF] animate-blink w-1 ml-1" />
          </div>

          {/* Footer telemetry and loading gauge */}
          <div className="max-w-xl w-full mx-auto flex flex-col items-center gap-4">
            <div className="w-full flex justify-between text-[#94A3B8] font-bold text-[10px]">
              <span>LOADING SYSTEMS CORE</span>
              <span>{progress}%</span>
            </div>
            
            {/* Blueprint progress bar */}
            <div className="w-full h-2.5 bg-black/40 rounded-full border border-[#7C5CFC]/30 p-0.5 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] rounded-full shadow-[0_0_10px_#7C5CFC]"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            
            <div className="text-[10px] text-[#94A3B8] tracking-widest uppercase">
              DEEP RESCUE // ANTIGRAVITY ENGINE V3.0 // POWERED BY REACT
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
