import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FlavorFinderQuiz } from './components/FlavorFinderQuiz';
import { FamilyBoxBuilder } from './components/FamilyBoxBuilder';
import { PurityGuarantee } from './components/PurityGuarantee';
import { ProductCatalog } from './components/ProductCatalog';
import { FamilyTestimonials } from './components/FamilyTestimonials';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { BoxDrawerModal } from './components/BoxDrawerModal';
import { BulkInquiryModal } from './components/BulkInquiryModal';
import { CatalogDownloadModal } from './components/CatalogDownloadModal';
import { PRODUCTS } from './data/products';
import type { BoxItem, Product } from './types';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Initialize with 2 popular snacks in the box as an appetizing demo
  const [boxItems, setBoxItems] = useState<BoxItem[]>([
    { product: PRODUCTS[0], weight: '400g', quantity: 1 },
    { product: PRODUCTS[2], weight: '400g', quantity: 1 }, // Soya Chips
  ]);

  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [isBoxDrawerOpen, setIsBoxDrawerOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isCatalogDownloadOpen, setIsCatalogDownloadOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add snack to box
  const handleAddToBox = (product: Product, weight: '200g' | '400g' | '1kg') => {
    setBoxItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.weight === weight
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, weight, quantity: 1 }];
      }
    });

    showToast(`Added ${product.name} (${weight}) to your Family Box! 📦`);
  };

  // Remove snack from box
  const handleRemoveFromBox = (productId: string, weight: string) => {
    setBoxItems((prev) => prev.filter((item) => !(item.product.id === productId && item.weight === weight)));
  };

  // Update quantity in box
  const handleUpdateQuantity = (productId: string, weight: string, delta: number) => {
    setBoxItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.weight === weight) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as BoxItem[];
    });
  };

  // Clear all items in box
  const handleClearBox = () => {
    setBoxItems([]);
    showToast('Cleared your Family Box items.');
  };

  // Smooth scroll to section
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fcf9f2' }}>
      
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 2000,
          background: '#1c1917',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '30px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid #c2410c',
          animation: 'fadeIn 0.25s ease-out'
        }}>
          <CheckCircle2 size={18} style={{ color: '#4ade80' }} />
          <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{toastMessage}</span>
        </div>
      )}

      {/* Header with Navigation, Live Box Cart & Download Button */}
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        boxItems={boxItems}
        onOpenBoxModal={() => setIsBoxDrawerOpen(true)}
        onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        onOpenCatalogDownload={() => setIsCatalogDownloadOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => handleNavigateSection('catalog')}
          onStartQuiz={() => handleNavigateSection('flavor-finder')}
          onOpenBoxBuilder={() => handleNavigateSection('family-box')}
          onOpenCatalogDownload={() => setIsCatalogDownloadOpen(true)}
        />

        {/* Unique Element 1: Desi Flavor & Spice Matchmaker Quiz */}
        <FlavorFinderQuiz
          onAddToBox={handleAddToBox}
          onOpenProductModal={(product) => setActiveProductModal(product)}
        />

        {/* Unique Element 2: Build Your Desi Family Snack Box Customizer */}
        <FamilyBoxBuilder
          boxItems={boxItems}
          onAddToBox={handleAddToBox}
          onRemoveFromBox={handleRemoveFromBox}
          onClearBox={handleClearBox}
        />

        {/* Unique Element 3: The 4-Pillar Purohit Crunch & Purity Guarantee */}
        <PurityGuarantee />

        {/* Comprehensive Product Catalog with Download Action */}
        <ProductCatalog
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOpenProductModal={(product) => setActiveProductModal(product)}
          onAddToBox={handleAddToBox}
          onOpenCatalogDownload={() => setIsCatalogDownloadOpen(true)}
        />

        {/* Indian Family Testimonials */}
        <FamilyTestimonials />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        onOpenCatalogDownload={() => setIsCatalogDownloadOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToBox={handleAddToBox}
      />

      {/* Slide-out Box Drawer / Cart Modal */}
      <BoxDrawerModal
        isOpen={isBoxDrawerOpen}
        onClose={() => setIsBoxDrawerOpen(false)}
        boxItems={boxItems}
        onRemoveItem={handleRemoveFromBox}
        onUpdateQuantity={handleUpdateQuantity}
        onOpenCustomizer={() => handleNavigateSection('family-box')}
        onClearBox={handleClearBox}
      />

      {/* Bulk & Wholesale Inquiry Modal */}
      <BulkInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      {/* Printable / Downloadable Product Catalog PDF Modal */}
      <CatalogDownloadModal
        isOpen={isCatalogDownloadOpen}
        onClose={() => setIsCatalogDownloadOpen(false)}
      />

    </div>
  );
}

export default App;
