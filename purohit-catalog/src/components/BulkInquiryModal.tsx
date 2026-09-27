import React, { useState } from 'react';
import { X, Send, Share2, CheckCircle2 } from 'lucide-react';

interface BulkInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BulkInquiryModal: React.FC<BulkInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [inquiryType, setInquiryType] = useState('Festive / Wedding Hampers');
  const [estimatedQuantity, setEstimatedQuantity] = useState('25-50 kg');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `*Namaste Purohit Namkeen Wholesale Team!* 🙏%0A%0A*Name:* ${encodeURIComponent(name || 'Customer')}%0A*City:* ${encodeURIComponent(city || 'India')}%0A*Inquiry Type:* ${encodeURIComponent(inquiryType)}%0A*Estimated Qty:* ${encodeURIComponent(estimatedQuantity)}%0A*Requirement:* ${encodeURIComponent(notes || 'Requesting wholesale catalog and bulk discount pricing.')}%0A%0APlease connect with price quote!`;
    window.open(`https://wa.me/919826012345?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '580px', padding: '32px' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: '#78716c',
            background: '#f5f5f4',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '32px 10px' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={38} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c1917', marginBottom: '10px' }}>
              Inquiry Received With Thanks!
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#57534e', lineHeight: 1.6, marginBottom: '24px' }}>
              Our Malwa sales manager will contact you at <strong>{phone || 'your phone number'}</strong> within 2 business hours with exclusive distributor/bulk rates.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="btn-gold"
                style={{ padding: '12px 22px' }}
              >
                <Share2 size={16} />
                <span>Chat Instantly on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
                style={{ padding: '12px 20px' }}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c2410c', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                B2B, Weddings & Festive Gifting
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1c1917', marginTop: '4px' }}>
                Bulk & Family Order Inquiry
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#78716c', marginTop: '4px' }}>
                Get custom factory-direct packaging, custom branded boxes, and special bulk pricing for 20kg+ orders.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#44403c', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #eeddc7',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#44403c', marginBottom: '6px' }}>
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #eeddc7',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#44403c', marginBottom: '6px' }}>
                    City & State *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, Maharashtra"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #eeddc7',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#44403c', marginBottom: '6px' }}>
                    Purpose of Order
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1.5px solid #eeddc7',
                      fontSize: '0.88rem',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Festive / Wedding Hampers">Festive / Wedding Hampers</option>
                    <option value="Corporate Gifting">Corporate Gifting</option>
                    <option value="Retail Dealership">Supermarket / Retail Dealership</option>
                    <option value="Family Function">Large Family Function</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#44403c', marginBottom: '6px' }}>
                  Estimated Quantity Requirement
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['10-25 kg', '25-50 kg', '50-100 kg', '100+ kg (Commercial)'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setEstimatedQuantity(qty)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: estimatedQuantity === qty ? '1.5px solid #c2410c' : '1px solid #eeddc7',
                        background: estimatedQuantity === qty ? '#ffedd5' : '#ffffff',
                        color: estimatedQuantity === qty ? '#c2410c' : '#57534e'
                      }}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#44403c', marginBottom: '6px' }}>
                  Specific Requirements or Message
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us specific snacks you require (e.g. 50 boxes of Ratlami Sev + Navratan mixture with Diwali sleeve)..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1.5px solid #eeddc7',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1, padding: '12px' }}
                >
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="btn-gold"
                  style={{ padding: '12px 18px' }}
                  title="Direct WhatsApp Send"
                >
                  <Share2 size={16} />
                  <span>WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
