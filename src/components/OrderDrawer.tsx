import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, Truck, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../constants/images';

export type KitTierId = 'basic' | 'value' | 'premium';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: KitTierId;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  initialTier = 'basic',
}) => {
  const [selectedTier, setSelectedTier] = useState<KitTierId>(initialTier);
  const [quantity, setQuantity] = useState(1);
  const [seedCategory, setSeedCategory] = useState<'flower' | 'herb' | 'vegetable'>('herb');
  const [selectedSeed, setSelectedSeed] = useState('Basil');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTier) {
      setSelectedTier(initialTier);
    }
  }, [initialTier]);

  if (!isOpen) return null;

  const kitOptions = {
    basic: {
      name: 'Basic Eco Kit',
      price: 49,
      pieces: '3 PIECES',
      summary: '1 Seed Pencil + 1 Eco Eraser + 1 Plantable Bookmark',
      tagColor: 'bg-[#D6EADA] text-[#143E23]',
    },
    value: {
      name: 'Value Eco Kit',
      price: 99,
      pieces: '6 PIECES',
      summary: '2 Seed Pencils + 2 Eco Erasers + 2 Plantable Bookmarks',
      tagColor: 'bg-[#F2D7D5] text-[#5C2321]',
    },
    premium: {
      name: 'Premium Eco Kit',
      price: 149,
      pieces: '9 PIECES',
      summary: '3 Seed Pencils + 3 Eco Erasers + 3 Plantable Bookmarks',
      tagColor: 'bg-[#D3E1F4] text-[#1A375F]',
    },
  };

  const seedOptions = {
    flower: { label: 'Flower Seeds (🌻)', seeds: ['Marigold', 'Sunflower'] },
    herb: { label: 'Herb Seeds (🌿)', seeds: ['Basil', 'Coriander'] },
    vegetable: { label: 'Vegetable Seeds (🥕)', seeds: ['Tomato', 'Spinach'] },
  };

  const activeKit = kitOptions[selectedTier];
  const unitPrice = activeKit.price;
  const subtotal = quantity * unitPrice;
  const shipping = subtotal >= 149 ? 0 : 35;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetOrder = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-[#E3ECE4] bg-white flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2E7D47]" />
            <h3 className="text-base font-bold text-[#142E22] font-display">
              Order EcoWrite Kit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#59655F] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#EBF2EC] text-[#2E7D47] mx-auto flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#142E22] mb-2 font-display">
                Order Simulation Confirmed!
              </h4>
              <p className="text-xs text-[#59655F] max-w-xs mx-auto mb-6">
                Thank you, <span className="font-semibold text-[#142E22]">{customerName || 'Friend'}</span>. Your <span className="font-semibold text-[#2E7D47]">{activeKit.name}</span> order request is recorded.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E3ECE4] text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#59655F]">Kit Selection:</span>
                  <span className="font-bold text-[#142E22]">{activeKit.name} ({activeKit.pieces})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#59655F]">Quantity:</span>
                  <span className="font-bold text-[#142E22]">{quantity} Kit(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#59655F]">Custom Seeds:</span>
                  <span className="font-bold text-[#2E7D47]">{selectedSeed} ({seedOptions[seedCategory].label})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#59655F]">Total Estimated:</span>
                  <span className="font-bold text-[#142E22] tabular-nums">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#59655F]">Packaging:</span>
                  <span className="font-semibold text-[#8B6F55]">100% Recyclable Kraft Box</span>
                </div>
              </div>

              <button
                onClick={resetOrder}
                className="w-full py-3 bg-[#142E22] text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Kit Tier (Basic ₹49 / Value ₹99 / Premium ₹149) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#142E22] mb-2">
                  1. Choose Kit Option:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['basic', 'value', 'premium'] as KitTierId[]).map((tierKey) => {
                    const t = kitOptions[tierKey];
                    const isSelected = selectedTier === tierKey;
                    return (
                      <button
                        key={tierKey}
                        type="button"
                        onClick={() => setSelectedTier(tierKey)}
                        className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white border-[#142E22] shadow-md ring-1 ring-[#142E22]'
                            : 'bg-white/80 border-[#E5DFD7] hover:border-[#CADACD]'
                        }`}
                      >
                        <div>
                          <span className="text-lg font-black text-[#142E22] tabular-nums font-display block">
                            ₹{t.price}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4A5B52]">
                            {t.pieces}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold px-1 py-0.5 rounded mt-2 truncate w-full ${t.tagColor}`}>
                          {t.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2.5 p-3 rounded-xl bg-white border border-[#E3ECE4] text-xs">
                  <div className="flex items-center justify-between font-bold text-[#142E22] mb-0.5">
                    <span>{activeKit.name}</span>
                    <span className="text-[#2E7D47] font-mono">₹{activeKit.price}</span>
                  </div>
                  <p className="text-[11px] text-[#59655F]">
                    {activeKit.summary}
                  </p>
                </div>
              </div>

              {/* Step 2: Customisable Seeds (Flower / Herb / Vegetable) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#142E22] mb-2">
                  2. Customise Your Seeds (Your Choice):
                </label>
                {/* Seed Category Switcher */}
                <div className="grid grid-cols-3 gap-1.5 mb-2.5 bg-white p-1 rounded-xl border border-[#D5E5D8]">
                  {(['herb', 'flower', 'vegetable'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSeedCategory(cat);
                        setSelectedSeed(seedOptions[cat].seeds[0]);
                      }}
                      className={`py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all cursor-pointer truncate ${
                        seedCategory === cat
                          ? 'bg-[#142E22] text-white'
                          : 'text-[#4A5B52] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {cat === 'herb' ? '🌿 Herb' : cat === 'flower' ? '🌻 Flower' : '🥕 Veg'}
                    </button>
                  ))}
                </div>

                {/* Specific Seed Buttons */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {seedOptions[seedCategory].seeds.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSeed(s)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer font-bold ${
                        selectedSeed === s
                          ? 'bg-[#EBF2EC] border-[#2E7D47] text-[#142E22] shadow-2xs'
                          : 'bg-white border-[#E8E4DC] text-[#59655F] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      ✓ {s} Seeds
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#142E22] mb-2">
                  3. Kit Quantity:
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#D5E5D8] rounded-xl bg-white p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center font-bold text-[#142E22] hover:bg-[#FAF8F5] rounded-lg cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#142E22] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center font-bold text-[#142E22] hover:bg-[#FAF8F5] rounded-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  {subtotal >= 149 ? (
                    <span className="text-xs text-[#2E7D47] font-semibold bg-[#EBF2EC] px-2.5 py-1 rounded-md">
                      Free delivery applied!
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#8B6F55]">
                      Add ₹{149 - subtotal} more for free delivery
                    </span>
                  )}
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#142E22]">
                  4. Shipping Details:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name / Student Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
                />
                <input
                  type="text"
                  required
                  placeholder="City & PIN Code (India)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl bg-white border border-[#D5E5D8] focus:border-[#2E7D47] focus:outline-hidden"
                />
              </div>

              {/* Price Breakdown */}
              <div className="p-4 rounded-xl bg-white border border-[#E3ECE4] text-xs space-y-1.5">
                <div className="flex justify-between text-[#59655F]">
                  <span>Item Subtotal ({quantity} × ₹{unitPrice}):</span>
                  <span className="font-semibold text-[#142E22] tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#59655F]">
                  <span>Eco-Packaging Delivery:</span>
                  <span className="font-semibold text-[#142E22]">
                    {shipping === 0 ? 'FREE' : '₹35'}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#F0EBE3] flex justify-between font-bold text-sm text-[#142E22]">
                  <span>Total Payable:</span>
                  <span className="text-[#2E7D47] tabular-nums font-display">₹{total}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#142E22] hover:bg-[#1B382B] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>Confirm {activeKit.name} Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#8B6F55]">
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3" /> Plastic-Free Shipping
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Non-GMO Seeds
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
