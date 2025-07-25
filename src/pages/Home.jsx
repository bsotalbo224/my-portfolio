import { About } from "@/components/About"
import { MainSection } from "@/components/MainSection"
import { Navbar } from "@/components/Navbar"
import ParticlesBackground from "@/components/ParticlesBackground"
import { Skills } from "@/components/Skills"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Project } from "@/components/Projects"
import Contact from "@/components/Contact"
import { Footer } from "../components/Footer"

export const Home =({ isDark })=>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effect */}
            <ParticlesBackground isDark={isDark} />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <MainSection />
                <About />
                <Skills />
                <Project />
                <Contact />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}