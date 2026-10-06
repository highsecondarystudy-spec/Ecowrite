import React, { useState } from 'react';
import { X, Check, Building2, School, Send } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'Schools',
}) => {
  const [partnerType, setPartnerType] = useState(defaultCategory);
  const [instName, setInstName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [estCount, setEstCount] = useState('100–500');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#DCE8DE] z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE3] mb-6">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-[#2E7D47]" />
            <h3 className="text-lg font-bold text-[#142E22]">
              Institutional & Partner Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#59655F] hover:bg-[#FAF8F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#EBF2EC] text-[#2E7D47] mx-auto flex items-center justify-center mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-[#142E22] mb-2">
              Partnership Request Received!
            </h4>
            <p className="text-xs text-[#59655F] max-w-sm mx-auto mb-6">
              Our campus outreach team will review your requirements for{' '}
              <span className="font-semibold text-[#142E22]">{instName || 'your institution'}</span> and connect with customized bulk pricing within 24 hours.
            </p>
            <button
              onClick={reset}
              className="py-2.5 px-6 rounded-xl bg-[#142E22] text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#142E22] mb-1.5">
                Organization / Partner Type:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {['Schools', 'Colleges', 'Companies / NGOs'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPartnerType(type)}
                    className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                      partnerType.toLowerCase().includes(type.toLowerCase().slice(0, 4))
                        ? 'bg-[#EBF2EC] border-[#2E7D47] font-bold text-[#142E22]'
                        : 'bg-white border-[#E8E4DC] text-[#59655F]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#142E22] mb-1">
                  Institution Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Greenwood International"
                  value={instName}
                  onChange={(e) => setInstName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#142E22] mb-1">
                  Contact Person & Title:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sharma, Principal"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#142E22] mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@school.edu.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#142E22] mb-1">
                  Estimated Kit Volume:
                </label>
                <select
                  value={estCount}
                  onChange={(e) => setEstCount(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden bg-white"
                >
                  <option value="50–100">50 – 100 Kits (Pilot / Event)</option>
                  <option value="100–500">100 – 500 Kits (Grade Batch)</option>
                  <option value="500–2000">500 – 2,000 Kits (Annual Supply)</option>
                  <option value="2000+">2,000+ Kits (District / Corporate)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#142E22] mb-1">
                Custom Requirements or Comments:
              </label>
              <textarea
                rows={3}
                placeholder="Custom logo laser engraving, preferred seed types, event dates..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#142E22] hover:bg-[#1B382B] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Institutional Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
