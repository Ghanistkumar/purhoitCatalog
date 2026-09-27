import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Volume2, 
  CheckCircle, 
  FileCheck, 
  Check 
} from 'lucide-react';

export const PurityGuarantee: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [crunchTesting, setCrunchTesting] = useState<boolean>(false);
  const [crunchResult, setCrunchResult] = useState<{ decibels: number; score: number } | null>({
    decibels: 88,
    score: 99.4
  });

  const pillars = [
    {
      id: 'groundnut-oil',
      icon: '🥜',
      title: '100% Cold-Pressed Groundnut Oil',
      subtitle: 'Zero Palm Oil • Zero Reheated Grease',
      detail: 'Unlike industrial commercial snacks fried in cheap palm or hydrogenated fats, every single Purohit Namkeen batch is fried exclusively in pure expeller-pressed groundnut (mungfali) oil. This keeps our snacks light on the stomach, free from trans-fats, and naturally rich in heart-healthy MUFA.',
      badge: 'Heart Friendly',
      stats: '0% Trans Fat • Zero Cholesterol'
    },
    {
      id: 'malwa-besan',
      icon: '🌾',
      title: 'Malwa Desi Chana Besan',
      subtitle: 'Stone-Ground • 100% Pure Chickpea Flour',
      detail: 'Our gram flour comes straight from Madhya Pradesh fertile soils. Slow stone-milled to retain the natural pulse sweetness, fibre, and golden yellow color. We strictly prohibit wheat flour (maida) starch adulteration in our sev and gathiya.',
      badge: '100% Unadulterated',
      stats: '14g+ Plant Protein / 100g'
    },
    {
      id: 'royal-spices',
      icon: '🌿',
      title: 'Hathras Hing & Hand-Crushed Cloves',
      subtitle: 'Secret Royal Family Spice Blend',
      detail: 'We source pure lump asafoetida (Hing) from Hathras, UP, and aromatic whole cloves from Kerala hills. Hand-pounded in traditional mortar-pestles right before mixing to preserve the volatile essential oils that give Purohit Namkeen its room-filling festive fragrance.',
      badge: 'Pure Aromatics',
      stats: 'No Artificial Flavours'
    },
    {
      id: 'freshness-seal',
      icon: '📦',
      title: 'Triple-Layer Nitrogen Foil Shield',
      subtitle: 'Locks in Factory Crispness for 6 Months',
      detail: 'Each pack is flushed with food-grade inert nitrogen and sealed in a heavy gauge aluminium multi-barrier foil pouch. Zero moisture ingress guarantees the identical legendary crunch on day 180 as it had the minute it left our frying pans.',
      badge: 'Laboratory Verified',
      stats: '< 1.4% Residual Moisture'
    }
  ];

  const handleRunCrunchTest = () => {
    setCrunchTesting(true);
    setTimeout(() => {
      setCrunchResult({
        decibels: 86 + Math.floor(Math.random() * 6),
        score: +(98.5 + Math.random() * 1.4).toFixed(1)
      });
      setCrunchTesting(false);
    }, 900);
  };

  return (
    <section id="purity" style={{
      padding: '72px 0',
      background: 'linear-gradient(180deg, #fffbf2 0%, #fff7eb 100%)',
      borderBottom: '1px solid #eeddc7'
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 40px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#ffffff',
            border: '1px solid #bbf7d0',
            marginBottom: '14px'
          }}>
            <ShieldCheck size={16} style={{ color: '#15803d' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#15803d', textTransform: 'uppercase' }}>
              Unique Feature • The Purohit Trust Benchmark
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#1c1917', marginBottom: '12px' }}>
            The 4-Pillar Crunch & Purity Guarantee
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#57534e' }}>
            Why 1.2 million Indian families trust Purohit Namkeen on their tea tables: pure honest ingredients, no commercial shortcuts.
          </p>
        </div>

        {/* 4 Pillars Interactive Tabs & Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'stretch',
          marginBottom: '48px'
        }}>
          
          {/* Pillar Navigation Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pillars.map((pillar, index) => {
              const isSelected = activePillar === index;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(index)}
                  style={{
                    background: isSelected ? '#ffffff' : 'rgba(255,255,255,0.7)',
                    borderRadius: '16px',
                    padding: '18px 20px',
                    border: isSelected ? '2px solid #c2410c' : '1px solid #eeddc7',
                    boxShadow: isSelected ? '0 8px 20px rgba(194, 65, 12, 0.12)' : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '28px', flexShrink: 0 }}>{pillar.icon}</span>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isSelected ? '#9a3412' : '#1c1917' }}>
                        {pillar.title}
                      </h4>
                      {isSelected && (
                        <span style={{ background: '#ffedd5', color: '#9a3412', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '10px' }}>
                          Active
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#78716c', marginTop: '3px' }}>
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Pillar Deep Dive Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '36px',
            border: '2px solid #eeddc7',
            boxShadow: '0 16px 36px rgba(67, 30, 8, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '42px' }}>{pillars[activePillar].icon}</span>
                <span style={{
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Check size={14} />
                  {pillars[activePillar].badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1c1917', marginBottom: '8px' }}>
                {pillars[activePillar].title}
              </h3>

              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#c2410c', marginBottom: '16px' }}>
                {pillars[activePillar].stats}
              </div>

              <p style={{ fontSize: '1rem', color: '#57534e', lineHeight: 1.65 }}>
                {pillars[activePillar].detail}
              </p>
            </div>

            <div style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px dashed #eeddc7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.85rem',
              color: '#78716c'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileCheck size={18} style={{ color: '#15803d' }} />
                <span>Certified FSSAI & ISO 22000 Facility</span>
              </div>
              <span style={{ fontWeight: 700, color: '#9a3412' }}>Purohit Quality Mark</span>
            </div>
          </div>

        </div>

        {/* Interactive Crunch Meter Laboratory Widget */}
        <div style={{
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)',
          borderRadius: '24px',
          padding: '32px 36px',
          color: '#ffffff',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
              <Volume2 size={16} />
              <span>Interactive Freshness Audio-Visual Lab</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fef3c7', marginBottom: '10px' }}>
              Purohit Digital "Crunch & Snap" Meter
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#d6d3d1', lineHeight: 1.55 }}>
              Try our sensory laboratory simulation! Our micro-milled dough fried at 178°C creates microscopic airy air-pockets that produce an auditory snap at 85+ decibels upon first bite.
            </p>

            <button
              type="button"
              onClick={handleRunCrunchTest}
              disabled={crunchTesting}
              style={{
                marginTop: '18px',
                background: crunchTesting ? '#78716c' : 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(217, 119, 6, 0.4)'
              }}
            >
              <Sparkles size={16} />
              <span>{crunchTesting ? 'Analyzing Soundwave...' : 'Trigger Live Crunch Test'}</span>
            </button>
          </div>

          {/* Meter Display Gauge */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.07)',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.82rem', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Freshness Snap Rating
            </div>

            <div style={{
              fontSize: '3rem',
              fontWeight: 900,
              color: '#facc15',
              fontFamily: 'monospace',
              lineHeight: 1.1,
              letterSpacing: '-1px'
            }}>
              {crunchTesting ? '...' : `${crunchResult?.score}%`}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px', color: '#86efac', fontSize: '0.88rem', fontWeight: 600 }}>
              <CheckCircle size={16} />
              <span>Acoustic Snap: {crunchResult?.decibels} dB (Supreme Crispness)</span>
            </div>

            {/* Sound Wave Representation */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', height: '36px', marginTop: '16px' }}>
              {[18, 28, 14, 34, 22, 36, 16, 30, 24, 18, 32, 20].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: '6px',
                    height: crunchTesting ? `${Math.floor(Math.random() * 32) + 6}px` : `${h}px`,
                    background: '#f59e0b',
                    borderRadius: '4px',
                    transition: 'height 0.15s ease'
                  }}
                />
              ))}
            </div>
            
            <p style={{ fontSize: '0.72rem', color: '#a8a29e', marginTop: '12px' }}>
              Certified zero moisture ingress guaranteed by vacuum sealing
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
