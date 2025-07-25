import { Facebook, Instagram, Linkedin, Mail, PhoneCall, Twitter, Send, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setErrors({});
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "bsotalbo014@gmail.com",
            link: "mailto:bsotalbo014@gmail.com",
            description: "Send me an email anytime"
        },
        {
            icon: PhoneCall,
            title: "Phone",
            value: "+63 (981) 204-1481",
            link: "tel:+639123456789",
            description: "Available Mon-Fri, 9AM-6PM"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Rizal, Laguna, PH",
            link: "#",
            description: "Open to remote opportunities"
        }
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
        { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-400" },
        { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
        { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-700" }
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative scroll-mt-24">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? I'd love to hear from you. 
                        Let's create something amazing together!
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="flex justify-center gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            <span className="text-[hsl(var(--muted-foreground))]">Usually responds within 24 hours</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="section-card">
                            <h3 className="text-2xl font-semibold mb-6 text-[hsl(var(--foreground))]">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors group"
                                    >
                                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                                            <info.icon className="h-6 w-6 text-primary group-hover:text-white"/>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-[hsl(var(--foreground))] mb-1">
                                                {info.title}
                                            </h4>
                                            <a 
                                                href={info.link} 
                                                className="text-[hsl(var(--muted-foreground))] hover:text-primary transition-colors block mb-1"
                                            >
                                                {info.value}
                                            </a>
                                            <p className="text-sm text-[hsl(var(--muted-foreground))]">
                                                {info.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="section-card">
                            <h4 className="font-semibold mb-6 text-[hsl(var(--foreground))]">
                                Connect with Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--muted-foreground))] ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5"/>
                                    </motion.a>
                                ))}
                            </div>
                            
                            {/* Additional Info */}
                            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                                    <strong className="text-primary">Pro tip:</strong> For urgent matters, 
                                    email is the fastest way to reach me. I check my inbox multiple times daily!
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="section-card">
                        <h3 className="text-2xl font-semibold mb-6 text-[hsl(var(--foreground))]">
                            Send a Message
                        </h3>
                        
                        {/* Status Messages */}
                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                                    submitStatus === 'success' 
                                        ? 'bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200'
                                        : 'bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200'
                                }`}
                            >
                                {submitStatus === 'success' ? (
                                    <CheckCircle size={20} />
                                ) : (
                                    <AlertCircle size={20} />
                                )}
                                <span>
                                    {submitStatus === 'success' 
                                        ? 'Message sent successfully! I\'ll get back to you soon.'
                                        : 'Failed to send message. Please try again or contact me directly.'
                                    }
                                </span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                                        Your Name *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border bg-[hsl(var(--background))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                                            errors.name ? 'border-red-500' : 'border-[hsl(var(--border))]'
                                        }`}
                                        placeholder="Enter your name..." 
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>
                                
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                                        Your Email *
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border bg-[hsl(var(--background))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                                            errors.email ? 'border-red-500' : 'border-[hsl(var(--border))]'
                                        }`}
                                        placeholder="Enter your email..." 
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                                    Subject *
                                </label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border bg-[hsl(var(--background))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                                        errors.subject ? 'border-red-500' : 'border-[hsl(var(--border))]'
                                    }`}
                                    placeholder="What's this about?" 
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                                )}
                            </div>
                            
                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                                    Your Message *
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-lg border bg-[hsl(var(--background))] text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical transition-all ${
                                        errors.message ? 'border-red-500' : 'border-[hsl(var(--border))]'
                                    }`}
                                    placeholder="Tell me about your project or idea..." 
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                )}
                                <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                                    {formData.message.length}/500 characters
                                </p>
                            </div>
                            
                            {/* Submit Button */}
                            <motion.button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${
                                    isSubmitting 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'cosmic-button'
                                }`}
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            >
                                {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                <div className="flex items-center gap-2">
                                    <Send size={16} />
                                    <span>Send Message</span>
                                </div>
                            )}

                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}