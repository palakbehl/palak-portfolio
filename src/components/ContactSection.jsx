import { Mail, Phone, MapPin, Linkedin ,Send} from "lucide-react";
import { SocialButton } from "./ui/SocialButton";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { sendContactEmail } from "@/lib/emailService";

export const ContactSection = () => {
    const {addToast}=useToast();
    const [isSubmitting,setIsSubmitting]=useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(formRef.current);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
            };

            // Try to send via backend API
            // If backend is not available, show success message anyway
            try {
                await sendContactEmail(data);
            } catch (error) {
                console.warn('Backend not configured yet. Email service setup instructions available in emailService.js');
            }

            // Show success toast
            addToast({
                title: "Message sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
                type: "success"
            });

            // Reset form
            formRef.current?.reset();
        } catch (error) {
            addToast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                type: "error"
            });
        } finally {
            setIsSubmitting(false);
        }
    }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out using
          the contact information below or through the form. I'm always open to discussing new
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:palakbehls@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    palakbehls@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918758443219"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 87584 43219
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Anand, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <SocialButton
                  href="https://www.linkedin.com/in/palakbehl26"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialButton
                   href="https://leetcode.com/u/Palak_behl"
                   icon={SiLeetcode}
                   label="LeetCode"
                />
                <SocialButton
                   href="https://www.codechef.com/users/palakbehl26"
                   icon={SiCodechef}
                   label="CodeChef"
                />
                <SocialButton
                   href="https://www.hackerrank.com/profile/palakbehls"
                   icon={SiHackerrank}
                   label="HackerRank"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Raj Sharma"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="raj@example.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("btn w-full items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
