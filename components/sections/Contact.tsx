'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'gp67853@gmail.com',
    href: 'mailto:gp67853@gmail.com',
    color: 'text-primary',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9106651984',
    href: 'tel:+919106651984',
    color: 'text-secondary',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Ahmedabad, India',
    href: null,
    color: 'text-accent',
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/gaurav0909-max',
    color: 'hover:text-white',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gaurav-patel-webdev',
    color: 'hover:text-blue-400',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:gp67853@gmail.com',
    color: 'hover:text-primary',
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <GlassCard key={index} className="p-4">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 hover:scale-105 transition-transform duration-300"
                      >
                        <div className={`p-3 rounded-lg bg-background-secondary ${info.color}`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-text-secondary text-sm">{info.label}</p>
                          <p className="text-text-primary font-medium">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-background-secondary ${info.color}`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-text-secondary text-sm">{info.label}</p>
                          <p className="text-text-primary font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-background-secondary/50 border border-white/5 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-background-secondary`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <GlassCard className="p-6 mt-6">
                <h4 className="text-lg font-semibold mb-2 text-primary">Availability</h4>
                <p className="text-text-secondary">
                  Open to remote or Mumbai-based full-time roles as a{' '}
                  <span className="text-text-primary font-medium">
                    Full Stack Engineer, Product Engineer, or MERN Stack Developer
                  </span>
                </p>
                <p className="text-secondary font-semibold mt-2">Immediate Joiner</p>
              </GlassCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <GlassCard className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-white/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-white/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-white/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Project Collaboration"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-white/10 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={FiSend}
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
