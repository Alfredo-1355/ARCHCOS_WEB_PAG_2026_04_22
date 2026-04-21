import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, Check, MessageCircle, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import PageWrapper from '../components/PageWrapper';
import { submitForm, SubmitStatus } from '../api/submitForm';

// ─── Types & Constants ────────────────────────────────────────
interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  location: string;
  budget: string;
}

const projectTypes = [
  { id: 'residential', label: 'Residential (Luxury)' },
  { id: 'commercial', label: 'Commercial/Retail' },
  { id: 'multi-family', label: 'Multi-family Development' },
  { id: 'computational', label: 'Computational/BIM Specialized' },
];

const timelines = [
  { id: 'immediate', label: 'Immediate' },
  { id: '3-6-months', label: '3-6 Months' },
  { id: '+6-months', label: '+6 Months' },
];

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── Sub-components ───────────────────────────────────────────
const StatusBanner = ({ status, message }: { status: SubmitStatus; message: string }) => {
  if (status !== 'success' && status !== 'error') return null;
  const isSuccess = status === 'success';
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
        isSuccess
          ? 'bg-green-50 border-green-200 text-green-800'
          : 'bg-red-50 border-red-200 text-red-800'
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
export default function Inquiry() {
  const [form, setForm] = useState<InquiryForm>({ name: '', email: '', phone: '', location: '', budget: '' });
  const [projectType, setProjectType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Partial<InquiryForm>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const updateField = (field: keyof InquiryForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errors: Partial<InquiryForm> = {};
    if (!form.name.trim()) errors.name = 'Name & Company is required.';
    if (!form.email.trim()) errors.email = 'Email is required.';
    else if (!isValidEmail(form.email)) errors.email = 'Please enter a valid email address.';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      const selectedType = projectTypes.find(p => p.id === projectType)?.label;
      const selectedTimeline = timelines.find(t => t.id === timeline)?.label;

      const result = await submitForm('/api/inquiry', {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        projectType: selectedType,
        location: form.location || undefined,
        budget: form.budget || undefined,
        timeline: selectedTimeline,
      });

      setStatus('success');
      setStatusMessage(result.message);
      // Reset form
      setForm({ name: '', email: '', phone: '', location: '', budget: '' });
      setProjectType('');
      setTimeline('');
    } catch (err) {
      setStatus('error');
      setStatusMessage(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a] relative overflow-hidden selection:bg-[#8CC63F]/30">
        {/* High-tech Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(140, 198, 63, 0.08)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <motion.path
              d="M -100 200 L 400 600 L 800 300 L 1200 700 L 1600 200"
              stroke="rgba(140, 198, 63, 0.12)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M 1600 800 L 1200 400 L 800 700 L 400 300 L -100 600"
              stroke="rgba(59, 153, 212, 0.08)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </div>

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-8 max-w-[1400px] mx-auto w-full">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="h-[1.5rem] w-[1.5rem]" white={false} />
            <span className="font-bold text-2xl tracking-tighter text-[#1a1a1a] group-hover:text-[#3B99D4] transition-colors">ARCHCOS</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
            <Link to="/" className="text-gray-500 hover:text-[#1a1a1a] transition-colors">Home</Link>
            <Link to="/portfolio" className="text-gray-500 hover:text-[#1a1a1a] transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-gray-500 hover:text-[#1a1a1a] transition-colors">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1a1a1a]"
            >
              INITIATE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] to-[#3B99D4]">VISION</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Specialized architectural design and computational solutions for Houston, TX and beyond. Tell us about your project.
            </motion.p>
          </div>

          {/* Lead Qualification Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-10">
              {/* Status Banner */}
              <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                  <StatusBanner status={status} message={statusMessage} />
                )}
              </AnimatePresence>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Name & Company *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => updateField('name', e.target.value)}
                    required
                    placeholder="John Doe | Developer Inc."
                    disabled={isSubmitting}
                    className={`w-full bg-gray-50 border rounded-xl px-6 py-4 outline-none focus:border-[#3B99D4]/50 focus:ring-4 focus:ring-[#3B99D4]/10 transition-all placeholder:text-gray-400 text-[#1a1a1a] disabled:opacity-60 ${validationErrors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                  />
                  {validationErrors.name && <p className="text-xs text-red-500 ml-1 mt-1">{validationErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Preferred Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => updateField('email', e.target.value)}
                    required
                    placeholder="email@example.com"
                    disabled={isSubmitting}
                    className={`w-full bg-gray-50 border rounded-xl px-6 py-4 outline-none focus:border-[#3B99D4]/50 focus:ring-4 focus:ring-[#3B99D4]/10 transition-all placeholder:text-gray-400 text-[#1a1a1a] disabled:opacity-60 ${validationErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                  />
                  {validationErrors.email && <p className="text-xs text-red-500 ml-1 mt-1">{validationErrors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => updateField('phone', e.target.value)}
                  placeholder="+1 (281) 000-0000"
                  disabled={isSubmitting}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-[#3B99D4]/50 focus:ring-4 focus:ring-[#3B99D4]/10 transition-all placeholder:text-gray-400 text-[#1a1a1a] disabled:opacity-60"
                />
              </div>

              {/* Row 3: Project Type */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Project Type</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`relative flex items-center justify-between p-6 rounded-2xl border cursor-pointer transition-all duration-300 group ${
                        projectType === type.id
                          ? 'bg-[#8CC63F]/5 border-[#8CC63F]/50 shadow-[0_0_20px_rgba(140,198,63,0.05)]'
                          : 'bg-gray-50/50 border-gray-100 hover:border-gray-200'
                      } ${isSubmitting ? 'pointer-events-none opacity-60' : ''}`}
                    >
                      <input
                        type="radio"
                        name="project_type"
                        value={type.label}
                        className="hidden"
                        onChange={() => setProjectType(type.id)}
                        checked={projectType === type.id}
                      />
                      <span className={`font-medium transition-colors ${projectType === type.id ? 'text-[#8CC63F]' : 'text-gray-700'}`}>
                        {type.label}
                      </span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        projectType === type.id ? 'border-[#8CC63F] bg-[#8CC63F]' : 'border-gray-200 group-hover:border-gray-300'
                      }`}>
                        {projectType === type.id && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Location & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Project Location (City/State)</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={e => updateField('location', e.target.value)}
                    placeholder="Houston, TX"
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-[#3B99D4]/50 focus:ring-4 focus:ring-[#3B99D4]/10 transition-all placeholder:text-gray-400 text-[#1a1a1a] disabled:opacity-60"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Estimated Budget or Sq. Ft. (Optional)</label>
                  <input
                    type="text"
                    value={form.budget}
                    onChange={e => updateField('budget', e.target.value)}
                    placeholder="$2M+ or 5,000 sq ft"
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-[#3B99D4]/50 focus:ring-4 focus:ring-[#3B99D4]/10 transition-all placeholder:text-gray-400 text-[#1a1a1a] disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 5: Timeline */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 ml-1">Estimated Timeline</label>
                <div className="grid grid-cols-3 gap-4">
                  {timelines.map((t) => (
                    <label
                      key={t.id}
                      className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all duration-300 text-sm font-bold tracking-wider ${
                        timeline === t.id
                          ? 'bg-[#3B99D4]/5 border-[#3B99D4]/50 text-[#3B99D4] shadow-[0_0_15px_rgba(59,153,212,0.05)]'
                          : 'bg-gray-50/50 border-gray-100 text-gray-400 hover:text-gray-600 hover:border-gray-200'
                      } ${isSubmitting ? 'pointer-events-none opacity-60' : ''}`}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={t.label}
                        className="hidden"
                        onChange={() => setTimeline(t.id)}
                        checked={timeline === t.id}
                      />
                      {t.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || status === 'success'}
                className="w-full bg-[#3B99D4] hover:bg-[#2d88c4] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg uppercase tracking-widest text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Inquiry Sent!
                  </>
                ) : (
                  <>
                    Secure Executive Review
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-16 px-8 border-t border-gray-100 bg-gray-50/50 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <Logo className="h-[1.5rem] w-[1.5rem]" white={false} />
              <span className="font-bold text-xl tracking-tighter text-[#1a1a1a] group-hover:text-[#3B99D4] transition-colors">ARCHCOS</span>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mb-12">
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Address</h4>
                <p className="text-sm text-gray-600">PO Box 7801 The Woodlands, TX 77387</p>
              </div>
              <div className="space-y-3 flex flex-col items-center">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Phone</h4>
                <p className="text-sm text-gray-600">281 771 8684</p>
                <div className="flex gap-2">
                  <a
                    href="tel:+12817718684"
                    className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[#3B99D4] hover:border-[#3B99D4] transition-all"
                    title="Call Now"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/12817718684?text=Hola.%20Me%20gustar%C3%ADa%20solicitar%20una%20consulta%20ejecutiva%20con%20el%20equipo%20de%20ARCHCOS%20para%20discutir%20la%20viabilidad%20de%20mi%20pr%C3%B3ximo%20proyecto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Emails</h4>
                <div className="text-sm text-gray-600 flex flex-col gap-1">
                  <a href="mailto:adrianasarro@archcos.com" className="hover:text-[#3B99D4] transition-colors">adrianasarro@archcos.com</a>
                  <a href="mailto:rgaytan@archcos.com" className="hover:text-[#3B99D4] transition-colors">rgaytan@archcos.com</a>
                </div>
              </div>
            </div>

            <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
              © 2024 ARCHCOS Architectural Solutions
            </div>
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
}
