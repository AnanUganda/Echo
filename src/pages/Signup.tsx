import { motion } from 'motion/react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { useState, useRef } from 'react';
import type { FormEvent } from 'react';

const TRIPS = [
  { id: 'april-2027', name: 'Kenya Mission Trip', date: 'April 16 - April 26, 2027', status: 'Open' },
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedTrip, setSelectedTrip] = useState('');
  
  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  
  const [church, setChurch] = useState('');
  const [reason, setReason] = useState('');
  const [experience, setExperience] = useState('');

  const [dob, setDob] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [parentsName, setParentsName] = useState('');
  const [photoName, setPhotoName] = useState('');
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.submit();
    }
    setStep(4);
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-text-primary mb-6"
          >
            Start Your Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Take the first step toward a transformative experience in Kenya. Fill out this interest form, and our team will guide you through the preparation process.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface rounded-3xl shadow-lg border border-earth-500/10 overflow-hidden"
        >
          {/* Progress Bar */}
          {step < 4 && (
            <div className="bg-background flex items-center justify-between px-10 py-6 border-b border-earth-500/10">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= num ? 'bg-text-primary text-primary' : 'bg-earth-500/20 text-text-secondary'
                  }`}>
                    {num}
                  </div>
                  <span className={`ml-3 text-sm font-medium hidden md:block ${
                    step >= num ? 'text-text-primary' : 'text-text-secondary'
                  }`}>
                    {num === 1 && 'Select Trip'}
                    {num === 2 && 'Personal Info'}
                    {num === 3 && 'Background'}
                  </span>
                  {num < 3 && (
                    <div className={`w-12 md:w-24 h-px mx-4 ${
                      step > num ? 'bg-text-primary' : 'bg-earth-500/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form Content */}
          <div className="p-10 md:p-16">
            {step === 1 && (
              <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-serif text-text-primary mb-8">Which trip are you interested in?</h2>
                <div className="space-y-4 mb-10">
                  {TRIPS.map((trip) => (
                    <label 
                      key={trip.id}
                      className={`block cursor-pointer p-6 rounded-2xl border-2 transition-all ${
                        selectedTrip === trip.id 
                          ? 'border-terracotta bg-text-primary/5' 
                          : 'border-earth-500/20 hover:border-terracotta/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <input 
                            type="radio" 
                            name="trip" 
                            value={trip.id}
                            checked={selectedTrip === trip.id}
                            onChange={(e) => setSelectedTrip(e.target.value)}
                            className="w-5 h-5 text-text-primary focus:ring-terracotta accent-terracotta"
                            required
                          />
                          <div>
                            <h3 className="font-medium text-text-primary text-lg">{trip.name}</h3>
                            <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                              <Calendar className="w-4 h-4" />
                              {trip.date}
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                          trip.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-ochre/20 text-text-primary'
                        }`}>
                          {trip.status}
                        </span>
                      </div>
                    </label>
                  ))}
                  <label 
                    className={`block cursor-pointer p-6 rounded-2xl border-2 transition-all ${
                      selectedTrip === 'undecided' 
                        ? 'border-terracotta bg-text-primary/5' 
                        : 'border-earth-500/20 hover:border-terracotta/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="trip" 
                        value="undecided"
                        checked={selectedTrip === 'undecided'}
                        onChange={(e) => setSelectedTrip(e.target.value)}
                        className="w-5 h-5 text-text-primary focus:ring-terracotta accent-terracotta"
                      />
                      <div>
                        <h3 className="font-medium text-text-primary text-lg">I'm not sure yet</h3>
                        <p className="text-text-secondary text-sm mt-1">I'd like to talk with someone to find the best fit.</p>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={!selectedTrip}
                    className="flex items-center gap-2 px-8 py-4 bg-text-primary text-primary rounded-xl font-medium hover:bg-surface hover:text-text-primary transition-all disabled:opacity-50"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleNext} className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-text-primary mb-2">Tell us about yourself</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">First Name</label>
                    <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">Last Name</label>
                    <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">WhatsApp Number</label>
                    <input type="tel" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">Date of Birth</label>
                  <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">Parents' Names</label>
                  <input type="text" required value={parentsName} onChange={(e) => setParentsName(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">A photo of yourself</label>
                  <input type="file" accept="image/*" required onChange={(e) => setPhotoName(e.target.files?.[0]?.name || '')} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-terracotta/10 file:text-terracotta hover:file:bg-terracotta/20" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">Address</label>
                  <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-sm font-medium text-text-primary">City</label>
                    <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">State</label>
                    <input type="text" required value={state} onChange={(e) => setState(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">ZIP</label>
                    <input type="text" required value={zip} onChange={(e) => setZip(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setStep(1)} className="px-8 py-4 text-text-secondary hover:text-text-primary font-medium transition-colors">
                    Back
                  </button>
                  <button type="submit" className="flex items-center gap-2 px-8 py-4 bg-text-primary text-primary rounded-xl font-medium hover:bg-surface hover:text-text-primary transition-all">
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={submitForm} className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col gap-6">
                <h2 className="text-2xl font-serif text-text-primary mb-2">Faith & Background</h2>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">Home Church</label>
                  <input type="text" required value={church} onChange={(e) => setChurch(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">Why do you want to join this trip?</label>
                  <textarea rows={4} required value={reason} onChange={(e) => setReason(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none resize-none"></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-primary">Do you have any previous missions or cross-cultural experience?</label>
                  <textarea rows={3} required value={experience} onChange={(e) => setExperience(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 mt-4 bg-background p-4 rounded-xl border border-earth-500/20">
                  <input 
                    type="checkbox" 
                    id="deposit"
                    required
                    className="mt-1 w-5 h-5 text-terracotta focus:ring-terracotta rounded border-earth-500/30 accent-terracotta cursor-pointer shrink-0"
                  />
                  <label htmlFor="deposit" className="text-sm text-text-secondary leading-relaxed cursor-pointer">
                    I understand that my application will only be processed upon receipt of a <strong>$50 deposit</strong>. This deposit is refundable if I am unable to attend and cancel the trip, but becomes non-refundable once I officially commit to the team.
                  </label>
                </div>

                <div className="flex justify-between mt-6">
                  <button type="button" onClick={() => setStep(2)} className="px-8 py-4 text-text-secondary hover:text-text-primary font-medium transition-colors">
                    Back
                  </button>
                  <button type="submit" className="flex items-center gap-2 px-8 py-4 bg-text-primary text-primary rounded-xl font-medium hover:bg-surface transition-all shadow-lg shadow-terracotta/20">
                    Submit Application
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-4xl font-serif text-text-primary mb-4">Application Received!</h2>
                <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  Thank you for taking this step of faith! We have received your information securely. <strong className="text-text-primary block mt-2 font-medium">Please note: Your application is only officially processed and confirmed once your $50 deposit is received.</strong>
                </p>
                <div className="flex flex-col gap-4 items-center justify-center">
                  <a 
                    href="https://buy.stripe.com/eVqcN56xp1oh1Ao6QRbfO06"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-10 py-5 bg-terracotta text-white rounded-xl font-medium hover:bg-ochre transition-all shadow-lg shadow-terracotta/20 text-lg"
                  >
                    Pay $50 Deposit Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button onClick={() => window.location.href = '/'} className="text-text-secondary font-medium hover:text-text-primary transition-colors mt-6">
                    Return to Home
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Hidden Form for Zoho CRM Integration */}
        <iframe name="zoho_iframe" id="zoho_iframe" style={{ display: 'none' }}></iframe>
        <form 
          ref={formRef}
          id="webform7506073000000612477"
          name="WebToLeads7506073000000612477"
          action="https://crm.zoho.com/crm/WebToLeadForm" 
          method="POST" 
          target="zoho_iframe" 
          className="hidden"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="xnQsjsdp" value="94d2aaaf008055fa774fe068b7d0b34570aedbeb6c00933c6b58f692466ff7e4" />
          <input type="hidden" name="zc_gad" value="" />
          <input type="hidden" name="xmIwtLD" value="f6dd369d03db9fafd137d28785b4c29adfe0ab0eacc537b38f410dba38ef8c4c1776208b4b7402e94ba9f20d830e5eaa" />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="https://openbrands.studio" />
          <input type="hidden" name="aG9uZXlwb3Q" value="" />
          
          <input type="hidden" name="Company" value={selectedTrip === 'undecided' ? 'Undecided' : TRIPS.find(t => t.id === selectedTrip)?.name || selectedTrip} />
          <input type="hidden" name="First Name" value={firstName} />
          <input type="hidden" name="Last Name" value={lastName} />
          <input type="hidden" name="Email" value={email} />
          <input type="hidden" name="Mobile" value={whatsapp} />
          <input type="hidden" name="Address - Country / Region" value="United States" />
          <input type="hidden" name="Address - City" value={city} />
          <input type="hidden" name="Address - Zip / Postal Code" value={zip} />
          <input type="hidden" name="Address - Street Address" value={address} />
          {/* Combine church, state, and reasons into the Description field since it's the only large text field mapped */}
          <input type="hidden" name="Description" value={`Date of Birth: ${dob}\nWhatsApp: ${whatsapp}\nParents' Name: ${parentsName}\nPhoto File Attached: ${photoName}\nState: ${state}\nChurch: ${church}\nReason: ${reason}\nExperience: ${experience}`} />
        </form>
        
      </div>
    </div>
  );
}
