import React, { useState } from 'react';
import { X, ShoppingBag, Share2, Check } from 'lucide-react';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToBox: (product: Product, weight: '200g' | '400g' | '1kg') => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToBox,
}) => {
  if (!product) return null;

  const [selectedWeight, setSelectedWeight] = useState<'200g' | '400g' | '1kg'>(product.defaultWeight);
  const [isAdded, setIsAdded] = useState(false);

  const price = product.prices[selectedWeight];

  const handleAdd = () => {
    onAddToBox(product, selectedWeight);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const handleWhatsAppProduct = () => {
    const text = `*Namaste Purohit Namkeen!* 🙏%0AI am interested in ordering *${product.name}* (${selectedWeight} pack, ₹${price}). Please share delivery availability!`;
    window.open(`https://wa.me/919826012345?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '0', overflow: 'hidden' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid #eeddc7',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1c1917',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
          {/* Left Column: Image & Highlights */}
          <div style={{ position: 'relative', minHeight: '300px', backgroundColor: '#fef3c7' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="badge-tag" style={{ background: '#ffffff', color: '#15803d' }}>
                <span className="veg-badge" style={{ transform: 'scale(0.8)' }}></span> 100% Pure Veg
              </span>
              <span className="badge-tag" style={{ background: '#ffffff', color: '#c2410c' }}>
                {product.badge || 'Artisanal Batch'}
              </span>
            </div>
          </div>

          {/* Right Column: Information & Nutrition */}
          <div style={{ padding: '28px', maxHeight: '80vh', overflowY: 'auto' }}>
            
            {/* Category & Hindi */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#c2410c', textTransform: 'uppercase' }}>
                {product.categoryLabel}
              </span>
              <span style={{ fontSize: '1rem', color: '#9a3412', fontWeight: 700 }} className="hindi-title">
                {product.hindiName}
              </span>
            </div>

            {/* Title */}
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1c1917', marginBottom: '6px' }}>
              {product.name}
            </h2>

            {/* Tagline */}
            <p style={{ fontSize: '0.88rem', color: '#d97706', fontWeight: 600, marginBottom: '14px' }}>
              {product.tagline}
            </p>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', color: '#57534e', lineHeight: 1.6, marginBottom: '18px' }}>
              {product.description}
            </p>

            {/* Spice Meter & Pairing */}
            <div style={{
              background: '#fef6ee',
              borderRadius: '14px',
              padding: '12px 16px',
              border: '1px solid #fed7aa',
              marginBottom: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9a3412' }}>Spice Level:</span>
                <span style={{ fontSize: '0.85rem' }}>
                  {'🌶️'.repeat(product.spiceLevel)} ({product.spiceLevel}/5)
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#78716c' }}>
                <strong>Best Paired With:</strong> {product.bestPairing}
              </div>
            </div>

            {/* Ingredients */}
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1c1917', marginBottom: '8px' }}>
                Pure Authentic Ingredients:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {product.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.76rem',
                      background: '#f5f5f4',
                      color: '#44403c',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: '1px solid #e7e5e4'
                    }}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition per 100g */}
            <div style={{ marginBottom: '22px' }}>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1c1917', marginBottom: '8px' }}>
                Nutritional Values (Approx per 100g):
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
                textAlign: 'center',
                background: '#fafaf9',
                padding: '10px',
                borderRadius: '12px',
                border: '1px solid #e7e5e4'
              }}>
                <div>
                  <span style={{ fontSize: '0.68rem', color: '#78716c' }}>Energy</span>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#1c1917' }}>{product.nutrition.calories}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.68rem', color: '#78716c' }}>Protein</span>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#15803d' }}>{product.nutrition.protein}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.68rem', color: '#78716c' }}>Carbs</span>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#1c1917' }}>{product.nutrition.carbs}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.68rem', color: '#78716c' }}>Fats</span>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#1c1917' }}>{product.nutrition.fats}</div>
                </div>
              </div>
            </div>

            {/* Weight Pack Options */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#78716c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Select Pack Size:
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {product.weightOptions.map((wt) => (
                  <button
                    key={wt}
                    type="button"
                    onClick={() => setSelectedWeight(wt)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      background: selectedWeight === wt ? '#ffedd5' : '#ffffff',
                      color: selectedWeight === wt ? '#c2410c' : '#57534e',
                      border: selectedWeight === wt ? '2px solid #c2410c' : '1px solid #eeddc7',
                    }}
                  >
                    {wt}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid #eeddc7'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#78716c' }}>Pack Price</span>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#9a3412' }}>
                  ₹{price}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={handleWhatsAppProduct}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #22c55e',
                    background: '#f0fdf4',
                    color: '#15803d',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                  title="Direct WhatsApp Query"
                >
                  <Share2 size={16} />
                  <span>Inquire</span>
                </button>

                <button
                  type="button"
                  onClick={handleAdd}
                  className="btn-primary"
                  style={{
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    background: isAdded ? '#15803d' : undefined
                  }}
                >
                  {isAdded ? (
                    <>
                      <Check size={16} />
                      <span>Added to Box!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      <span>Pack into Box</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
