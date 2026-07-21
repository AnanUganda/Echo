import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-text-primary mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Whether you have questions about an upcoming trip, want to partner with us, or just want to learn more, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background text-text-primary p-10 md:p-16 rounded-3xl"
          >
            <h2 className="text-3xl font-serif text-text-primary mb-10">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-text-secondary uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href="mailto:hello@echotripskenya.org" className="text-lg text-text-primary hover:text-text-primary transition-colors">
                    hello@echotripskenya.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-text-secondary uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="text-lg text-text-primary">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-text-secondary uppercase tracking-widest font-bold mb-1">Office</p>
                  <p className="text-lg text-text-primary leading-relaxed">
                    123 Ministry Lane<br />
                    Suite 400<br />
                    Nashville, TN 37203
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-surface rounded-3xl shadow-sm border border-earth-500/10">
                <div className="w-16 h-16 bg-text-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-text-primary mb-4">Message Sent</h3>
                <p className="text-text-secondary">Thank you for reaching out. We will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-text-primary font-medium hover:text-text-primary transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface p-10 rounded-3xl shadow-sm border border-earth-500/10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-text-primary">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-all focus:-translate-y-0.5 focus:shadow-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-text-primary">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-all focus:-translate-y-0.5 focus:shadow-md"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-primary">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-all focus:-translate-y-0.5 focus:shadow-md"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject</label>
                  <select 
                    id="subject"
                    className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-all focus:-translate-y-0.5 focus:shadow-md"
                  >
                    <option>General Inquiry</option>
                    <option>Trip Information</option>
                    <option>Church Partnership</option>
                    <option>Donations</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-all focus:-translate-y-0.5 focus:shadow-md resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="mt-4 w-full py-4 bg-text-primary text-primary rounded-xl font-medium text-lg hover:bg-surface transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
