import { FaGraduationCap, FaCode, FaDatabase, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPython, SiMysql, SiTailwindcss, SiFigma, SiPostman } from "react-icons/si";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

export const About = () => {
    return (
        <section id="about" className="page-container scroll-mt-24">
            <div className="content">

                {/* About Me Card */}
                <div className="card card-hover fade-in">

                    {/* Section Header */}
                    <div className="fade-in-delay-1 text-center mb-8">
                        <h2 className="text-3xl font-bold text-glow mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Personal Introduction */}
                    <div className="fade-in-delay-2 mb-8">
                        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                            I'm Benedict P. Sotalbo, a passionate Information Technology student from the Philippines. 
                            My journey in tech began with curiosity about how digital systems work, and has evolved 
                            into a deep appreciation for creating innovative solutions that solve real-world problems.
                        </p>
                    </div>

                    {/* Educational Background */}
                    <div className="fade-in-delay-3 mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-500/20 dark:bg-blue-400/20 rounded-full">
                                <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-semibold">Educational Background</h3>
                        </div>
                        
                        <div className="section-card">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                                            Bachelor of Science in Information Technology
                                        </h4>
                                        <p className="mt-1">
                                            Currently in 3rd Year | Expected Graduation: 2026
                                        </p>
                                        <p className="mt-2">
                                            Focusing on web development, database management, and software engineering principles. 
                                            Maintaining strong academic performance while actively participating in coding projects and tech communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="fade-in-delay-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/20 dark:bg-purple-400/20 rounded-full">
                                <FaCode className="text-2xl text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-semibold">Tools & Technologies</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Programming Languages */}
                            <div className="section-card">
                                <h4 className="text-lg font-semibold mb-4 text-orange-700 dark:text-orange-300">Programming Languages</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="tech-item flex items-center gap-2">
                                        <SiJavascript className="text-yellow-500 dark:text-yellow-400 text-xl" />
                                        <span className="text-sm font-medium">JavaScript</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <SiPython className="text-blue-600 dark:text-blue-400 text-xl" />
                                        <span className="text-sm font-medium">Python</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <DiHtml5 className="text-orange-600 dark:text-orange-400 text-xl" />
                                        <span className="text-sm font-medium">HTML5</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <DiCss3 className="text-blue-600 dark:text-blue-400 text-xl" />
                                        <span className="text-sm font-medium">CSS3</span>
                                    </div>
                                </div>
                            </div>

                            {/* Frameworks & Libraries */}
                            <div className="section-card">
                                <h4 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-300">Frameworks & Libraries</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="tech-item flex items-center gap-2">
                                        <FaReact className="text-cyan-500 dark:text-cyan-400 text-xl" />
                                        <span className="text-sm font-medium">React</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <FaNodeJs className="text-green-600 dark:text-green-400 text-xl" />
                                        <span className="text-sm font-medium">Node.js</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <SiTailwindcss className="text-cyan-500 dark:text-cyan-400 text-xl" />
                                        <span className="text-sm font-medium">Tailwind</span>
                                    </div>
                                </div>
                            </div>

                            {/* Databases */}
                            <div className="section-card">
                                <h4 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-300">Databases</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="tech-item flex items-center gap-2">
                                        <FaDatabase className="text-gray-600 dark:text-gray-400 text-xl" />
                                        <span className="text-sm font-medium">SQL</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <SiMysql className="text-blue-600 dark:text-blue-400 text-xl" />
                                        <span className="text-sm font-medium">MySQL</span>
                                    </div>
                                </div>
                            </div>

                            {/* Development Tools */}
                            <div className="section-card">
                                <h4 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-300">Development Tools</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="tech-item flex items-center gap-2">
                                        <BiLogoVisualStudio className="text-blue-600 dark:text-blue-400 text-xl" />
                                        <span className="text-sm font-medium">VS Code</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <FaGithub className="text-gray-800 dark:text-gray-300 text-xl" />
                                        <span className="text-sm font-medium">Git</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <SiFigma className="text-purple-600 dark:text-purple-400 text-xl" />
                                        <span className="text-sm font-medium">Figma</span>
                                    </div>
                                    <div className="tech-item flex items-center gap-2">
                                        <SiPostman className="text-orange-600 dark:text-orange-400 text-xl" />
                                        <span className="text-sm font-medium">Postman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Philosophy */}
                    <div className="fade-in-delay-5 mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-center">
                            <p className="text-lg italic max-w-2xl mx-auto">
                                "Technology is constantly evolving, and I believe in continuous learning and adaptation. 
                                Every project is an opportunity to grow and contribute something meaningful to the digital world."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Hint */}
                <div className="mt-12 mb-8 fade-in-delay-5">
                    <div
                        className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => {
                            const projectsSection = document.querySelector('#skills');
                            if (projectsSection) {
                                projectsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <span className="text-sm animate-bounce">View My Skills</span>
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
