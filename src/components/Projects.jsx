import { ExternalLink, Github, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "TaskTrack: Task Management System",
        description: [
            "• Add tasks with titles, descriptions, and due dates",
            "• Mark tasks as completed with progress tracking",
            "• Update or delete tasks with confirmation dialogs",
            "• Filter tasks by status and priority levels",
            "• Export task reports in multiple formats"
        ],
        image: `${import.meta.env.BASE_URL}projects/TaskTrack.png`,
        liveUrl: "#",
        githubUrl: "#",
        tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
        status: "Completed",
        featured: true
    },
    {
        id: 2,
        title: "Student Enrollment System",
        description: [
            "• Complete student registration workflow",
            "• Document upload and verification system",
            "• Real-time enrollment status tracking",
            "• Admin dashboard for managing applications",
            "• Automated email notifications"
        ],
        image: `${import.meta.env.BASE_URL}projects/Enrollment.png`,
        liveUrl: "#",
        githubUrl: "#",
        tags: ["PHP", "CSS", "MySQL", "Bootstrap"],
        status: "Completed",
        featured: false
    },
    {
        id: 3,
        title: "AniTube - Anime Streaming Platform",
        description: [
            "• Stream favorite anime in HD quality",
            "• Create and manage personal watchlists",
            "• AI-powered personalized recommendations",
            "• Advanced search by genre, rating, or season",
            "• Bookmark episodes and resume playback",
            "• Community reviews and ratings system"
        ],
        image: `${import.meta.env.BASE_URL}projects/AniTube.png`,
        liveUrl: "#",
        githubUrl: "#",
        tags: ["Flutter", "Firebase", "Dart", "Go", "REST API"],
        status: "Completed",
        featured: true
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const Project = () => {
    return (
        <section id="projects" className="py-24 px-4 relative scroll-mt-24">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto text-lg">
                        Explore my collection of projects built with modern technologies and best practices
                    </p>
                    
                    {/* Project Stats */}
                    <div className="flex justify-center gap-8 text-sm">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{projects.length}</div>
                            <div className="text-[hsl(var(--muted-foreground))]">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                                {projects.filter(p => p.status === "Completed").length}
                            </div>
                            <div className="text-[hsl(var(--muted-foreground))]">Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                                {projects.filter(p => p.featured).length}
                            </div>
                            <div className="text-[hsl(var(--muted-foreground))]">Featured</div>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="group section-card hover:scale-[1.02] relative overflow-hidden"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-primary to-blue-600 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                    <Star className="w-4 h-4 fill-yellow-300 stroke-yellow-300" />
                                    Featured
                                </span>
                                </div>
                            )}

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-20">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    project.status === "Completed" 
                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                }`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden rounded-t-lg">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />
                                
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex gap-2">
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all"
                                                aria-label={`View ${project.title} live demo`}
                                            >
                                                <Eye size={16} />
                                                Live Demo
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all"
                                                aria-label={`View ${project.title} source code`}
                                            >
                                                <Github size={16} />
                                                Code
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--foreground))] group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                {/* Description */}
                                <div className="text-[hsl(var(--muted-foreground))] text-sm mb-6 line-clamp-4">
                                    {Array.isArray(project.description) ? (
                                        <ul className="space-y-1">
                                            {project.description.slice(0, 4).map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                                                    <span>{item.replace('• ', '')}</span>
                                                </li>
                                            ))}
                                            {project.description.length > 4 && (
                                                <li className="text-primary font-medium">
                                                    +{project.description.length - 4} more features...
                                                </li>
                                            )}
                                        </ul>
                                    ) : (
                                        <p>{project.description}</p>
                                    )}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4 border-t border-[hsl(var(--border))]">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                                        aria-label={`View ${project.title} live demo`}
                                    >
                                        <ExternalLink size={16} />
                                        View Project
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[hsl(var(--accent))] transition-all"
                                        aria-label={`View ${project.title} source code`}
                                    >
                                        <Github size={16} />
                                        Source
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Navigation Hint */}
                <div className="mt-12 mb-8 fade-in-delay-5">
                    <div
                        className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => {
                            const projectsSection = document.querySelector('#contact');
                            if (projectsSection) {
                                projectsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <span className="text-sm animate-bounce">Get in Contact</span>
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