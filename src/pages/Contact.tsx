import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowLeft, MessageCircle, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import Logo from '../components/Logo';
import { submitForm, SubmitStatus } from '../api/submitForm';

// ─── Helpers ──────────────────────────────────────────────────
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── Status Banner ────────────────────────────────────────────
const StatusBanner = ({ status, message }: { status: SubmitStatus; message: string }) => {
  if (status !== 'success' && status !== 'error') return null;
  const isSuccess = status === 'success';
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
        isSuccess ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
      ) : (
        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
      )}
      <p className="leading-relaxed">{message}</p>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────
export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!workEmail.trim()) newErrors.workEmail = 'Email is required.';
    else if (!isValidEmail(workEmail)) newErrors.workEmail = 'Please enter a valid email address.';
    if (!company.trim()) newErrors.company = 'Company name is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field: string) => {
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined as unknown as string }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const result = await submitForm('/api/contact', {
        fullName,
        workEmail,
        company,
        projectType: projectType || undefined,
        details: details || undefined,
      });
      setStatus('success');
      setStatusMessage(result.message);
      setFullName(''); setWorkEmail(''); setCompany(''); setProjectType(''); setDetails('');
    } catch (err) {
      setStatus('error');
      setStatusMessage(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#f8fafc] font-sans text-[#0f172a]">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 md:p-8 max-w-[1400px] mx-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="h-[1.5rem] w-[1.5rem]" />
            <span className="font-bold text-2xl tracking-tighter group-hover:text-gray-600 transition-colors">ARCHCOS</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-[#334155] hover:text-[#0f172a] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
              Request an Executive Consultation
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-[#334155] leading-relaxed">
              Let's discuss the technical feasibility and timelines of your next commercial development.
            </motion.p>
          </motion.div>

          {/* Main Content: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Column: Smart Capture Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
            >
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Status Banner */}
                <AnimatePresence>
                  {(status === 'success' || status === 'error') && (
                    <StatusBanner status={status} message={statusMessage} />
                  )}
                </AnimatePresence>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#334155] mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={e => { setFullName(e.target.value); clearError('fullName'); }}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none transition-all bg-[#f8fafc] hover:bg-white disabled:opacity-60 ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    placeholder="e.g. John Doe"
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-[#334155] mb-2">Work Email *</label>
                  <input
                    type="email"
                    id="workEmail"
                    value={workEmail}
                    onChange={e => { setWorkEmail(e.target.value); clearError('workEmail'); }}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none transition-all bg-[#f8fafc] hover:bg-white disabled:opacity-60 ${errors.workEmail ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    placeholder="john@company.com"
                  />
                  {errors.workEmail && <p className="text-xs text-red-500 mt-1">{errors.workEmail}</p>}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#334155] mb-2">Company / Developer Name *</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={e => { setCompany(e.target.value); clearError('company'); }}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none transition-all bg-[#f8fafc] hover:bg-white disabled:opacity-60 ${errors.company ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    placeholder="e.g. Texas Development Group"
                  />
                  {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-[#334155] mb-2">Project Type *</label>
                  <div className="relative">
                    <select
                      id="projectType"
                      value={projectType}
                      onChange={e => setProjectType(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none transition-all bg-[#f8fafc] hover:bg-white appearance-none disabled:opacity-60"
                    >
                      <option value="">Select an option</option>
                      <option value="residential">Residential Houses</option>
                      <option value="commercial-rollout">Commercial Rollout</option>
                      <option value="mixed-use">Mixed-Use</option>
                      <option value="bim-3d">3D/BIM Visualization</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-[#334155] mb-2">Project details or time constraints</label>
                  <textarea
                    id="details"
                    rows={4}
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none transition-all bg-[#f8fafc] hover:bg-white resize-y disabled:opacity-60"
                    placeholder="Tell us briefly about the scale, location, and key dates..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || status === 'success'}
                    className="w-full bg-[#2563eb] hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex justify-center items-center gap-2 uppercase tracking-widest text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Inquiry Sent!
                      </>
                    ) : (
                      'Submit Executive Inquiry'
                    )}
                  </button>
                  {status !== 'success' && (
                    <p className="text-xs text-slate-500 text-center mt-4 leading-relaxed">
                      Our technical team will review your project parameters and contact you within 24 business hours.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Right Column: Direct Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center space-y-10 lg:pl-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-8">Direct Contact Information</h3>
                <div className="space-y-8">

                  {/* Emails */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-[#2563eb] shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="w-full">
                      <h4 className="text-sm font-semibold text-[#0f172a] mb-1 uppercase tracking-wider">Emails</h4>
                      <a href="mailto:adrianasarro@archcos.com" className="block text-[#334155] hover:text-[#2563eb] transition-colors">adrianasarro@archcos.com</a>
                      <a href="mailto:rgaytan@archcos.com" className="block text-[#334155] hover:text-[#2563eb] transition-colors mb-4">rgaytan@archcos.com</a>
                      <a
                        href="mailto:adrianasarro@archcos.com,rgaytan@archcos.com"
                        className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-md border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors duration-300 text-sm font-medium"
                      >
                        <Mail className="w-4 h-4" />
                        Contact via email
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-[#2563eb] shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0f172a] mb-1 uppercase tracking-wider">Phone</h4>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+12817718684" className="text-[#334155] hover:text-[#2563eb] transition-colors">+1 281 771 8684</a>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <a
                            href="tel:+12817718684"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors duration-300 text-sm font-medium"
                          >
                            <Phone className="w-4 h-4" />
                            Call Now
                          </a>
                          <a
                            href="https://wa.me/12817718684?text=Hola.%20Me%20gustar%C3%ADa%20solicitar%20una%20consulta%20ejecutiva%20con%20el%20equipo%20de%20ARCHCOS%20para%20discutir%20la%20viabilidad%20de%20mi%20pr%C3%B3ximo%20proyecto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-white transition-colors duration-300 text-sm font-medium"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-[#2563eb] shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0f172a] mb-1 uppercase tracking-wider">Hours</h4>
                      <p className="text-[#334155]">Monday - Friday: 9:00 am - 5:00 pm (CST)</p>
                      <p className="text-[#334155]">Saturday & Sunday: Closed</p>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[0.9rem] text-slate-500 leading-snug">
                            <span className="font-medium text-slate-600">US: Houston | </span>
                            The Woodlands, Texas 77382
                          </p>
                          <a href="https://maps.app.goo.gl/n6yG63mUiSXCAW2S9" target="_blank" rel="noopener noreferrer" className="text-xs text-[#2563eb] hover:underline mt-0.5 inline-block">
                            View on map
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[0.9rem] text-slate-500 leading-snug">
                            <span className="font-medium text-slate-600">MX: Durango | </span>
                            C. Cap. Francisco de Ibarra 1522, Durango, Dgo.
                          </p>
                          <a href="https://maps.app.goo.gl/1YJM2TUadBxVBwrZ6" target="_blank" rel="noopener noreferrer" className="text-xs text-[#2563eb] hover:underline mt-0.5 inline-block">
                            View on map
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
