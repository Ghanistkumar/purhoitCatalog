import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Package, 
  ShieldCheck, 
  ChevronRight, 
  Heart,
  Clock,
  Download,
  StoreIcon,
  Layers
} from 'lucide-react';
import { BRAND_STATS } from '../data/products';

interface HeroProps {
  onExploreCatalog: () => void;
  onStartQuiz: () => void;
  onOpenBoxBuilder: () => void;
  onOpenCatalogDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onStartQuiz,
  onOpenBoxBuilder,
  onOpenCatalogDownload,
}) => {
  return (
    <section id="hero" style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #fffcf6 0%, #fff7eb 100%)',
      borderBottom: '1px solid #eeddc7',
      overflow: 'hidden',
      padding: '48px 0 36px 0'
    }}>
      {/* Decorative festive background accents */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-80px',
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(217, 119, 6, 0) 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-60px',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(194, 65, 12, 0.12) 0%, rgba(194, 65, 12, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Hero Text & Call to Actions */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: '#fef3c7', border: '1px solid #fde68a', marginBottom: '16px' }}>
              <Sparkles size={16} style={{ color: '#d97706' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#92400e', letterSpacing: '0.5px' }}>
                PUROHIT NAMKEEN • GUJARAT HERITAGE
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <img
                src="/purohit-logo.jpg"
                alt="Purohit Logo"
                style={{
                  height: '62px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 8px rgba(194, 65, 12, 0.25))',
                  borderRadius: '8px'
                }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#9a3412' }} className="hindi-title">
                स्वाद परंपरा का
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              color: '#1c1917',
              lineHeight: 1.15,
              marginBottom: '18px',
              fontFamily: 'Outfit, serif'
            }}>
              Har Bite Mein <span style={{ color: '#c2410c' }}>Apnapan</span> & Asli Swad
            </h1>

            <p style={{
              fontSize: '1.08rem',
              color: '#57534e',
              lineHeight: 1.6,
              marginBottom: '26px',
              maxWidth: '540px'
            }}>
              Gujarat's trusted farsan & namkeen manufacturer. Renowned for our <strong>Ratlami Sev, Bhavnagri Gathiya, Masala Soya Chips</strong>, and Farali Chivda made with 100% pure refined oil for the whole Indian family.
            </p>

            {/* Quick Value Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
              <div className="badge-tag" style={{ background: '#f0fdf4', color: '#15803d', borderColor: '#bbf7d0' }}>
                <span className="veg-badge" style={{ transform: 'scale(0.8)' }}></span>
                100% Pure Vegetarian
              </div>
              <div className="badge-tag" style={{ background: '#fffbeb', color: '#b45309', borderColor: '#fde68a' }}>
                <ShieldCheck size={14} />
                No Harmful Preservatives
              </div>
              <a
                href="https://www.instagram.com/purohitnamkeenofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="badge-tag"
                style={{ background: '#fff1f2', color: '#e1306c', borderColor: '#fecdd3', textDecoration: 'none' }}
              >
                <StoreIcon size={14} />
                @purohitnamkeenofficial
              </a>
            </div>

            {/* Action Buttons: Include Download Catalog */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <button onClick={onExploreCatalog} className="btn-primary" style={{ padding: '13px 26px', fontSize: '0.98rem' }}>
                <span>Explore Catalog</span>
                <ChevronRight size={18} />
              </button>

              <button
                onClick={onOpenCatalogDownload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#c2410c',
                  border: '2px solid #c2410c',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 12px rgba(194, 65, 12, 0.15)',
                  cursor: 'pointer'
                }}
              >
                <Download size={18} />
                <span>Download Catalog (PDF)</span>
              </button>

              <button onClick={onOpenBoxBuilder} className="btn-gold" style={{ padding: '12px 20px', fontSize: '0.92rem' }}>
                <Package size={17} />
                <span>Build Box</span>
              </button>

              <button onClick={onStartQuiz} className="btn-secondary" style={{ padding: '11px 18px', fontSize: '0.9rem' }}>
                <Flame size={15} style={{ color: '#dc2626' }} />
                <span>Flavor Quiz</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase Carousel / Showcase Cards */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 40px -10px rgba(67, 30, 8, 0.15)',
              border: '2px solid #f2e3cc',
              position: 'relative'
            }}>
              {/* Featured Ribbon */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                background: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)',
                color: '#ffffff',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                boxShadow: '0 4px 10px rgba(194, 65, 12, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Heart size={13} fill="#ffffff" />
                <span>Purohit Signature Trio</span>
              </div>

              {/* Three Mini Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Snack 1: Ratlami Sev */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px',
                  borderRadius: '16px',
                  backgroundColor: '#fffbeb',
                  border: '1px solid #fef3c7',
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80"
                      alt="Purohit Ratlami Sev"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1c1917' }}>Purohit Royal Ratlami Sev</h4>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#c2410c' }}>₹60 / 200g</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#78716c', margin: '2px 0 6px 0' }}>Spiced with Hathras Hing & hand-pounded cloves</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.72rem', background: '#fed7aa', color: '#9a3412', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                        Spice: 🌶️🌶️🌶️🌶️
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#57534e' }}>Poha & Tea Special</span>
                    </div>
                  </div>
                </div>

                {/* Snack 2: Masala Soya Chips */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px',
                  borderRadius: '16px',
                  backgroundColor: '#fef6ee',
                  border: '1px solid #fed7aa',
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=200&q=80"
                      alt="Purohit Soya Chips"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1c1917' }}>Masala Soya Chips</h4>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#c2410c' }}>₹55 / 200g</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#78716c', margin: '2px 0 6px 0' }}>High protein wave-cut chips in tangy masala</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.72rem', background: '#fef08a', color: '#854d0e', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                        High Protein
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#57534e' }}>Crisp Waves</span>
                    </div>
                  </div>
                </div>

                {/* Snack 3: Bhavnagri Gathiya */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px',
                  borderRadius: '16px',
                  backgroundColor: '#f5fdf7',
                  border: '1px solid #bbf7d0',
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=200&q=80"
                      alt="Purohit Bhavnagri Gathiya"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1c1917' }}>Bhavnagri Gathiya</h4>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#15803d' }}>₹60 / 200g</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: '#78716c', margin: '2px 0 6px 0' }}>Soft & melt-in-mouth with carom seeds & pepper</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                        Gujarati Classic
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#57534e' }}>Mild & Soft</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quote Banner */}
              <div style={{
                marginTop: '16px',
                paddingTop: '14px',
                borderTop: '1px dashed #eeddc7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
                color: '#78716c',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Layers size={14} style={{ color: '#d97706' }} />
                  <span>Fresh Batches Sealed in Nitrogen Foil</span>
                </div>
                <strong style={{ color: '#c2410c' }}>Pan-India Supply</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Stats Banner */}
        <div style={{
          marginTop: '44px',
          background: '#ffffff',
          borderRadius: '18px',
          padding: '20px 24px',
          border: '1px solid #eeddc7',
          boxShadow: '0 6px 18px rgba(67, 30, 8, 0.05)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
        }}>
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '28px' }}>{stat.icon}</span>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#9a3412', lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#78716c', fontWeight: 500, marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
