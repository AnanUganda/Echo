import { motion } from 'motion/react';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';

const TRIPS = [
  { id: 'april-2027', name: 'Kenya Mission Trip', date: 'April 16 - April 26, 2027', status: 'Open' },
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedTrip, setSelectedTrip] = useState('april-2027');
  const [isPaid, setIsPaid] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

  // Check URL parameters for successful Stripe payment return
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const pid = params.get('payment_id') || params.get('session_id');

    if (status === 'success' || pid) {
      setIsPaid(true);
      if (pid) setPaymentId(pid);
      setStep(2); // Auto-advance to the application form
    }
  }, []);

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
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-text-primary mb-4"
          >
            {step === 1 ? 'Reserve Your Spot' : 'Complete Your Application'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            {step === 1 
              ? 'Secure your place on the April 2027 Kenya Mission Trip by paying the $50 deposit.' 
              : 'Your deposit is confirmed! Fill out your application below so our leadership team can review your information.'}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface rounded-3xl shadow-lg border border-earth-500/10 overflow-hidden"
        >
          {/* Payment Status Verified Banner */}
          {isPaid && step < 4 && (
            <div className="bg-green-500/10 border-b border-green-500/20 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-semibold text-green-800">
                  Payment Status: Deposit Paid ✓
                </span>
              </div>
              {paymentId && (
                <span className="text-xs text-green-700 font-mono bg-green-500/10 px-2.5 py-1 rounded-full">
                  Ref: {paymentId}
                </span>
              )}
            </div>
          )}

          {/* Step Indicator */}
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
                    {num === 1 && '1. Deposit Payment'}
                    {num === 2 && '2. Personal Info'}
                    {num === 3 && '3. Faith & Background'}
                  </span>
                  {num < 3 && (
                    <div className={`w-12 md:w-20 h-px mx-4 ${
                      step > num ? 'bg-text-primary' : 'bg-earth-500/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form Content */}
          <div className="p-10 md:p-16">
            {/* STEP 1: DEPOSIT PAYMENT (FIRST STEP IN FUNNEL) */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                <div className="bg-background p-6 rounded-2xl border border-earth-500/15">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-text-primary">{TRIPS[0].name}</h3>
                      <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                        <Calendar className="w-4 h-4 text-terracotta" />
                        {TRIPS[0].date}
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-green-100 text-green-700">
                      {TRIPS[0].status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed border-t border-earth-500/10 pt-4">
                    Join us for 10 days of community outreach, village ministry, local church fellowship, and a safari experience in Kenya.
                  </p>
                </div>

                {/* Financial Summary Box */}
                <div className="bg-terracotta/5 border border-terracotta/15 p-6 rounded-2xl space-y-3">
                  <h4 className="font-serif text-lg text-text-primary flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-terracotta" />
                    Deposit Requirement
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A <strong>$50 deposit</strong> is required today to reserve your spot on the team. Your payment unlocks the official application form immediately.
                  </p>
                  <ul className="text-xs text-text-secondary space-y-1.5 pt-2 border-t border-terracotta/10">
                    <li>• Total Trip Contribution: <strong>$1,500</strong></li>
                    <li>• Deposit Due Today: <strong>$50</strong></li>
                    <li>• Remaining Balance ($1,450): Due 3 months prior to departure</li>
                  </ul>
                </div>

                {/* Stripe Action Button */}
                <div className="flex flex-col items-center gap-4 pt-4">
                  <a
                    href="https://buy.stripe.com/test_depositlink" // REPLACE WITH ACTUAL STRIPE LINK
                    className="w-full py-5 bg-terracotta text-white rounded-xl font-medium text-lg hover:bg-ochre transition-all flex items-center justify-center gap-3 shadow-lg shadow-terracotta/20"
                  >
                    Pay $50 Deposit & Continue Application
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  {/* Testing / Manual Bypass Link */}
                  <button 
                    onClick={() => {
                      setIsPaid(true);
                      setStep(2);
                    }}
                    className="text-xs text-text-secondary hover:text-text-primary underline pt-2"
                  >
                    Already paid your deposit? Click here to complete application
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PERSONAL INFORMATION */}
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
                    <label className="text-sm font-medium text-text-primary">Phone Number</label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">WhatsApp Number</label>
                    <input type="tel" required value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-primary">Date of Birth</label>
                    <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="px-4 py-3 bg-background border border-earth-500/20 rounded-lg focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta outline-none" />
                  </div>
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

                <div className="flex justify-end mt-6">
                  <button type="submit" className="flex items-center gap-2 px-8 py-4 bg-text-primary text-primary rounded-xl font-medium hover:bg-surface hover:text-text-primary transition-all">
                    Continue to Background
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: FAITH & BACKGROUND */}
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

            {/* STEP 4: APPLICATION COMPLETED & CONFIRMED */}
            {step === 4 && (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-4xl font-serif text-text-primary mb-4">Application Submitted!</h2>
                <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  Thank you for taking this step of faith! Your $50 deposit and application details have been recorded. <strong className="text-text-primary block mt-2">Our team is reviewing your information and will contact you within 48 hours.</strong>
                </p>
                <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-text-primary text-primary rounded-xl font-medium hover:bg-surface transition-all">
                  Return to Home
                </button>
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
          <input type="hidden" name="Mobile" value={phone} />
          <input type="hidden" name="Address - Country / Region" value="United States" />
          <input type="hidden" name="Address - City" value={city} />
          <input type="hidden" name="Address - Zip / Postal Code" value={zip} />
          <input type="hidden" name="Address - Street Address" value={address} />
          {/* Combine payment ID, dob, whatsapp, church, etc. into Description */}
          <input type="hidden" name="Description" value={`[DEPOSIT PAID VIA STRIPE]\nStripe Reference ID: ${paymentId || 'Verified Deposit'}\nDate of Birth: ${dob}\nWhatsApp: ${whatsapp}\nParents' Name: ${parentsName}\nPhoto File Attached: ${photoName}\nState: ${state}\nChurch: ${church}\nReason: ${reason}\nExperience: ${experience}`} />
        </form>
        
      </div>
    </div>
  );
}
