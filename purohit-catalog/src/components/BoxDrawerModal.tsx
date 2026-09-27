import React from 'react';
import { X, Package, Trash2, Share2, Plus, Minus, ArrowRight } from 'lucide-react';
import type { BoxItem } from '../types';

interface BoxDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  boxItems: BoxItem[];
  onRemoveItem: (productId: string, weight: string) => void;
  onUpdateQuantity: (productId: string, weight: string, delta: number) => void;
  onOpenCustomizer: () => void;
  onClearBox: () => void;
}

export const BoxDrawerModal: React.FC<BoxDrawerModalProps> = ({
  isOpen,
  onClose,
  boxItems,
  onRemoveItem,
  onUpdateQuantity,
  onOpenCustomizer,
  onClearBox,
}) => {
  if (!isOpen) return null;

  const totalItemsCount = boxItems.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = boxItems.reduce((acc, item) => {
    return acc + (item.product.prices[item.weight] * item.quantity);
  }, 0);

  const totalWeightGrams = boxItems.reduce((acc, item) => {
    const wtNum = item.weight === '1kg' ? 1000 : parseInt(item.weight.replace('g', ''), 10);
    return acc + (wtNum * item.quantity);
  }, 0);

  const handleWhatsAppCheckout = () => {
    if (boxItems.length === 0) return;

    const itemsSummary = boxItems
      .map((item, i) => `${i + 1}. ${item.product.name} (${item.weight}) x ${item.quantity} = ₹${item.product.prices[item.weight] * item.quantity}`)
      .join('%0A');

    const message = `*Namaste Purohit Namkeen!* 🙏%0A%0AI would like to place an order for my *Family Assortment Box*:%0A%0A${itemsSummary}%0A%0A*Total Weight:* ${(totalWeightGrams / 1000).toFixed(1)} kg%0A*Total Amount:* ₹${totalPrice}%0A%0APlease share payment link and estimated dispatch date!`;

    window.open(`https://wa.me/919826012345?text=${message}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '520px', padding: '28px' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid #eeddc7' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={20} style={{ color: '#c2410c' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1c1917' }}>Your Family Snack Tray</h3>
              <p style={{ fontSize: '0.78rem', color: '#78716c' }}>{totalItemsCount} items selected ({(totalWeightGrams / 1000).toFixed(1)} kg)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f5f5f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        {boxItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <span style={{ fontSize: '42px', display: 'block', marginBottom: '10px' }}>🧺</span>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1c1917', marginBottom: '6px' }}>Your Tray is Empty</h4>
            <p style={{ fontSize: '0.86rem', color: '#78716c', marginBottom: '20px' }}>
              Add snacks from the catalog or customize your own 4-pack / 6-pack festive family box!
            </p>
            <button
              onClick={() => { onClose(); onOpenCustomizer(); }}
              className="btn-primary"
            >
              Open Family Box Builder
            </button>
          </div>
        ) : (
          <div style={{ marginTop: '16px' }}>
            {/* Items List */}
            <div style={{ maxHeight: '320px', overflowY: 'auto', paddingRight: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {boxItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.weight}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    borderRadius: '12px',
                    background: '#fcfaf5',
                    border: '1px solid #eeddc7',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                      <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1c1917' }}>{item.product.name}</h4>
                      <p style={{ fontSize: '0.75rem', color: '#78716c' }}>
                        Pack: <strong>{item.weight}</strong> • ₹{item.product.prices[item.weight]} each
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Quantity Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#ffffff', borderRadius: '8px', border: '1px solid #eeddc7', padding: '2px 6px' }}>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.weight, -1)}
                        style={{ padding: '2px', color: '#78716c' }}
                      >
                        <Minus size={13} />
                      </button>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, minWidth: '16px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.weight, 1)}
                        style={{ padding: '2px', color: '#78716c' }}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Total item price */}
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#9a3412', minWidth: '45px', textAlign: 'right' }}>
                      ₹{item.product.prices[item.weight] * item.quantity}
                    </span>

                    {/* Delete item */}
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.weight)}
                      style={{ color: '#ef4444', padding: '4px' }}
                      title="Remove"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Action Footer */}
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #eeddc7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#78716c' }}>Estimated Total:</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#9a3412' }}>
                    ₹{totalPrice}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClearBox}
                  style={{ fontSize: '0.78rem', color: '#78716c', textDecoration: 'underline' }}
                >
                  Clear Tray
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="btn-gold"
                  style={{ padding: '12px', justifyContent: 'center' }}
                >
                  <Share2 size={16} />
                  <span>Order Tray on WhatsApp</span>
                </button>

                <button
                  onClick={() => { onClose(); onOpenCustomizer(); }}
                  className="btn-secondary"
                  style={{ padding: '10px', justifyContent: 'center', fontSize: '0.86rem' }}
                >
                  <span>Open Custom Hamper Designer</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
