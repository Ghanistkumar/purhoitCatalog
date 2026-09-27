import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Heart, Sparkles, Check, StoreIcon, Download } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenInquiryModal: () => void;
  onOpenCatalogDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenInquiryModal,
  onOpenCatalogDownload,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#1c1917',
      color: '#d6d3d1',
      paddingTop: '64px',
      paddingBottom: '32px',
      borderTop: '4px solid #c2410c',
    }}>
      <div className="container">
        
        {/* Newsletter / Festive Alert Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)',
          borderRadius: '20px',
          padding: '28px 32px',
          border: '1px solid #44403c',
          marginBottom: '52px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              <Sparkles size={16} />
              <span>Festive Gifting Club</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fef3c7', marginBottom: '4px' }}>
              Get Special Wholesale Discounts & Festive Gift Hampers
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#a8a29e' }}>
              Join thousands of Indian families and retailers receiving fresh farsan directly from our Gujarat factory.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', width: '100%', maxWidth: '420px' }}>
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid #57534e',
                background: '#292524',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '12px 20px', borderRadius: '12px' }}
            >
              {subscribed ? <Check size={16} /> : <Send size={16} />}
              <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
            </button>
          </form>
        </div>

        {/* 4 Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '36px',
          marginBottom: '48px',
        }}>
          
          {/* Column 1: Brand & Values */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/purohit-logo.jpg"
                alt="Purohit Logo"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fef3c7', letterSpacing: '-0.5px' }}>
                  PUROHIT <span style={{ color: '#f59e0b' }}>NAMKEEN</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#c2410c', fontWeight: 700 }} className="hindi-title">
                  स्वाद परंपरा का
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#a8a29e', lineHeight: 1.6, marginBottom: '18px' }}>
              Gujarat's authentic farsan & namkeen manufacturer. Committed to pure ingredients, traditional taste, and hygienic processing for every Indian family.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#86efac', marginBottom: '6px' }}>
              <span className="veg-badge" style={{ transform: 'scale(0.8)' }}></span>
              <span>100% Pure Vegetarian Certified</span>
            </div>

            <div style={{ marginTop: '14px' }}>
              <a
                href="https://www.StoreIcon.com/purohitnamkeenofficial/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <StoreIcon size={16} />
                <span>Follow on StoreIcon</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Explore Products
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <button onClick={() => onNavigateSection('catalog')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  Royal Ratlami Sev & Gathiya
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  Purohit Masala Soya Chips
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  Gujarati Chawana & Sev Mamra
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  Authentic Fulwadi & Tikhi Boondi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('catalog')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  Royal Farali Chivda (Fasting Special)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Catalogs & Special Features */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Downloads & Tools
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>
                <button
                  onClick={onOpenCatalogDownload}
                  style={{ color: '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Download size={15} />
                  <span>Download Catalog PDF</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('flavor-finder')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  🎯 Flavor & Spice Finder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('family-box')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  🎁 Build Your Family Snack Box
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('purity')} style={{ color: '#d6d3d1' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')} onMouseLeave={(e) => (e.currentTarget.style.color = '#d6d3d1')}>
                  🛡️ 4-Pillar Crunch Guarantee
                </button>
              </li>
              <li>
                <button onClick={onOpenInquiryModal} style={{ color: '#f59e0b', fontWeight: 600 }}>
                  📦 Wholesale Dealership Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory HQ */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fef3c7', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Factory & Sales HQ
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '2px' }} />
                <span>Purohit Namkeen, Santej / Kalol Industrial Area, Gandhinagar / Ahmedabad, Gujarat 382721</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: '#f59e0b', flexShrink: 0 }} />
                <a href="tel:+919328978978" style={{ color: '#d6d3d1' }}>+91 93289 78978</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <StoreIcon size={18} style={{ color: '#e1306c', flexShrink: 0 }} />
                <a href="https://www.StoreIcon.com/purohitnamkeenofficial/" target="_blank" rel="noopener noreferrer" style={{ color: '#d6d3d1' }}>
                  @purohitnamkeenofficial
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: '#f59e0b', flexShrink: 0 }} />
                <a href="mailto:care@purohitnamkeen.com" style={{ color: '#d6d3d1' }}>care@purohitnamkeen.com</a>
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={onOpenInquiryModal}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: '#292524',
                    border: '1px solid #f59e0b',
                    color: '#f59e0b',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                  }}
                >
                  Request Distributorship
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div style={{
          borderTop: '1px solid #292524',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#78716c'
        }}>
          <div>
            © {new Date().getFullYear()} Purohit Namkeen. All Rights Reserved. (Regd. Trademark ®).
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with</span>
            <Heart size={14} fill="#dc2626" color="#dc2626" />
            <span>for Every Indian Family • Gujarat, India 🇮🇳</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
