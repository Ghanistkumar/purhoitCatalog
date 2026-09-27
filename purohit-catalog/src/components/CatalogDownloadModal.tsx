import React from 'react';
import { X, Printer, Share2, FileText, Phone, StoreIcon } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface CatalogDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogDownloadModal: React.FC<CatalogDownloadModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppCatalog = () => {
    const text = `*Namaste Purohit Namkeen!* 🙏%0APlease send me the latest complete PDF Product Catalog and wholesale dealership price list on WhatsApp.`;
    window.open(`https://wa.me/919328978978?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content printable-catalog-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '880px',
          padding: '0',
          overflow: 'hidden',
          backgroundColor: '#ffffff'
        }}
      >
        {/* Modal Toolbar (hidden when printing) */}
        <div className="no-print" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background: '#fcfaf5',
          borderBottom: '1px solid #eeddc7'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} style={{ color: '#c2410c' }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1c1917' }}>
                Purohit Namkeen Official Product Catalog
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#78716c' }}>
                Printable Brochure & Wholesale Price Sheet (Updated 2026 Edition)
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.84rem' }}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppCatalog}
              className="btn-gold"
              style={{ padding: '8px 16px', fontSize: '0.84rem' }}
              title="Get PDF on WhatsApp"
            >
              <Share2 size={15} />
              <span>WhatsApp PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#f5f5f4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#78716c'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Catalog Document Body */}
        <div style={{ padding: '32px', maxHeight: '78vh', overflowY: 'auto' }} className="catalog-printable-sheet">
          
          {/* Document Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #c2410c',
            paddingBottom: '20px',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="/purohit-logo.jpg"
                alt="Purohit Namkeen Official Logo"
                style={{ width: '84px', height: '84px', objectFit: 'contain' }}
              />
              <div>
                <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#9a3412', margin: 0, lineHeight: 1.1 }}>
                  PUROHIT NAMKEEN
                </h1>
                <p style={{ fontSize: '0.92rem', color: '#c2410c', fontWeight: 700 }} className="hindi-title">
                  पुरोहित नमकीन • स्वाद परंपरा का
                </p>
                <p style={{ fontSize: '0.78rem', color: '#78716c' }}>
                  Leading Snack Manufacturer • Santej / Kalol, Gujarat, India
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#44403c' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', marginBottom: '3px' }}>
                <Phone size={13} style={{ color: '#c2410c' }} />
                <strong>Order Helpline:</strong> +91 93289 78978
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px', marginBottom: '3px' }}>
                <StoreIcon size={13} style={{ color: '#e1306c' }} />
                <a href="https://www.StoreIcon.com/purohitnamkeenofficial/" target="_blank" rel="noopener noreferrer" style={{ color: '#c2410c', textDecoration: 'underline' }}>
                  @purohitnamkeenofficial
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' }}>
                <span className="veg-badge" style={{ transform: 'scale(0.7)' }}></span>
                <span style={{ color: '#15803d', fontWeight: 700 }}>100% Pure Vegetarian</span>
              </div>
            </div>
          </div>

          {/* Highlights Strip */}
          <div style={{
            background: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            fontSize: '0.82rem',
            color: '#92400e',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span>✨ <strong>Quality Promise:</strong> 100% Pure Refined Oil • No Harmful Additives</span>
            <span>📦 <strong>Packaging:</strong> Triple-Layer Moisture-Lock Foil</span>
            <span>🚚 <strong>Delivery:</strong> Pan-India Dispatch</span>
          </div>

          {/* Products Catalog Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f5efe6', borderBottom: '2px solid #eeddc7' }}>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917' }}>Sr.</th>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917' }}>Product Name</th>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917' }}>Category</th>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917' }}>Spice</th>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917', textAlign: 'right' }}>200g MRP</th>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917', textAlign: 'right' }}>400g MRP</th>
                <th style={{ padding: '10px 12px', fontWeight: 700, color: '#1c1917', textAlign: 'right' }}>1 Kg Bulk</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((p, idx) => (
                <tr
                  key={p.id}
                  style={{
                    borderBottom: '1px solid #eeddc7',
                    background: idx % 2 === 0 ? '#ffffff' : '#fcfaf7'
                  }}
                >
                  <td style={{ padding: '10px 12px', color: '#78716c', fontWeight: 600 }}>{idx + 1}</td>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ fontWeight: 700, color: '#1c1917' }}>{p.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#c2410c' }} className="hindi-title">{p.hindiName}</div>
                  </td>
                  <td style={{ padding: '10px 12px', color: '#57534e' }}>{p.categoryLabel}</td>
                  <td style={{ padding: '10px 12px', color: '#ea580c' }}>
                    {'🌶️'.repeat(p.spiceLevel)}
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 600 }}>
                    ₹{p.prices['200g']}
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700, color: '#9a3412' }}>
                    ₹{p.prices['400g']}
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700, color: '#15803d' }}>
                    ₹{p.prices['1kg']}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Wholesale & Commercial Notes */}
          <div style={{
            marginTop: '28px',
            paddingTop: '18px',
            borderTop: '1px dashed #eeddc7',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            fontSize: '0.8rem',
            color: '#57534e'
          }}>
            <div>
              <h4 style={{ fontWeight: 700, color: '#1c1917', marginBottom: '6px' }}>Master Carton Packing Options:</h4>
              <ul style={{ paddingLeft: '16px', lineHeight: 1.6 }}>
                <li>200g Packs: 40 units per master carton (8 kg)</li>
                <li>400g Packs: 25 units per master carton (10 kg)</li>
                <li>Loose / Bulk Institutional Bags: 10 kg & 20 kg poly-lined bags</li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, color: '#1c1917', marginBottom: '6px' }}>Dealership & Distributorship:</h4>
              <p style={{ lineHeight: 1.5 }}>
                Special B2B trade margins available for stockists and distributors across Gujarat, Maharashtra, Rajasthan, and MP. Contact our sales department directly.
              </p>
            </div>
          </div>

          {/* Footer of the Printable Document */}
          <div style={{
            marginTop: '24px',
            textAlign: 'center',
            fontSize: '0.78rem',
            color: '#78716c',
            borderTop: '1px solid #eeddc7',
            paddingTop: '12px'
          }}>
            Purohit Namkeen Official Catalog • Call / WhatsApp: +91 93289 78978 • Follow: StoreIcon.com/purohitnamkeenofficial
          </div>

        </div>

      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-catalog-modal, .printable-catalog-modal * {
            visibility: visible;
          }
          .printable-catalog-modal {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            max-width: 100% !important;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
