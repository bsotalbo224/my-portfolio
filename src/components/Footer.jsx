import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:youremail@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-[hsl(var(--card))] border-t border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-center sm:text-left"
          >
            &copy; {new Date().getFullYear()} Benedict Sotalbo. All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full hover:bg-[hsl(var(--accent)/0.1)] transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
