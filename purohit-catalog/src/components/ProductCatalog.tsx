import React, { useState, useMemo } from 'react';
import { 
  Eye, 
  ShoppingBag, 
  Sparkles, 
  Filter, 
  Check,
  Download
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import type { Product } from '../types';

interface ProductCatalogProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onOpenProductModal: (product: Product) => void;
  onAddToBox: (product: Product, weight: '200g' | '400g' | '1kg') => void;
  onOpenCatalogDownload: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchTerm,
  onSearchChange,
  onOpenProductModal,
  onAddToBox,
  onOpenCatalogDownload,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFilterTag, setActiveFilterTag] = useState<string>('all');
  const [selectedWeights, setSelectedWeights] = useState<Record<string, '200g' | '400g' | '1kg'>>({});
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  // Filter products by category, search term, and quick tags
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      // Search term filter
      const matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.hindiName.includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      // Quick filter tags
      let matchesTag = true;
      if (activeFilterTag === 'bestseller') {
        matchesTag = product.isBestseller === true;
      } else if (activeFilterTag === 'diet') {
        matchesTag = product.category === 'healthy-roasted' || product.isDietFriendly === true;
      } else if (activeFilterTag === 'spicy') {
        matchesTag = product.spiceLevel >= 3;
      } else if (activeFilterTag === 'mild') {
        matchesTag = product.spiceLevel <= 2;
      } else if (activeFilterTag === 'festive') {
        matchesTag = product.isFestiveSpecial === true || product.category === 'festive-sweets';
      }

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [selectedCategory, searchTerm, activeFilterTag]);

  // Handle weight change for a product card
  const handleWeightChange = (productId: string, weight: '200g' | '400g' | '1kg') => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: weight,
    }));
  };

  const handleAddAndAnimate = (product: Product, weight: '200g' | '400g' | '1kg') => {
    onAddToBox(product, weight);
    setAddedAnimation(product.id);
    setTimeout(() => setAddedAnimation(null), 1200);
  };

  return (
    <section id="catalog" style={{
      padding: '72px 0',
      background: '#fcf9f2',
      borderBottom: '1px solid #eeddc7'
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#ffedd5',
            border: '1px solid #fed7aa',
            marginBottom: '14px'
          }}>
            <Sparkles size={16} style={{ color: '#c2410c' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9a3412', textTransform: 'uppercase' }}>
              Handcrafted Malwa Snacks
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: '#1c1917', marginBottom: '12px' }}>
            Explore Our Pure Namkeen Catalog
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#57534e' }}>
            From our hallmark Ratlami Sev and royal mixtures to guilt-free roasted makhana, every bite is cooked with uncompromised traditional hygiene and pure groundnut oil.
          </p>
        </div>

        {/* Category Tabs Pill Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '14px',
          marginBottom: '24px',
          scrollbarWidth: 'none',
        }}>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  whiteSpace: 'nowrap',
                  background: isSelected ? 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#57534e',
                  border: isSelected ? '1px solid #c2410c' : '1.5px solid #eeddc7',
                  boxShadow: isSelected ? '0 4px 12px rgba(194, 65, 12, 0.25)' : 'none',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Filter Tag Chips & Search Status */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '32px',
          padding: '12px 18px',
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #eeddc7'
        }}>
          {/* Quick Tag Selectors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#78716c', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} /> Quick Filter:
            </span>

            {[
              { id: 'all', label: 'All' },
              { id: 'bestseller', label: '👑 Bestsellers' },
              { id: 'diet', label: '🌿 Diet & Roasted' },
              { id: 'spicy', label: '🔥 Spicy (Teekha)' },
              { id: 'mild', label: '🍋 Mild / Sweet' },
              { id: 'festive', label: '🎁 Festive Special' },
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveFilterTag(tag.id)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '14px',
                  background: activeFilterTag === tag.id ? '#ffedd5' : '#f5f5f4',
                  color: activeFilterTag === tag.id ? '#c2410c' : '#57534e',
                  border: activeFilterTag === tag.id ? '1px solid #fdba74' : '1px solid transparent',
                }}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Results Count & Download Catalog Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '0.84rem', color: '#78716c', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Showing <strong>{filteredProducts.length}</strong> delicacies</span>
              {searchTerm && (
                <button 
                  onClick={() => onSearchChange('')} 
                  style={{ fontSize: '0.78rem', color: '#c2410c', textDecoration: 'underline' }}
                >
                  Clear Search "{searchTerm}"
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={onOpenCatalogDownload}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fff7ed',
                color: '#c2410c',
                border: '1px solid #fdba74',
                padding: '6px 14px',
                borderRadius: '16px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
              title="Download or Print full price sheet PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Empty Search Result */}
        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: '#ffffff',
            borderRadius: '20px',
            border: '1.5px dashed #eeddc7'
          }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '12px' }}>🥣</span>
            <h3 style={{ fontSize: '1.25rem', color: '#1c1917', marginBottom: '8px' }}>No snacks matched your search</h3>
            <p style={{ fontSize: '0.92rem', color: '#78716c', marginBottom: '18px' }}>Try searching for "Sev", "Makhana", "Bhujia", or clear your filters.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setActiveFilterTag('all'); onSearchChange(''); }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '26px'
        }}>
          {filteredProducts.map((product) => {
            const currentWeight = selectedWeights[product.id] || product.defaultWeight;
            const currentPrice = product.prices[currentWeight];
            const isJustAdded = addedAnimation === product.id;

            return (
              <div
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #eeddc7',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 6px 18px rgba(67, 30, 8, 0.05)',
                  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s',
                  position: 'relative',
                }}
                className="product-card"
              >
                {/* Product Image Container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '210px',
                  backgroundColor: '#fef3c7',
                  overflow: 'hidden'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    className="product-img"
                  />

                  {/* Veg Indicator Badge */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
                    <span className="veg-badge" title="100% Pure Vegetarian"></span>
                  </div>

                  {/* Ribbon Badge (Bestseller, Festive, etc.) */}
                  {product.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#9a3412',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '14px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                      border: '1px solid #fde68a'
                    }}>
                      {product.badge}
                    </div>
                  )}

                  {/* Spice Heat Bar at bottom of image */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '16px 12px 6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                  }}>
                    <span style={{ fontWeight: 600 }}>Spice Meter:</span>
                    <span title={`Spice level: ${product.spiceLevel} of 5`}>
                      {'🌶️'.repeat(product.spiceLevel)}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Category & Hindi Name */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#c2410c', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {product.categoryLabel}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#9a3412', fontWeight: 600 }} className="hindi-title">
                      {product.hindiName}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#1c1917', marginBottom: '6px', lineHeight: 1.25 }}>
                    {product.name}
                  </h3>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.86rem', color: '#57534e', lineHeight: 1.45, marginBottom: '14px', flex: 1 }}>
                    {product.shortDesc}
                  </p>

                  {/* Weight Selector Pills */}
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                      Select Pack Size:
                    </span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {product.weightOptions.map((wt) => {
                        const isChosen = currentWeight === wt;

                        return (
                          <button
                            key={wt}
                            type="button"
                            onClick={() => handleWeightChange(product.id, wt)}
                            style={{
                              flex: 1,
                              padding: '5px 8px',
                              borderRadius: '8px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              background: isChosen ? '#ffedd5' : '#f5f5f4',
                              color: isChosen ? '#c2410c' : '#57534e',
                              border: isChosen ? '1.5px solid #c2410c' : '1px solid #e7e5e4',
                            }}
                          >
                            {wt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div style={{
                    paddingTop: '14px',
                    borderTop: '1px solid #f2e7d5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px'
                  }}>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#78716c' }}>Price for {currentWeight}</span>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#9a3412', lineHeight: 1.1 }}>
                        ₹{currentPrice}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        onClick={() => onOpenProductModal(product)}
                        style={{
                          padding: '10px',
                          borderRadius: '10px',
                          border: '1.5px solid #eeddc7',
                          background: '#ffffff',
                          color: '#57534e',
                        }}
                        title="View Detailed Nutrition & Ingredients"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleAddAndAnimate(product, currentWeight)}
                        className="btn-primary"
                        style={{
                          padding: '10px 14px',
                          borderRadius: '10px',
                          fontSize: '0.84rem',
                          background: isJustAdded ? '#15803d' : undefined,
                        }}
                      >
                        {isJustAdded ? (
                          <>
                            <Check size={16} />
                            <span>Packed!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={16} />
                            <span>Add to Box</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(67, 30, 8, 0.12) !important;
        }
        .product-card:hover .product-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
};
