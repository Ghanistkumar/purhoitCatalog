import React, { useState, useMemo } from 'react';
import { Sparkles, Coffee, Users, HeartPulse, PartyPopper, CheckCircle2, Plus, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import type { Product } from '../types';

interface FlavorFinderQuizProps {
  onAddToBox: (product: Product, weight: '200g' | '400g' | '1kg') => void;
  onOpenProductModal: (product: Product) => void;
}

export const FlavorFinderQuiz: React.FC<FlavorFinderQuizProps> = ({
  onAddToBox,
  onOpenProductModal,
}) => {
  const [familyProfile, setFamilyProfile] = useState<'family' | 'tea-lovers' | 'health' | 'party'>('family');
  const [spiceLevel, setSpiceLevel] = useState<number>(3);
  const [craving, setCraving] = useState<'all' | 'tangy' | 'spicy' | 'crunchy' | 'roasted'>('all');

  // Filter recommendations based on quiz state
  const recommendedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Spice level match (within +/- 1 or exact)
      const spiceMatch = Math.abs(p.spiceLevel - spiceLevel) <= 1;

      // Profile match
      let profileMatch = true;
      if (familyProfile === 'health') {
        profileMatch = p.category === 'healthy-roasted' || p.isDietFriendly === true;
      } else if (familyProfile === 'tea-lovers') {
        profileMatch = p.tags.includes('Chai-Time') || p.tags.includes('Tea-Time') || p.category === 'sev-bhujia';
      } else if (familyProfile === 'party') {
        profileMatch = p.isFestiveSpecial === true || p.category === 'crisps-mathri' || p.isBestseller === true;
      }

      // Craving match
      let cravingMatch = true;
      if (craving === 'tangy') {
        cravingMatch = p.shortDesc.toLowerCase().includes('tangy') || p.shortDesc.toLowerCase().includes('sweet') || p.name.includes('Khatta');
      } else if (craving === 'spicy') {
        cravingMatch = p.spiceLevel >= 3;
      } else if (craving === 'roasted') {
        cravingMatch = p.category === 'healthy-roasted';
      }

      return spiceMatch && profileMatch && cravingMatch;
    }).slice(0, 3);
  }, [familyProfile, spiceLevel, craving]);

  // Fallback if specific combo gives 0 results
  const displayProducts = recommendedProducts.length > 0 ? recommendedProducts : PRODUCTS.slice(0, 3);

  return (
    <section id="flavor-finder" style={{
      padding: '72px 0',
      background: 'linear-gradient(180deg, #fff7eb 0%, #fef3c7 50%, #fffbf2 100%)',
      borderBottom: '1px solid #eeddc7'
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
            background: '#ffffff',
            border: '1px solid #fde68a',
            boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
            marginBottom: '14px'
          }}>
            <Sparkles size={16} style={{ color: '#c2410c' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9a3412', textTransform: 'uppercase' }}>
              Unique Feature • AI Desi Matchmaker
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#1c1917', marginBottom: '12px' }}>
            Interactive Flavor & Spice Finder
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#57534e' }}>
            Every Indian family has diverse tastebuds! Answer 3 simple questions and find the exact snacks to satisfy everyone from grandmothers to spice enthusiasts.
          </p>
        </div>

        {/* Interactive Selector Board */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 16px 36px rgba(67, 30, 8, 0.08)',
          border: '2px solid #f5dfc3',
          maxWidth: '980px',
          margin: '0 auto 40px auto'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            
            {/* Step 1: Who is Snacking? */}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                1. Who is eating at home?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                
                <button
                  type="button"
                  onClick={() => setFamilyProfile('family')}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    border: familyProfile === 'family' ? '2px solid #c2410c' : '1px solid #e7d5c0',
                    background: familyProfile === 'family' ? '#ffedd5' : '#fcfaf5',
                    color: familyProfile === 'family' ? '#9a3412' : '#57534e',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <Users size={18} style={{ color: '#c2410c' }} />
                  <span>Joint Family</span>
                  <small style={{ fontSize: '0.72rem', color: '#78716c', fontWeight: 400 }}>Kids & Elders balance</small>
                </button>

                <button
                  type="button"
                  onClick={() => setFamilyProfile('tea-lovers')}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    border: familyProfile === 'tea-lovers' ? '2px solid #c2410c' : '1px solid #e7d5c0',
                    background: familyProfile === 'tea-lovers' ? '#ffedd5' : '#fcfaf5',
                    color: familyProfile === 'tea-lovers' ? '#9a3412' : '#57534e',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <Coffee size={18} style={{ color: '#d97706' }} />
                  <span>Chai Fanatics</span>
                  <small style={{ fontSize: '0.72rem', color: '#78716c', fontWeight: 400 }}>Crisp evening tea snacks</small>
                </button>

                <button
                  type="button"
                  onClick={() => setFamilyProfile('health')}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    border: familyProfile === 'health' ? '2px solid #15803d' : '1px solid #e7d5c0',
                    background: familyProfile === 'health' ? '#dcfce7' : '#fcfaf5',
                    color: familyProfile === 'health' ? '#166534' : '#57534e',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <HeartPulse size={18} style={{ color: '#15803d' }} />
                  <span>Health Focused</span>
                  <small style={{ fontSize: '0.72rem', color: '#78716c', fontWeight: 400 }}>Roasted, low-cal snacks</small>
                </button>

                <button
                  type="button"
                  onClick={() => setFamilyProfile('party')}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    border: familyProfile === 'party' ? '2px solid #c2410c' : '1px solid #e7d5c0',
                    background: familyProfile === 'party' ? '#ffedd5' : '#fcfaf5',
                    color: familyProfile === 'party' ? '#9a3412' : '#57534e',
                    textAlign: 'left',
                    fontWeight: 600,
                    fontSize: '0.86rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <PartyPopper size={18} style={{ color: '#ea580c' }} />
                  <span>Festive Mehmaan</span>
                  <small style={{ fontSize: '0.72rem', color: '#78716c', fontWeight: 400 }}>Royal welcome platters</small>
                </button>

              </div>
            </div>

            {/* Step 2: Desired Spice Level */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  2. Spice Meter
                </label>
                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: spiceLevel <= 2 ? '#15803d' : spiceLevel === 3 ? '#d97706' : '#dc2626',
                  background: '#fef3c7',
                  padding: '2px 8px',
                  borderRadius: '12px'
                }}>
                  {spiceLevel === 1 && '🌱 Mild (Bachhon Ke Liye)'}
                  {spiceLevel === 2 && '✨ Gentle Zing (Khushnuma)'}
                  {spiceLevel === 3 && '🔥 Classic Medium (Chai-Time Hit)'}
                  {spiceLevel === 4 && '🌶️ Teekha Malwa Punch'}
                  {spiceLevel === 5 && '💥 Angaar Fire (Spice Connoisseur)'}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSpiceLevel(lvl)}
                    style={{
                      flex: 1,
                      padding: '12px 6px',
                      borderRadius: '12px',
                      border: spiceLevel === lvl ? '2px solid #c2410c' : '1px solid #eeddc7',
                      background: spiceLevel === lvl ? '#fed7aa' : '#fcfaf5',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 700,
                      color: '#1c1917',
                    }}
                  >
                    <span>{lvl}</span>
                    <span style={{ fontSize: '13px' }}>{'🌶️'.repeat(lvl > 3 ? 2 : 1)}</span>
                  </button>
                ))}
              </div>

              {/* Step 3: Flavor Craving */}
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                3. Flavor Vibe
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { id: 'all', label: 'Surprise Me' },
                  { id: 'tangy', label: 'Khatta-Meetha' },
                  { id: 'spicy', label: 'Desi Masaledar' },
                  { id: 'crunchy', label: 'Flaky & Crispy' },
                  { id: 'roasted', label: 'Oil-Free Roasted' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCraving(item.id as any)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      border: craving === item.id ? '1.5px solid #c2410c' : '1px solid #eeddc7',
                      background: craving === item.id ? '#c2410c' : '#ffffff',
                      color: craving === item.id ? '#ffffff' : '#57534e',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Dynamic Matched Snacks Result Card Grid */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#1c1917', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} style={{ color: '#15803d' }} />
              <span>Recommended Picks for Your Family Selection:</span>
            </h3>
            <span style={{ fontSize: '0.88rem', color: '#78716c', fontWeight: 600 }}>
              Showing {displayProducts.length} top matches
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '22px' }}>
            {displayProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1.5px solid #eeddc7',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 6px 16px rgba(67, 30, 8, 0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Match Ribbon */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: '#fef3c7',
                  color: '#92400e',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  border: '1px solid #fde68a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={11} />
                  98% Family Match
                </div>

                <div>
                  {/* Thumbnail & Title */}
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span className="veg-badge" style={{ transform: 'scale(0.8)' }}></span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#78716c' }}>{product.categoryLabel}</span>
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1c1917', margin: '2px 0' }}>
                        {product.name}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: '#c2410c', fontWeight: 600 }} className="hindi-title">
                        {product.hindiName}
                      </p>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.84rem', color: '#57534e', lineHeight: 1.45, marginBottom: '12px' }}>
                    {product.shortDesc}
                  </p>

                  <div style={{
                    background: '#fcfaf5',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    marginBottom: '14px',
                    fontSize: '0.78rem',
                    color: '#78716c'
                  }}>
                    <strong>Pairs With:</strong> {product.bestPairing}
                  </div>
                </div>

                {/* Price & Actions */}
                <div style={{ paddingTop: '12px', borderTop: '1px solid #f2e7d5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#78716c' }}>Starts at</span>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#9a3412' }}>
                      ₹{product.prices['200g']} <span style={{ fontSize: '0.78rem', fontWeight: 500, color: '#78716c' }}>/ 200g</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      type="button"
                      onClick={() => onOpenProductModal(product)}
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        border: '1px solid #eeddc7',
                        background: '#ffffff',
                        color: '#57534e',
                      }}
                      title="View Details & Nutrition"
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToBox(product, '400g')}
                      className="btn-primary"
                      style={{ padding: '8px 14px', fontSize: '0.82rem', borderRadius: '10px' }}
                    >
                      <Plus size={14} />
                      <span>Pack 400g</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
