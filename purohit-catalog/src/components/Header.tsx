import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Package,
  Phone,
  Menu,
  X,
  Flame,
  Award,
  ShoppingBag,
  Download,
  StoreIcon
} from 'lucide-react';
import type { BoxItem } from '../types';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  boxItems: BoxItem[];
  onOpenBoxModal: () => void;
  onOpenInquiryModal: () => void;
  onOpenCatalogDownload: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  boxItems,
  onOpenBoxModal,
  onOpenInquiryModal,
  onOpenCatalogDownload,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalBoxCount = boxItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#ffffff', boxShadow: '0 4px 18px rgba(67, 30, 8, 0.08)' }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #9a3412 0%, #c2410c 50%, #d97706 100%)',
        color: '#ffffff',
        padding: '7px 16px',
        fontSize: '0.82rem',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        borderBottom: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
          <Sparkles size={14} style={{ color: '#fef08a' }} />
          <span><strong>Diwali & Wedding Pre-Bookings Open:</strong> Fresh Batches • 100% Pure Refined Oil!</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>
            Free Shipping on Orders &gt; ₹499
          </span>
        </div>

        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="top-bar-contact">
          <a
            href="https://www.StoreIcon.com/purohitnamkeenofficial/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffedd5', textDecoration: 'none' }}
          >
            <StoreIcon size={14} />
            <span>@purohitnamkeenofficial</span>
          </a>

          <a href="tel:+919328978978" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffedd5' }}>
            <Phone size={13} />
            <span>Helpline: +91 93289 78978</span>
          </a>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', gap: '16px' }}>

        {/* Brand Logo (Official Registered Trademark) */}
        <div
          onClick={() => handleNavClick('hero')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          {/* Official Purohit Logo */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            filter: 'drop-shadow(0 3px 6px rgba(194, 65, 12, 0.25))',
          }}>
            <img
              src="/purohit-logo.jpg"
              alt="Purohit Namkeen Official Logo"
              style={{
                height: '56px',
                width: 'auto',
                maxWidth: '72px',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontSize: '1.42rem',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                color: '#9a3412',
                fontFamily: 'Outfit, serif',
                lineHeight: 1.1
              }}>
                PUROHIT
              </span>
              <span style={{
                fontSize: '1.32rem',
                fontWeight: 700,
                color: '#d97706',
                fontFamily: 'Outfit, serif'
              }}>
                NAMKEEN
              </span>
              <span className="veg-badge" title="100% Pure Vegetarian"></span>
            </div>
            <p style={{
              fontSize: '0.72rem',
              color: '#78716c',
              fontWeight: 600,
              letterSpacing: '0.5px',
              margin: '2px 0 0 0'
            }} className="hindi-title">
              स्वाद परंपरा का • Gujarat / Pan-India
            </p>
          </div>
        </div>

        {/* Search Input Bar (Desktop) */}
        <div style={{
          position: 'relative',
          maxWidth: '260px',
          width: '100%',
          display: 'none',
        }} className="header-search-box">
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a8a29e' }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search Sev, Gathiya, Soya..."
            style={{
              width: '100%',
              padding: '8px 12px 8px 34px',
              borderRadius: '24px',
              border: '1.5px solid #eeddc7',
              backgroundColor: '#fefbf6',
              fontSize: '0.86rem',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#c2410c')}
            onBlur={(e) => (e.target.style.borderColor = '#eeddc7')}
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#78716c', fontSize: '12px', padding: '2px 4px' }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '20px' }} className="desktop-nav">
          <button
            onClick={() => {
              const fileId = '1CG36zoHfH9oM5MPtLZJdj3D0TpG5l9rD';
              const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

              window.open(downloadUrl, '_blank');
            }}
            style={{
              fontWeight: 600,
              color: '#44403c',
              fontSize: '0.9rem',
              padding: '4px 0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c2410c')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#44403c')}
          >
            Snack Catalog
          </button>

          <button
            onClick={() => handleNavClick('flavor-finder')}
            style={{ fontWeight: 600, color: '#44403c', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c2410c')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#44403c')}
          >
            <Flame size={14} style={{ color: '#dc2626' }} />
            Flavor Quiz
          </button>

          <button
            onClick={() => handleNavClick('family-box')}
            style={{ fontWeight: 600, color: '#44403c', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c2410c')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#44403c')}
          >
            <Package size={14} style={{ color: '#d97706' }} />
            Build Box
          </button>

          <button
            onClick={() => handleNavClick('purity')}
            style={{ fontWeight: 600, color: '#44403c', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c2410c')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#44403c')}
          >
            <Award size={14} style={{ color: '#15803d' }} />
            Purity
          </button>
        </nav>

        {/* Action Buttons: Download Catalog, Box Tray & StoreIcon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

          {/* Download Catalog PDF Button */}
          <button
            onClick={onOpenCatalogDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#fff7ed',
              color: '#c2410c',
              border: '1.5px solid #fdba74',
              padding: '7px 13px',
              borderRadius: '20px',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
            title="Download Official Product Catalog PDF"
          >
            <Download size={15} />
            <span>Catalog PDF</span>
          </button>

          {/* Custom Hamper Box Tray Trigger */}
          <button
            onClick={onOpenBoxModal}
            className="btn-gold"
            style={{
              padding: '7px 14px',
              fontSize: '0.84rem',
              position: 'relative',
              borderRadius: '20px',
            }}
            title="Open Your Family Assorted Box"
          >
            <ShoppingBag size={15} />
            <span style={{ fontWeight: 700 }}>Box Tray</span>
            {totalBoxCount > 0 && (
              <span style={{
                background: '#dc2626',
                color: '#ffffff',
                borderRadius: '50%',
                minWidth: '18px',
                height: '18px',
                padding: '0 3px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.72rem',
                fontWeight: 800,
                border: '2px solid #ffffff'
              }}>
                {totalBoxCount}
              </span>
            )}
          </button>

          {/* Quick Wholesale / Bulk Order Button */}
          <button
            onClick={onOpenInquiryModal}
            style={{
              padding: '8px 16px',
              fontSize: '0.85rem',
              display: 'none',
            }}
            className="btn-primary wholesale-btn"
          >
            <span>Bulk Enquiry</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              color: '#78716c',
              border: '1px solid #eeddc7',
              borderRadius: '8px',
              background: '#fefbf6',
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '2px solid #eeddc7',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }}>
          {/* Mobile Search */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#a8a29e' }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search snacks, sev, mathri..."
              style={{
                width: '100%',
                padding: '10px 12px 10px 36px',
                borderRadius: '8px',
                border: '1.5px solid #eeddc7',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => {
              const fileId = '1CG36zoHfH9oM5MPtLZJdj3D0TpG5l9rD';
              const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

              window.open(downloadUrl, '_blank');
             setMobileMenuOpen(false); }}
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#fff7ed', fontWeight: 700, color: '#c2410c', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Download size={16} />
              <span>📄 Download Product Catalog (PDF)</span>
            </button>

            <button
              onClick={() => handleNavClick('catalog')}
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#faf5ed', fontWeight: 600, color: '#9a3412' }}
            >
              🥣 Complete Product Catalog
            </button>
            <button
              onClick={() => handleNavClick('flavor-finder')}
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#faf5ed', fontWeight: 600, color: '#44403c' }}
            >
              🌶️ Interactive Flavor & Spice Finder
            </button>
            <button
              onClick={() => handleNavClick('family-box')}
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#faf5ed', fontWeight: 600, color: '#44403c' }}
            >
              🎁 Custom Family Hamper Builder
            </button>
            <button
              onClick={() => handleNavClick('purity')}
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#faf5ed', fontWeight: 600, color: '#44403c' }}
            >
              🛡️ The 4-Pillar Crunch Guarantee
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#faf5ed', fontWeight: 600, color: '#44403c' }}
            >
              👨‍👩‍👧‍👦 Family Reviews
            </button>

            <a
              href="https://www.StoreIcon.com/purohitnamkeenofficial/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: '#fff1f2', fontWeight: 700, color: '#e1306c', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <StoreIcon size={16} />
              <span>Follow @purohitnamkeenofficial</span>
            </a>

            <button
              onClick={() => { onOpenInquiryModal(); setMobileMenuOpen(false); }}
              style={{ textAlign: 'center', marginTop: '6px' }}
              className="btn-primary"
            >
              Wholesale / Family Bulk Order
            </button>
          </div>
        </div>
      )}

      {/* Responsive CSS Media Queries inside a style tag */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .header-search-box {
            display: block !important;
          }
          .wholesale-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .top-bar-contact {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
