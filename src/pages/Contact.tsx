import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

import { SectionHeading } from '../components/ui';
import { useSEO } from '../lib/useSEO';
import { submitForm } from '../lib/submitForm';

const inputClass =
  'px-4 h-12 bg-white border border-line rounded-lg text-ink placeholder:text-body/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/30 transition-all';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useSEO(
    'Contact ECHO Trips | Kenya Mission Trips',
    'Questions about a trip, church partnerships, or giving? Email or call the ECHO Trips team.',
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(Array.from(fd.entries(), ([k, v]) => [k, String(v)]));
    setFormStatus('submitting');
    try {
      await submitForm('contact', data);
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          /* TODO(copy): copy doc intro ends "reply within [X] days" — using the
             brief's fallback ending until the number is confirmed. */
          intro="Questions about a trip, partnering as a church, or giving? Send us a message and we'll get back to you soon."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-forest text-white p-8 md:p-12 rounded-[28px]"
          >
            <h2 className="font-serif text-3xl text-white mb-10">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-peach shrink-0 mt-1" />
                <div className="min-w-0">
                  <p className="text-[13px] text-white/60 uppercase tracking-[0.06em] font-semibold mb-1">Email</p>
                  <a href="mailto:projectechokenya@gmail.com" className="text-lg text-white hover:text-peach transition-colors break-words">
                    projectechokenya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-peach shrink-0 mt-1" />
                <div>
                  <p className="text-[13px] text-white/60 uppercase tracking-[0.06em] font-semibold mb-1">Phone</p>
                  <a href="tel:+14786624515" className="text-lg text-white hover:text-peach transition-colors">
                    +1 (478) 662-4515
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-panel rounded-[28px]">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-forest" />
                </div>
                <h3 className="font-serif text-2xl text-ink mb-4">Message Sent</h3>
                <p className="text-body">Thank you for reaching out. We will get back to you as soon as possible.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-clay font-medium hover:text-clay-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-panel p-8 md:p-10 rounded-[28px] flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-ink">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-ink">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink">Email Address</label>
                  <input type="email" id="email" name="email" required className={inputClass} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-ink">Subject</label>
                  <select id="subject" name="subject" className={inputClass}>
                    <option>General Inquiry</option>
                    <option>Trip Information</option>
                    <option>Church Partnership</option>
                    <option>Donations</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="px-4 py-3 bg-white border border-line rounded-lg text-ink placeholder:text-body/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/30 transition-all resize-none"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p className="text-sm text-red-600">
                    Something went wrong sending your message. Please email us at projectechokenya@gmail.com.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="mt-2 w-full h-12 bg-clay text-white rounded-lg font-medium text-[15px] hover:bg-clay-dark transition-all flex items-center justify-center gap-2 disabled:opacity-70"
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
