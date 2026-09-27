import React, { useState } from 'react';
import { 
  Package, 
  Trash2, 
  Sparkles, 
  Gift, 
  Share2, 
  Plus
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import type { BoxItem, Product } from '../types';

interface FamilyBoxBuilderProps {
  boxItems: BoxItem[];
  onAddToBox: (product: Product, weight: '200g' | '400g' | '1kg') => void;
  onRemoveFromBox: (productId: string, weight: string) => void;
  onClearBox: () => void;
}

export const FamilyBoxBuilder: React.FC<FamilyBoxBuilderProps> = ({
  boxItems,
  onAddToBox,
  onRemoveFromBox,
  onClearBox,
}) => {
  const [boxCapacity, setBoxCapacity] = useState<4 | 6>(4);
  const [includeGiftPackaging, setIncludeGiftPackaging] = useState<boolean>(true);
  const [customNote, setCustomNote] = useState<string>('From our family to yours with love & crunchy warmth!');

  const totalItemsCount = boxItems.reduce((acc, item) => acc + item.quantity, 0);

  // Total price calculation
  const totalPrice = boxItems.reduce((acc, item) => {
    return acc + (item.product.prices[item.weight] * item.quantity);
  }, 0);

  // Total weight in grams estimation
  const totalWeightGrams = boxItems.reduce((acc, item) => {
    const wtNum = item.weight === '1kg' ? 1000 : parseInt(item.weight.replace('g', ''), 10);
    return acc + (wtNum * item.quantity);
  }, 0);

  // Build WhatsApp pre-filled message
  const handleWhatsAppOrder = () => {
    if (boxItems.length === 0) {
      alert('Please add at least 1 snack to your box before ordering!');
      return;
    }

    const itemsSummary = boxItems
      .map((item, i) => `${i + 1}. ${item.product.name} (${item.weight}) x ${item.quantity} = ₹${item.product.prices[item.weight] * item.quantity}`)
      .join('%0A');

    const message = `*Namaste Purohit Namkeen!* 🙏%0A%0AI would like to order a *Custom Family Snack Box* (${boxCapacity}-Pack Assortment):%0A%0A${itemsSummary}%0A%0A*Total Weight:* ${(totalWeightGrams / 1000).toFixed(1)} kg%0A*Estimated Total:* ₹${totalPrice}%0A*Festive Gift Wrap:* ${includeGiftPackaging ? 'Yes' : 'No'}%0A*Note:* ${encodeURIComponent(customNote)}%0A%0APlease let me know the payment and delivery confirmation!`;

    window.open(`https://wa.me/919826012345?text=${message}`, '_blank');
  };

  return (
    <section id="family-box" style={{
      padding: '72px 0',
      background: '#ffffff',
      borderBottom: '1px solid #eeddc7',
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#fff7ed',
            border: '1px solid #fed7aa',
            marginBottom: '14px'
          }}>
            <Gift size={16} style={{ color: '#c2410c' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9a3412', textTransform: 'uppercase' }}>
              Unique Feature • Interactive Box Customizer
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#1c1917', marginBottom: '12px' }}>
            Build Your Desi Family Snack Box
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#57534e' }}>
            Customize your own personalized assortment of Namkeen! Pick favourite snacks for every family member in a beautifully packaged festive hamper box.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
          
          {/* Left Column: Visual Hamper Box Tray */}
          <div style={{
            background: 'linear-gradient(135deg, #fffbeb 0%, #fff7ed 100%)',
            borderRadius: '24px',
            padding: '28px',
            border: '2px solid #fed7aa',
            boxShadow: '0 12px 30px rgba(67, 30, 8, 0.08)',
          }}>
            {/* Box Header & Capacity Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#9a3412', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Package size={22} style={{ color: '#c2410c' }} />
                  <span>My Family Assortment</span>
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#78716c' }}>
                  {totalItemsCount} of {boxCapacity} slots packed
                </p>
              </div>

              {/* Box Size Toggle */}
              <div style={{ display: 'flex', background: '#ffffff', padding: '4px', borderRadius: '12px', border: '1px solid #eeddc7' }}>
                <button
                  type="button"
                  onClick={() => setBoxCapacity(4)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    background: boxCapacity === 4 ? '#c2410c' : 'transparent',
                    color: boxCapacity === 4 ? '#ffffff' : '#57534e',
                  }}
                >
                  4-Pack Box
                </button>
                <button
                  type="button"
                  onClick={() => setBoxCapacity(6)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    background: boxCapacity === 6 ? '#c2410c' : 'transparent',
                    color: boxCapacity === 6 ? '#ffffff' : '#57534e',
                  }}
                >
                  6-Pack Royal
                </button>
              </div>
            </div>

            {/* Visual Box Slots Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: boxCapacity === 4 ? '1fr 1fr' : '1fr 1fr 1fr',
              gap: '14px',
              marginBottom: '24px'
            }}>
              {Array.from({ length: boxCapacity }).map((_, index) => {
                const item = boxItems[index];

                return (
                  <div
                    key={index}
                    style={{
                      background: item ? '#ffffff' : 'rgba(255,255,255,0.6)',
                      borderRadius: '16px',
                      border: item ? '1.5px solid #fdba74' : '2px dashed #eeddc7',
                      padding: '14px',
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      boxShadow: item ? '0 4px 12px rgba(194, 65, 12, 0.08)' : 'none',
                    }}
                  >
                    {item ? (
                      <>
                        <button
                          type="button"
                          onClick={() => onRemoveFromBox(item.product.id, item.weight)}
                          style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            color: '#991b1b',
                            background: '#fee2e2',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          title="Remove from Box"
                        >
                          <Trash2 size={13} />
                        </button>

                        <div style={{ width: '48px', height: '48px', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
                          <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1c1917', lineHeight: 1.2, marginBottom: '2px' }}>
                          {item.product.name}
                        </h4>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#c2410c' }}>
                          {item.weight} • ₹{item.product.prices[item.weight]}
                        </span>
                      </>
                    ) : (
                      <div style={{ color: '#a8a29e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Plus size={18} style={{ color: '#fb923c' }} />
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>Slot #{index + 1} Empty</span>
                        <span style={{ fontSize: '0.7rem' }}>Pick a snack from right</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Extras: Festive Packaging & Custom Gift Note */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '16px',
              border: '1px solid #fde68a',
              marginBottom: '20px',
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginBottom: '10px' }}>
                <input
                  type="checkbox"
                  checked={includeGiftPackaging}
                  onChange={(e) => setIncludeGiftPackaging(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#c2410c' }}
                />
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1c1917' }}>
                  🎁 Free Traditional Festive Box Packaging with Golden Ribbon
                </span>
              </label>

              {includeGiftPackaging && (
                <div>
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Enter personalized greeting message on box..."
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #eeddc7',
                      fontSize: '0.82rem',
                    }}
                  />
                </div>
              )}
            </div>

            {/* Live Pricing & Weight Summary */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 0',
              borderTop: '1px solid #fed7aa',
              borderBottom: '1px solid #fed7aa',
              marginBottom: '20px'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#78716c' }}>Total Box Weight</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1c1917' }}>
                  {(totalWeightGrams / 1000).toFixed(1)} kg
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.8rem', color: '#78716c' }}>Estimated Box Price</span>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#9a3412' }}>
                  ₹{totalPrice}
                </div>
              </div>
            </div>

            {/* Order / WhatsApp CTA */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="btn-gold"
                style={{ flex: 1, padding: '14px', borderRadius: '14px', fontSize: '0.95rem' }}
              >
                <Share2 size={18} />
                <span>Confirm & Order on WhatsApp</span>
              </button>

              {boxItems.length > 0 && (
                <button
                  type="button"
                  onClick={onClearBox}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #eeddc7',
                    background: '#ffffff',
                    color: '#78716c',
                    fontSize: '0.82rem'
                  }}
                  title="Clear All Slots"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Quick Add Snacks Grid */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#1c1917' }}>
                Pick Snacks for Your Box:
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#78716c' }}>
                Click + to fill a slot
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '14px',
              maxHeight: '520px',
              overflowY: 'auto',
              paddingRight: '6px'
            }}>
              {PRODUCTS.map((product) => {
                const isAlreadyAdded = boxItems.some((item) => item.product.id === product.id);

                return (
                  <div
                    key={product.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: '14px',
                      border: '1px solid #eeddc7',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    }}
                  >
                    <div style={{ width: '56px', height: '56px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1c1917', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.name}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: '#78716c' }}>
                        ₹{product.prices['400g']} / 400g
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                        <span style={{ fontSize: '0.68rem', color: '#ea580c', fontWeight: 600 }}>
                          {'🌶️'.repeat(product.spiceLevel)}
                        </span>
                        {isAlreadyAdded && (
                          <span style={{ fontSize: '0.68rem', color: '#15803d', fontWeight: 700, background: '#dcfce7', padding: '1px 6px', borderRadius: '6px' }}>
                            In Box
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onAddToBox(product, '400g')}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#fff7ed',
                        border: '1.5px solid #fdba74',
                        color: '#c2410c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      title="Add 400g pack to box"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: '16px',
              padding: '12px 16px',
              background: '#fef3c7',
              borderRadius: '12px',
              border: '1px solid #fde68a',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.82rem',
              color: '#92400e',
            }}>
              <Sparkles size={16} style={{ flexShrink: 0 }} />
              <span>
                <strong>Tip:</strong> An ideal family box has 1 Savoury Sev, 1 Tangy Mixture, 1 Crispy Mathri, and 1 Healthy Roasted Snack!
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
