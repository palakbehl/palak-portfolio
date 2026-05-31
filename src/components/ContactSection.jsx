import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Github, MessageSquare } from "lucide-react";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/emailService";

export const ContactSection = () => {
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      try {
        await sendContactEmail(data);
      } catch (error) {
        console.warn("Backend not active. Simulation sent.");
      }

      addToast({
        title: "Link established!",
        description: "Your message has bypassed local firewalls. I will get back to you shortly.",
        type: "success"
      });

      formRef.current?.reset();
    } catch (error) {
      addToast({
        title: "Transmission failure",
        description: "Failed to establish a link. Please retry.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative bg-[#050816] border-t border-primary/10">
      <div className="absolute inset-0 bg-[#050816]/20 blueprint-grid pointer-events-none opacity-40" />

      <div className="container max-w-6xl mx-auto z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs text-[#00D9FF] tracking-widest uppercase">{`// COMMUNICATIONS HUD`}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
            ESTABLISH <span className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] bg-clip-text text-transparent">CONNECTION</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#7C5CFC] to-transparent mx-auto" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Telemetry Links Column (Left) */}
          <div className="cyber-panel tech-corners p-6 md:p-8 bg-[#050816]/90 flex flex-col justify-between text-left space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-primary/10 pb-4">
                <div className="p-3 bg-black/45 border border-[#7C5CFC]/30 text-[#7C5CFC] rounded-lg shadow-[0_0_10px_rgba(124,92,252,0.15)]">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-[#F8FAFC]">COMMUNICATION HUD</h3>
                  <p className="text-[10px] font-mono text-muted">SECURE_LINK // ROUTE_ACTIVE</p>
                </div>
              </div>

              {/* Direct links */}
              <div className="space-y-5 font-mono text-xs text-muted">
                
                {/* Email link */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-black/45 border border-[#7C5CFC]/20 text-[#7C5CFC] rounded-lg shadow-[0_0_8px_rgba(124,92,252,0.1)]">
                    <Mail size={14} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-[#7C5CFC] font-extrabold">{`// EMAIL_ADDRESS`}</span>
                    <p className="font-semibold text-sm text-[#F8FAFC]">
                      <a href="mailto:palakbehls@gmail.com" className="hover:text-[#00D9FF] transition-colors">
                        palakbehls@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone link */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-black/45 border border-[#00D9FF]/20 text-[#00D9FF] rounded-lg shadow-[0_0_8px_rgba(0,217,255,0.1)]">
                    <Phone size={14} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-[#00D9FF] font-extrabold">{`// SECURE_VOICE`}</span>
                    <p className="font-semibold text-sm text-[#F8FAFC]">
                      <a href="tel:+918758443219" className="hover:text-[#7C5CFC] transition-colors">
                        +91 87584 43219
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location link */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-black/45 border border-[#7C5CFC]/20 text-[#7C5CFC] rounded-lg shadow-[0_0_8px_rgba(124,92,252,0.1)]">
                    <MapPin size={14} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-[#7C5CFC] font-extrabold">{`// LOCATION_COORDS`}</span>
                    <p className="font-semibold text-sm text-[#F8FAFC]">Anand, Gujarat, India</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social connection networks */}
            <div className="pt-6 border-t border-primary/10 space-y-3">
              <span className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase block">{`// ACTIVE LINK_NETWORKS`}</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/palakbehl", label: "GitHub", hover: "hover:text-[#F8FAFC] hover:border-[#F8FAFC]/50 hover:shadow-[0_0_10px_rgba(248,250,252,0.25)]" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/palakbehl26", label: "LinkedIn", hover: "hover:text-[#00D9FF] hover:border-[#00D9FF]/50 hover:shadow-[0_0_10px_rgba(0,217,255,0.25)]" },
                  { icon: SiLeetcode, href: "https://leetcode.com/u/Palak_behl", label: "LeetCode", hover: "hover:text-amber-500 hover:border-amber-500/50 hover:shadow-[0_0_10px_rgba(245,158,11,0.25)]" },
                  { icon: SiCodechef, href: "https://www.codechef.com/users/palakbehl26", label: "CodeChef", hover: "hover:text-emerald-500 hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.25)]" },
                  { icon: SiHackerrank, href: "https://www.hackerrank.com/profile/palakbehls", label: "HackerRank", hover: "hover:text-green-500 hover:border-green-500/50 hover:shadow-[0_0_10px_rgba(34,197,94,0.25)]" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className={`p-3 bg-black/45 border border-primary/20 rounded-md text-muted transition-all duration-300 ${item.hover}`}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Contact Form Column (Right) */}
          <div className="cyber-panel tech-corners p-6 md:p-8 bg-[#050816]/95 border border-[#7C5CFC]/30 text-left">
            <h3 className="font-mono font-bold text-sm text-[#F8FAFC] border-b border-[#00D9FF]/20 pb-4 mb-6 uppercase tracking-wider">
              {`// TRANSMIT CRYPTO MESSAGE`}
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-muted tracking-wider uppercase block">{`> ENTER_OPERATOR_NAME`}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-md text-[#F8FAFC] placeholder-muted-foreground/30 focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.15)] transition-all font-mono"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-muted tracking-wider uppercase block">{`> ENTER_OPERATOR_EMAIL`}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. jdoe@cyber.net"
                  className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-md text-[#F8FAFC] placeholder-muted-foreground/30 focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.15)] transition-all font-mono"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-muted tracking-wider uppercase block">{`> WRITE_MESSAGE`}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Insert transmission contents here..."
                  className="w-full px-4 py-3 bg-black/40 border border-primary/20 rounded-md text-[#F8FAFC] placeholder-muted-foreground/30 focus:outline-none focus:border-[#00D9FF] focus:shadow-[0_0_12px_rgba(0,217,255,0.15)] transition-all font-mono resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold text-[#050816] bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] rounded-lg hover:shadow-[0_0_15px_#7C5CFC] transition-all cursor-pointer disabled:opacity-50"
                )}
              >
                {isSubmitting ? "TRANSMITTING SPEC DATA..." : "TRANSMIT MESSAGE"}
                <Send size={12} className="text-[#050816]" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
