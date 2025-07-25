import { motion } from "framer-motion";

export const Skills = () => {
    const skills = [
        { name: "HTML", Level: 80, category: "frontend" },
        { name: "JavaScript", Level: 75, category: "frontend" },
        { name: "React", Level: 80, category: "frontend" },
        { name: "Tailwind CSS", Level: 70, category: "frontend" },
        { name: "Next.js", Level: 50, category: "frontend" },

        // backend
        { name: "Laravel", Level: 0, category: "backend" },
        { name: "MySql", Level: 85, category: "backend" },

        // tools
        { name: "Git/Github", Level: 90, category: "tools" },
        { name: "Figma", Level: 20, category: "tools" },
        { name: "Vs Code", Level: 95, category: "tools" },
    ];

    const neonColor = [
        "#00d4ff", // cyan
        "#ff6b35", // orange
        "#39ff14", // electric green
    ];

    return (
        <section id="skills" className="py-24 px-4 relative scroll-mt-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
                    My<span className="text-primary"> Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, key) => {
                        const neon = neonColor[key % neonColor.length];

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: key * 0.1 }}
                                className="section-card hover:scale-[1.02]"
                            >
                                {/* Skill Name and Level */}
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">{skill.name}</h3>
                                    <span
                                        className="text-sm font-bold"
                                        style={{ color: neon }}
                                    >
                                        {skill.Level}%
                                    </span>
                                </div>

                                {/* Progress Bar Background */}
                                <div className="w-full bg-[hsl(var(--border))] rounded-full h-2 mb-2">
                                    <motion.div
                                        className="h-2 rounded-full relative overflow-hidden"
                                        style={{
                                            backgroundColor: neon,
                                            boxShadow: `0 0 10px ${neon}40`,
                                        }}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.Level}%` }}
                                        transition={{
                                            duration: 1.5,
                                            delay: key * 0.1 + 0.5,
                                            ease: "easeOut",
                                        }}
                                    >
                                        {/* Animated glow effect */}
                                        <motion.div
                                            className="absolute inset-0 opacity-50"
                                            style={{
                                                background: `linear-gradient(90deg, transparent, ${neon}, transparent)`,
                                            }}
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 3,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Category Badge */}
                                <div className="flex justify-end">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--muted-foreground))] capitalize">
                                        {skill.category}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                {/* Navigation Hint */}
                <div className="mt-12 mb-8 fade-in-delay-5">
                    <div
                        className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => {
                            const projectsSection = document.querySelector('#projects');
                            if (projectsSection) {
                                projectsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <span className="text-sm animate-bounce">View My Projects</span>
                        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden">
                            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
                        </div>
                        <div className="flex flex-col items-center mt-2">
                            <div className="w-0.5 h-4 bg-current opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-1 h-1 bg-current rounded-full mt-1 animate-bounce" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};