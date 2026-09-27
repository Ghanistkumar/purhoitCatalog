import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const FamilyTestimonials: React.FC = () => {
  return (
    <section id="testimonials" style={{
      padding: '72px 0',
      background: '#ffffff',
      borderBottom: '1px solid #eeddc7',
    }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            marginBottom: '14px'
          }}>
            <Heart size={16} style={{ color: '#dc2626' }} fill="#dc2626" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#991b1b', textTransform: 'uppercase' }}>
              From Indian Dining Tables
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#1c1917', marginBottom: '12px' }}>
            Loved Across Generations of Indian Families
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#57534e' }}>
            Hear from our loyal patrons who have made Purohit Namkeen an inseparable part of their morning poha, evening chai, and Diwali celebrations.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '26px'
        }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              style={{
                background: '#fffbf5',
                borderRadius: '20px',
                border: '1.5px solid #eeddc7',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 6px 18px rgba(67, 30, 8, 0.05)',
                position: 'relative'
              }}
            >
              <div>
                {/* Star Ratings */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <Quote size={28} style={{ color: '#fdba74', marginBottom: '8px', opacity: 0.7 }} />

                <p style={{ fontSize: '0.94rem', color: '#44403c', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info & Favorite Snack */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid #eeddc7', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  fontSize: '28px',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#ffedd5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #fed7aa'
                }}>
                  {t.avatar}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#1c1917' }}>
                    {t.name}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#78716c' }}>
                    {t.familyRole} • {t.location}
                  </p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#c2410c', display: 'inline-block', marginTop: '2px' }}>
                    Fav: {t.favoriteSnack}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
