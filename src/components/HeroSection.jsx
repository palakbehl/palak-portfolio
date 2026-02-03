import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SocialButton } from "./ui/SocialButton";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
             {/* Subtle Animated Background */}
             <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container max-w-4xl mx-auto text-center z-10"
            >
                <div className="space-y-6">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Hi, I'm 
                        </motion.span>
                        <motion.span 
                            className="text-primary ml-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        > 
                        Palak
                        </motion.span>
                        <motion.span 
                            className="text-gradient ml-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        > 
                            Behl
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        I build full-stack and Java-based applications while exploring how technology can create real-world impact through thoughtful design and engineering.
                    </motion.p>

                    <motion.div 
                        className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                    >
                        {/* Primary CTA */}
                        <motion.a 
                            href="#projects" 
                            className="btn bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                        {/* Secondary CTA */}
                        <motion.a 
                            href="#contact" 
                            className="btn bg-transparent border border-primary/50 hover:bg-primary/10 text-foreground"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div 
                        className="pt-8 flex justify-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                    >
                        {[
                            { href: "https://github.com/palakbehl", icon: Github, label: "GitHub" },
                            { href: "https://www.linkedin.com/in/palakbehl26", icon: Linkedin, label: "LinkedIn" },
                            { href: "mailto:palakbehls@gmail.com", icon: Mail, label: "Email" }
                        ].map((social, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 + (index * 0.1) }}
                          >
                             <SocialButton
                                href={social.href}
                                icon={social.icon}
                                label={social.label}
                             />
                          </motion.div>
                        ))}
                    </motion.div>

                </div>

            </motion.div>


            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
            >
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />

            </motion.div>
        </section>
    );
}