import { AiOutlineLaptop } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";

export const MainSection = () => {
    return (
        <section id="home" className="page-container scroll-mt-24">
            <div className="content">


                {/* Main Content Card */}
                <div className="card card-hover fade-in text-center">
                    {/* Greeting Section */}
                    <div className="fade-in-delay-1">
                        <h2 className="text-lg font-medium opacity-80 mb-2">
                            Hello, I'm
                        </h2>
                    </div>

                    {/* Name with Glow Effect */}
                    <div className="fade-in-delay-2">
                        <h1 className="text-glow float-animation mb-4">
                            Benedict P. Sotalbo
                        </h1>
                    </div>

                    {/* Role Badge */}
                    <div className="fade-in-delay-3 mb-6">
                        <div className="theme-badge light dark:theme-badge dark inline-flex">
                            <span><AiOutlineLaptop /></span>
                            <span>BSIT Student</span>
                        </div>
                    </div>

                    {/* Bio Description */}
                    <div className="fade-in-delay-4">
                        <p className="text-lg leading-relaxed mb-8 max-w-2xl">
                            Passionate about technology and innovation, I'm currently pursuing my Bachelor of Science in Information Technology. 
                            I specialize in web development and enjoy creating digital solutions that make a difference. 
                            Always eager to learn new technologies and contribute to meaningful projects.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="fade-in-delay-5">
                        <div className="button-group">
                            <button className="cosmic-button">
                                View My Work
                            </button>
                            <button className="cosmic-button secondary">
                                Get In Touch
                            </button>
                        </div>
                    </div>



                    {/* Social Links or Quick Stats */}
                    <div className="fade-in-delay-5 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-center gap-6 text-sm opacity-80">
                            <div className="flex items-center gap-2">
                                <span><FaGraduationCap /></span>
                                <span>3rd Year Student</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span><IoMdPin /></span>
                                <span>Philippines</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="mt-12 mb-8 fade-in-delay-5">
                    <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                         onClick={() => {
                             const aboutSection = document.querySelector('#about');
                             if (aboutSection) {
                                 aboutSection.scrollIntoView({ behavior: 'smooth' });
                             }
                         }}>
                        <span className="text-sm animate-bounce">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden">
                            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
                        </div>
                        <div className="flex flex-col items-center mt-2">
                            <div className="w-0.5 h-4 bg-current opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-1 h-1 bg-current rounded-full mt-1 animate-bounce" style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};