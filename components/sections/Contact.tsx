'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiClock, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { RevealCard } from '@/components/ui/RevealCard';

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

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'gp627853@gmail.com',
    action: 'Copy email',
    copyable: true,
    color: 'text-primary',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Mumbai, India',
    action: 'View map',
    copyable: false,
    color: 'text-secondary',
  },
  {
    icon: FiClock,
    label: 'Response Time',
    value: 'Within 24 hours',
    action: null,
    copyable: false,
    color: 'text-primary',
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    username: '@gaurav0909-max',
    href: 'https://github.com/gaurav0909-max',
    color: 'from-slate-grey-500 to-slate-grey-700',
    hoverColor: 'group-hover:from-slate-grey-400 group-hover:to-slate-grey-600',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    username: '/gaurav-patel-webdev',
    href: 'https://linkedin.com/in/gaurav-patel-webdev',
    color: 'from-blue-500 to-blue-700',
    hoverColor: 'group-hover:from-blue-400 group-hover:to-blue-600',
  },
  {
    icon: FiMail,
    label: 'Email',
    username: 'gp627853@gmail.com',
    href: 'mailto:gp627853@gmail.com',
    color: 'from-primary to-primary-dark',
    hoverColor: 'group-hover:from-primary-light group-hover:to-primary',
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const formValues = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('gp627853@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard API failed - email is visible on screen
    }
  };

  return (
    <section id="contact" className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-20 lg:pb-24 px-6 sm:px-10 lg:px-12">
      <div className="max-w-2xl lg:max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' } as any}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-text-tertiary">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">Get in Touch</h2>
            <p className="text-base text-text-secondary leading-relaxed">Drop a line. I read every message - yes, really.</p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col gap-10">
            {/* Contact Info & Social */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <RevealCard
                    key={index}
                    className="p-6 border border-border bg-background-card shadow-card group cursor-pointer"
                    onClick={method.copyable ? copyEmail : undefined}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-2xl bg-background-elevated ${method.color} transition-all duration-300 group-hover:scale-110`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-wide text-text-tertiary mb-1">{method.label}</p>
                        <p className="text-base font-semibold text-text-primary mb-1">{method.value}</p>
                        {method.copyable && (
                          <button
                            onClick={copyEmail}
                            className="text-xs text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                          >
                            {copiedEmail ? (
                              <>
                                <FiCheck className="w-3 h-3" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <FiCopy className="w-3 h-3" />
                                {method.action}
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </RevealCard>
                ))}
              </div>

              {/* Availability Status */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background-card p-8 backdrop-blur-xl shadow-card">
                <div className="absolute inset-0 opacity-60" style={{
                  background: 'radial-gradient(circle at 20% 20%, rgba(77,178,179,0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(156,99,156,0.10), transparent 50%)',
                }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary">Currently Available</h4>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    Open to remote or Mumbai-based full-time roles as a{' '}
                    <span className="text-primary font-semibold">Frontend Developer</span>,{' '}
                    <span className="text-secondary font-semibold">Backend Developer</span>, or{' '}
                    <span className="text-primary font-semibold">MERN Stack Developer</span>
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-text-tertiary">
                      <span className="font-semibold text-green-500">Immediate Joiner</span> • Timezone: IST (UTC+5:30)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links — hidden on mobile (already in sidebar) */}
              <div className="hidden lg:block space-y-4">
                <p className="text-xs uppercase tracking-widest text-text-tertiary">Connect on Social</p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl border border-border bg-background-card p-6 shadow-card transition-all duration-300 hover:shadow-glow-sm"
                    >
                      <div className="relative z-10 flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${social.color} ${social.hoverColor} text-white transition-all duration-300 group-hover:scale-110`}>
                          <social.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                            {social.label}
                          </p>
                          <p className="text-xs text-text-tertiary">{social.username}</p>
                        </div>
                      </div>
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(77,178,179,0.10), transparent 70%)',
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-background-card p-8 md:p-10 backdrop-blur-xl shadow-card">
                <div className="absolute inset-0 opacity-60" style={{
                  background: 'radial-gradient(circle at 80% 20%, rgba(77,178,179,0.15), transparent 50%), radial-gradient(circle at 20% 80%, rgba(156,99,156,0.10), transparent 50%)',
                }} />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">Send a Message</h3>
                  <p className="text-text-secondary mb-1">Fill out the form and I'll get back to you within 24 hours.</p>
                  <p className="text-sm text-primary font-medium mb-8">
                    Send something interesting - I might just offer you a virtual coffee.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div aria-live="polite" aria-atomic="true" className="sr-only">
                      {submitStatus === 'success' && 'Message sent successfully'}
                      {submitStatus === 'error' && 'Failed to send message. Please try again.'}
                      {isSubmitting && 'Sending message...'}
                    </div>

                    {/* Name */}
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-background-elevated border border-border text-text-primary placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'name' || formValues.name
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-text-tertiary'
                        } peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary`}
                      >
                        Your Name *
                      </label>
                      {errors.name && (
                        <p className="text-danger text-xs mt-1 ml-1 animate-pulse">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-background-elevated border border-border text-text-primary placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Your Email"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'email' || formValues.email
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-text-tertiary'
                        } peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary`}
                      >
                        Your Email *
                      </label>
                      {errors.email && (
                        <p className="text-danger text-xs mt-1 ml-1 animate-pulse">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <input
                        id="subject"
                        type="text"
                        {...register('subject')}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-background-elevated border border-border text-text-primary placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="Subject"
                      />
                      <label
                        htmlFor="subject"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'subject' || formValues.subject
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-text-tertiary'
                        } peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary`}
                      >
                        Subject *
                      </label>
                      {errors.subject && (
                        <p className="text-danger text-xs mt-1 ml-1 animate-pulse">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={5}
                        {...register('message')}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-background-elevated border border-border text-text-primary placeholder-transparent focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                        placeholder="Message"
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'message' || formValues.message
                            ? 'top-2 text-xs text-primary'
                            : 'top-4 text-base text-text-tertiary'
                        } peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary`}
                      >
                        Your Message *
                      </label>
                      {errors.message && (
                        <p className="text-danger text-xs mt-1 ml-1 animate-pulse">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="glass"
                      size="lg"
                      icon={FiSend}
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent flex items-center gap-3"
                      >
                        <FiCheck className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">Message sent! I'll get back to you soon.</p>
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-danger/10 border border-danger/20 text-danger"
                      >
                        <p className="text-sm">Failed to send. Please try again or email me directly at gp627853@gmail.com</p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
