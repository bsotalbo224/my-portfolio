import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollY >= offsetTop - 80 && scrollY < offsetBottom - 80) {
            setActiveSection(item.href.slice(1)); // remove #
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-foreground">MyPortfolio</div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "text-foreground hover:text-primary transition-colors font-medium relative group cursor-pointer",
                activeSection === item.href.slice(1) && "text-primary"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute left-0 bottom-0 h-0.5 bg-primary transition-all",
                  activeSection === item.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}
              />
            </a>
          ))}

          {/* Theme toggle aligned right */}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:text-primary transition"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "text-foreground hover:text-primary transition-colors font-medium relative",
                activeSection === item.href.slice(1) && "text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
};
