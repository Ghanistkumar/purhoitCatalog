import { useState } from 'react';

const products = [
  {
    name: 'Soya Sticks',
    category: 'Namkeen',
    description: 'Crunchy, light and perfectly seasoned.',
    image: '/products/soya-sticks.png',
    tag: 'CLASSIC',
  },
  {
    name: 'Soya Chips',
    category: 'Namkeen',
    description: 'Crispy bites packed with irresistible flavour.',
    image: '/products/soya-chips.png',
    tag: 'POPULAR',
  },
  {
    name: 'Masala Sev',
    category: 'Namkeen',
    description: 'Traditional Indian crunch with a spicy twist.',
    image: '/products/masala-sev.png',
    tag: 'BESTSELLER',
  },
  {
    name: 'Makhani Paneer Puff',
    category: 'Fusion Puffs',
    description: 'Rich makhani flavour wrapped in a golden puff.',
    image: '/products/makhani-paneer.png',
    tag: 'FUSION',
  },
  {
    name: 'Mexican Cheese Puff',
    category: 'Fusion Puffs',
    description: 'Desi crunch meets cheesy Mexican flavours.',
    image: '/products/mexican-cheese.png',
    tag: 'NEW',
  },
  {
    name: 'Rajwadi Puff',
    category: 'Fusion Puffs',
    description: 'A royal Indian-inspired fusion in every bite.',
    image: '/products/rajwadi-puff.png',
    tag: 'SPECIAL',
  },
];

const categories = ['All', 'Namkeen', 'Fusion Puffs', 'Mamara'];

export function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadCatalog = () => {
    const fileId = '1CG36zoHfH9oM5MPtLZJdj3D0TpG5l9rD';
    const downloadUrl =
      `https://drive.google.com/uc?export=download&id=${fileId}`;

    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInstagram = () => {
    window.open(
      'https://www.instagram.com/purohitnamkeenofficial/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f7f2e9;
          color: #171513;
          font-family: 'DM Sans', sans-serif;
        }

        button {
          font-family: inherit;
        }

        .page {
          overflow: hidden;
          background:
            radial-gradient(circle at 85% 8%, rgba(238, 105, 0, 0.10), transparent 25%),
            #f7f2e9;
        }

        /* NAVBAR */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6vw;
          background: rgba(247, 242, 233, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(23, 21, 19, 0.08);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
          text-decoration: none;
          color: #171513;
        }

        .brand img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 50%;
        }

        .brand-name {
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .brand-sub {
          font-size: 9px;
          letter-spacing: 2px;
          color: #ed6500;
          font-weight: 700;
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .nav-links a {
          color: #34302b;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .nav-links a:hover {
          color: #ed6500;
        }

        .nav-button {
          border: none;
          padding: 11px 19px;
          border-radius: 30px;
          background: #ed6500;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        /* HERO */

        .hero {
          min-height: calc(100vh - 78px);
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 50px;
          padding: 70px 7vw 90px;
          position: relative;
        }

        .hero-left {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 14px;
          border-radius: 30px;
          background: #fff8ee;
          border: 1px solid #eadbc9;
          color: #e96000;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .eyebrow span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ed6500;
        }

        .hero h1 {
          margin: 25px 0 20px;
          max-width: 760px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(58px, 7vw, 105px);
          line-height: 0.91;
          letter-spacing: -5px;
          font-weight: 800;
        }

        .hero h1 em {
          color: #ed6500;
          font-style: normal;
        }

        .hero-description {
          max-width: 560px;
          font-size: 18px;
          line-height: 1.65;
          color: #665f57;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          border-radius: 50px;
          padding: 15px 24px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .primary-button {
          border: none;
          background: #ed6500;
          color: white;
          box-shadow: 0 14px 30px rgba(237, 101, 0, 0.20);
        }

        .primary-button:hover {
          transform: translateY(-3px);
          background: #cf5500;
        }

        .secondary-button {
          border: 1px solid #d8cbbb;
          background: transparent;
          color: #28231f;
        }

        .secondary-button:hover {
          background: #fffaf3;
          transform: translateY(-3px);
        }

        .hero-stats {
          display: flex;
          gap: 42px;
          margin-top: 50px;
          padding-top: 25px;
          border-top: 1px solid #ddd1c3;
        }

        .stat strong {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 31px;
        }

        .stat span {
          color: #766e65;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }

        /* HERO PRODUCT VISUAL */

        .hero-visual {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orange-circle {
          position: absolute;
          width: min(520px, 80vw);
          height: min(520px, 80vw);
          border-radius: 50%;
          background: #ed6500;
          right: -30px;
          top: 30px;
        }

        .visual-card {
          position: relative;
          z-index: 2;
          width: min(410px, 80vw);
          min-height: 490px;
          padding: 25px;
          border-radius: 28px;
          background: #fffaf4;
          border: 1px solid rgba(255,255,255,.9);
          box-shadow: 0 35px 70px rgba(52, 38, 24, 0.18);
          transform: rotate(3deg);
        }

        .visual-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .visual-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #ed6500;
        }

        .visual-number {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
        }

        .snack-art {
          height: 310px;
          margin: 20px 0;
          border-radius: 22px;
          background:
            radial-gradient(circle at 30% 25%, #f8d18e 0 8%, transparent 9%),
            radial-gradient(circle at 70% 70%, #d6812d 0 10%, transparent 11%),
            radial-gradient(circle at 45% 70%, #edac4d 0 9%, transparent 10%),
            linear-gradient(145deg, #f1b65c, #d96b0e);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .snack-art::before {
          content: '';
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(255, 228, 168, 0.45);
          position: absolute;
        }

        .snack-bowl {
          width: 240px;
          height: 110px;
          border-radius: 0 0 120px 120px;
          background: #9f3500;
          border: 8px solid #702400;
          position: relative;
          z-index: 2;
          transform: translateY(40px);
        }

        .snack-bowl::before {
          content: '';
          position: absolute;
          width: 210px;
          height: 100px;
          border-radius: 50%;
          background: #e9a23e;
          left: 7px;
          top: -45px;
        }

        .visual-bottom {
          display: flex;
          justify-content: space-between;
          align-items: end;
        }

        .visual-bottom h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          margin: 0;
        }

        .visual-bottom p {
          margin: 5px 0 0;
          color: #777067;
          font-size: 12px;
        }

        .seal {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #ed6500;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 8px;
          line-height: 1.2;
          font-weight: 800;
        }

        /* MARQUEE */

        .marquee {
          background: #181513;
          color: white;
          padding: 17px 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-inner {
          display: inline-flex;
          gap: 35px;
          animation: move 25s linear infinite;
        }

        .marquee span {
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .marquee .dot {
          color: #ed6500;
        }

        @keyframes move {
          from { transform: translateX(0); }
          to { transform: translateX(-30%); }
        }

        /* PRODUCTS */

        .section {
          padding: 110px 7vw;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 45px;
        }

        .section-kicker {
          color: #ed6500;
          font-size: 11px;
          letter-spacing: 2px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .section-title {
          margin: 8px 0 0;
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 5vw, 67px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .section-description {
          max-width: 400px;
          color: #756d65;
          line-height: 1.6;
          font-size: 14px;
        }

        .categories {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .category {
          border: 1px solid #d8cbbb;
          background: transparent;
          border-radius: 30px;
          padding: 10px 18px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          color: #4e4841;
        }

        .category.active,
        .category:hover {
          background: #ed6500;
          color: white;
          border-color: #ed6500;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .product-card {
          background: #fffaf4;
          border: 1px solid #e5d9cb;
          border-radius: 22px;
          overflow: hidden;
          transition: 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(51, 35, 19, 0.12);
        }

        .product-image {
          height: 270px;
          margin: 10px;
          border-radius: 17px;
          background:
            radial-gradient(circle at 30% 35%, #f3ca82 0 7%, transparent 8%),
            radial-gradient(circle at 65% 65%, #d47a1c 0 9%, transparent 10%),
            linear-gradient(145deg, #f7d697, #e97a18);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 2;
        }

        .product-image-placeholder {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(255,255,255,.28);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          color: #7b3709;
          font-weight: 800;
          font-size: 15px;
          position: relative;
          z-index: 2;
        }

        .product-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 4;
          padding: 6px 9px;
          background: #181513;
          color: white;
          border-radius: 4px;
          font-size: 8px;
          letter-spacing: 1px;
          font-weight: 800;
        }

        .product-info {
          padding: 8px 20px 22px;
        }

        .product-category {
          color: #ed6500;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 800;
        }

        .product-info h3 {
          margin: 7px 0 5px;
          font-family: 'Playfair Display', serif;
          font-size: 25px;
        }

        .product-info p {
          margin: 0;
          color: #777067;
          font-size: 13px;
          line-height: 1.5;
        }

        /* STORY */

        .story {
          padding: 30px 7vw 110px;
        }

        .story-box {
          background: #1a1714;
          color: white;
          border-radius: 32px;
          min-height: 580px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          overflow: hidden;
        }

        .story-visual {
          position: relative;
          background:
            linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.3)),
            #ed6500;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }

        .story-circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: #f7f2e9;
          position: absolute;
        }

        .story-initial {
          position: relative;
          z-index: 2;
          font-family: 'Playfair Display', serif;
          font-size: 150px;
          font-weight: 800;
          color: #ed6500;
        }

        .story-content {
          padding: 70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story-content .section-kicker {
          color: #ff7920;
        }

        .story-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(43px, 5vw, 68px);
          line-height: .98;
          margin: 12px 0 25px;
        }

        .story-content p {
          color: #bdb6af;
          line-height: 1.75;
          font-size: 15px;
          max-width: 580px;
        }

        .founder {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 25px;
        }

        .founder-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ed6500;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .founder strong {
          display: block;
          font-size: 14px;
        }

        .founder span {
          display: block;
          color: #8f8880;
          font-size: 11px;
          margin-top: 3px;
        }

        /* QUALITY */

        .quality {
          padding: 0 7vw 110px;
        }

        .quality-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #d8cbbb;
          border-bottom: 1px solid #d8cbbb;
        }

        .quality-item {
          padding: 35px 25px;
          border-right: 1px solid #d8cbbb;
        }

        .quality-item:last-child {
          border-right: none;
        }

        .quality-number {
          color: #ed6500;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .quality-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          margin: 15px 0 8px;
        }

        .quality-item p {
          margin: 0;
          color: #756d65;
          line-height: 1.5;
          font-size: 12px;
        }

        /* CTA */

        .cta {
          margin: 0 7vw 80px;
          padding: 75px 50px;
          border-radius: 30px;
          background: #ed6500;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta::before,
        .cta::after {
          content: '';
          position: absolute;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 50%;
        }

        .cta::before {
          width: 400px;
          height: 400px;
          left: -180px;
          top: -220px;
        }

        .cta::after {
          width: 500px;
          height: 500px;
          right: -230px;
          bottom: -350px;
        }

        .cta h2 {
          position: relative;
          z-index: 2;
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 65px);
          margin: 0 0 14px;
        }

        .cta p {
          position: relative;
          z-index: 2;
          max-width: 540px;
          margin: 0 auto 28px;
          color: rgba(255,255,255,.82);
          line-height: 1.6;
        }

        .cta-button {
          position: relative;
          z-index: 2;
          border: none;
          background: #181513;
          color: white;
          border-radius: 50px;
          padding: 15px 25px;
          font-weight: 700;
          cursor: pointer;
        }

        /* FOOTER */

        footer {
          padding: 35px 7vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #ded3c6;
          color: #756d65;
          font-size: 12px;
        }

        .footer-brand {
          font-weight: 800;
          color: #171513;
        }

        .footer-instagram {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 12px;
          color: #756d65;
        }

        .footer-instagram:hover {
          color: #ed6500;
        }

        /* RESPONSIVE */

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          padding: 10px;
          border: 1px solid #d8cbbb;
          border-radius: 12px;
          background: #fffaf4;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
        }

        .menu-toggle span {
          display: block;
          width: 21px;
          height: 2px;
          border-radius: 2px;
          background: #171513;
          transition: 0.2s ease;
        }

        @media (max-width: 1100px) {
          .navbar {
            padding: 0 4vw;
          }

          .hero {
            grid-template-columns: 1fr 0.9fr;
            gap: 25px;
            padding-left: 5vw;
            padding-right: 5vw;
          }

          .hero h1 {
            font-size: clamp(52px, 7vw, 78px);
            letter-spacing: -4px;
          }

          .visual-card {
            width: min(380px, 90%);
          }

          .section,
          .quality {
            padding-left: 5vw;
            padding-right: 5vw;
          }

          .story {
            padding-left: 5vw;
            padding-right: 5vw;
          }

          .story-content {
            padding: 55px;
          }
        }

        @media (max-width: 900px) {
          .navbar {
            height: 70px;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: calc(100% + 1px);
            left: 14px;
            right: 14px;
            padding: 12px;
            flex-direction: column;
            align-items: stretch;
            gap: 4px;
            background: rgba(255, 250, 244, 0.98);
            border: 1px solid #e5d9cb;
            border-radius: 16px;
            box-shadow: 0 18px 40px rgba(52, 38, 24, 0.12);
            backdrop-filter: blur(18px);
          }

          .nav-links.mobile-open {
            display: flex;
          }

          .nav-links a {
            padding: 13px 14px;
            border-radius: 10px;
          }

          .nav-links a:hover,
          .nav-links a:focus-visible {
            background: #fff1e2;
            outline: none;
          }

          .menu-toggle {
            display: flex;
          }

          .nav-button {
            padding: 10px 15px;
          }

          .hero {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-top: 55px;
            padding-bottom: 70px;
          }

          .hero-left {
            max-width: 760px;
          }

          .hero-visual {
            min-height: 510px;
            margin-top: 5px;
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .story-box {
            grid-template-columns: 1fr;
          }

          .story-content {
            padding: 50px 40px;
          }

          .quality-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .quality-item:nth-child(2) {
            border-right: none;
          }

          .quality-item:nth-child(-n+2) {
            border-bottom: 1px solid #d8cbbb;
          }
        }

        @media (max-width: 600px) {
          html {
            overflow-x: hidden;
          }

          body {
            width: 100%;
            overflow-x: hidden;
          }

          .page {
            width: 100%;
            overflow-x: clip;
          }

          .navbar {
            height: 66px;
            padding: 0 16px;
          }

          .brand {
            gap: 9px;
            min-width: 0;
          }

          .brand img {
            width: 42px;
            height: 42px;
          }

          .brand-name {
            font-size: 15px;
            line-height: 1.1;
          }

          .brand-sub {
            font-size: 7px;
            letter-spacing: 1.5px;
          }

          .nav-actions {
            gap: 7px;
          }

          .nav-button {
            font-size: 11px;
            padding: 9px 12px;
          }

          .menu-toggle {
            width: 40px;
            height: 40px;
          }

          .hero {
            padding: 38px 18px 55px;
            gap: 25px;
          }

          .eyebrow {
            max-width: 100%;
            font-size: 9px;
            padding: 7px 11px;
            letter-spacing: 1.1px;
          }

          .hero h1 {
            margin: 19px 0 17px;
            font-size: clamp(43px, 14vw, 58px);
            line-height: 0.94;
            letter-spacing: -2.5px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.65;
            margin-bottom: 24px;
          }

          .hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
            min-height: 48px;
            padding: 13px 18px;
          }

          .hero-stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
            margin-top: 34px;
            padding-top: 20px;
          }

          .stat strong {
            font-size: 22px;
          }

          .stat span {
            display: block;
            font-size: 8px;
            line-height: 1.3;
            letter-spacing: 0.45px;
          }

          .hero-visual {
            min-height: 390px;
            width: 100%;
          }

          .orange-circle {
            width: 300px;
            height: 300px;
            right: 50%;
            top: 32px;
            transform: translateX(50%);
          }

          .visual-card {
            width: min(310px, calc(100vw - 48px));
            min-height: 365px;
            padding: 17px;
            border-radius: 22px;
            transform: rotate(2deg);
          }

          .visual-label {
            font-size: 8px;
            letter-spacing: 1.5px;
          }

          .visual-number {
            font-size: 22px;
          }

          .snack-art {
            height: 215px;
            margin: 14px 0;
            border-radius: 17px;
          }

          .visual-bottom h3 {
            font-size: 24px;
          }

          .visual-bottom p {
            font-size: 10px;
          }

          .seal {
            width: 48px;
            height: 48px;
            font-size: 7px;
          }

          .marquee {
            padding: 14px 0;
          }

          .marquee-inner {
            gap: 24px;
          }

          .marquee span {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .section,
          .quality {
            padding-left: 18px;
            padding-right: 18px;
          }

          .section {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .section-header {
            display: block;
            margin-bottom: 28px;
          }

          .section-title {
            font-size: clamp(38px, 12vw, 50px);
            letter-spacing: -1.5px;
          }

          .section-description {
            margin-top: 15px;
            font-size: 13px;
          }

          .categories {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 5px;
            margin-bottom: 24px;
            scrollbar-width: none;
          }

          .categories::-webkit-scrollbar {
            display: none;
          }

          .category {
            flex: 0 0 auto;
            padding: 9px 14px;
            font-size: 11px;
          }

          .product-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .product-card {
            border-radius: 18px;
          }

          .product-image {
            height: min(330px, 76vw);
            margin: 8px;
            border-radius: 14px;
          }

          .product-info {
            padding: 7px 17px 20px;
          }

          .product-info h3 {
            font-size: 23px;
          }

          .product-info p {
            font-size: 12px;
          }

          /* Founder/story section with inline styles overridden responsively */
          section#story {
            padding: 42px 14px !important;
          }

          section#story > div {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
            padding: 0 !important;
            border-radius: 22px !important;
            width: 100% !important;
          }

          section#story > div > div:first-child {
            width: 100% !important;
            flex: none !important;
            height: 360px !important;
            min-height: 360px !important;
            border-radius: 22px 22px 0 0 !important;
          }

          section#story > div > div:first-child > div:nth-child(1) {
            width: 290px !important;
            height: 290px !important;
          }

          section#story > div > div:first-child > div:nth-child(2) {
            width: 310px !important;
            height: 310px !important;
          }

          section#story > div > div:first-child > img {
            width: 94% !important;
            max-width: 390px !important;
            max-height: 350px !important;
          }

          section#story > div > div:first-child > div:nth-child(4) {
            left: 15px !important;
            bottom: 15px !important;
            padding: 10px 13px !important;
            border-radius: 12px !important;
          }

          section#story > div > div:first-child > div:nth-child(4) > div:last-child {
            font-size: 12px !important;
          }

          section#story > div > div:last-child {
            width: 100% !important;
            flex: none !important;
            padding: 38px 22px 42px !important;
          }

          section#story h2 {
            font-size: clamp(39px, 12vw, 53px) !important;
            line-height: 1 !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 21px !important;
          }

          section#story p {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }

          .quality {
            padding-top: 0;
            padding-bottom: 65px;
          }

          .quality-grid {
            grid-template-columns: 1fr;
          }

          .quality-item,
          .quality-item:nth-child(2) {
            border-right: none;
            border-bottom: 1px solid #d8cbbb;
            padding: 27px 20px;
          }

          .quality-item:last-child {
            border-bottom: none;
          }

          .quality-item h3 {
            font-size: 24px;
          }

          .cta {
            margin: 0 14px 45px;
            padding: 48px 20px;
            border-radius: 22px;
          }

          .cta h2 {
            font-size: clamp(37px, 11vw, 49px);
            line-height: 1;
          }

          .cta p {
            font-size: 13px;
            line-height: 1.6;
          }

          .cta-button {
            width: 100%;
            min-height: 48px;
            padding: 13px 18px;
          }

          footer {
            padding: 23px 18px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .footer-instagram {
            padding: 0;
          }
        }

        @media (max-width: 380px) {
          .brand-name {
            font-size: 13px;
          }

          .brand-sub {
            font-size: 6px;
          }

          .nav-button {
            display: none;
          }

          .hero {
            padding-left: 15px;
            padding-right: 15px;
          }

          .hero h1 {
            font-size: 44px;
          }

          .hero-stats {
            gap: 6px;
          }

          .stat strong {
            font-size: 20px;
          }

          .visual-card {
            width: calc(100vw - 34px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="page">

        {/* NAVIGATION */}
        <nav className="navbar">
          <a className="brand" href="#">
            <img src="/purohit-logo.jpg" alt="Purohit Namkeen" />

            <div>
              <div className="brand-name">Purohit Namkeen</div>
              <div className="brand-sub">SWAD JO RAHE YAAD</div>
            </div>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#quality" onClick={() => setMobileMenuOpen(false)}>Quality</a>
          </div>

          <div className="nav-actions">
            <button className="nav-button" onClick={handleDownloadCatalog}>
              View Catalog
            </button>

            <button
              className="menu-toggle"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">

          <div className="hero-left">

            <div className="eyebrow">
              <span />
              Since 2010 · Purohit Namkeen
            </div>

            <h1>
              India's
              <br />
              <em>crunchiest</em>
              <br />
              stories.
            </h1>

            <p className="hero-description">
              From timeless Indian namkeen to bold fusion flavours,
              Purohit brings together tradition, creativity and quality
              in every unforgettable bite.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={handleDownloadCatalog}
              >
                Explore Product Catalog →
              </button>

              <button
                className="secondary-button"
                onClick={handleInstagram}
              >
                Instagram ↗
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>60+</strong>
                <span>Fusion Variety</span>
              </div>

              <div className="stat">
                <strong>100%</strong>
                <span>Quality Focus</span>
              </div>

              <div className="stat">
                <strong>1000+</strong>
                <span>Retail Shops</span>
              </div>
            </div>

          </div>

          <div className="hero-visual">

            <div className="orange-circle" />

            <div className="visual-card">

              <div className="visual-top">
                <div className="visual-label">
                  PUROHIT COLLECTION
                </div>

                <div className="visual-number">
                  01
                </div>
              </div>
              <div className="snack-art">
                <img
                  src="/products.png"
                  alt="Purohit Namkeen Snacks"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "520px",
                    maxHeight: "520px",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                    margin: "0 auto",
                    borderRadius: "20px",
                  }}
                />
              </div>

              <div className="visual-bottom">
                <div>
                  <h3>Products</h3>
                  <p>Crispy · Savoury · Addictive</p>
                </div>

                <div className="seal">
                  MADE<br />
                  WITH<br />
                  CARE
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-inner">
            <span>PURE FLAVOUR</span>
            <span className="dot">●</span>
            <span>CRAZY CRUNCH</span>
            <span className="dot">●</span>
            <span>INDIAN SOUL</span>
            <span className="dot">●</span>
            <span>MODERN TWIST</span>
            <span className="dot">●</span>
            <span>PUROHIT NAMKEEN</span>
            <span className="dot">●</span>
            <span>PURE FLAVOUR</span>
            <span className="dot">●</span>
            <span>CRAZY CRUNCH</span>
          </div>
        </div>

        <section
          id="story"
          style={{
            width: "100%",
            padding: "70px 40px",
            boxSizing: "border-box",
            background: "#f6f1e9",
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: "70px",
              padding: "60px",
              boxSizing: "border-box",
              background: "#201e1c",
              borderRadius: "32px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* =====================================
        LEFT - FOUNDER IMAGE
    ====================================== */}
            <div
              style={{
                position: "relative",
                flex: "1 1 50%",
                minWidth: "0",
                height: "580px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                background: "#fffaf4",
                borderRadius: "35px",
                overflow: "hidden",
              }}
            >
              {/* Large orange circle */}
              <div
                style={{
                  position: "absolute",
                  width: "500px",
                  height: "500px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 30%, #ff9a3c 0%, #f56600 48%, #d94d00 100%)",
                  bottom: "-80px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />

              {/* Gold ring */}
              <div
                style={{
                  position: "absolute",
                  width: "530px",
                  height: "530px",
                  borderRadius: "50%",
                  border: "2px solid rgba(207, 151, 62, 0.55)",
                  bottom: "-95px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              />

              {/* Decorative dots */}
              <div
                style={{
                  position: "absolute",
                  top: "35px",
                  left: "35px",
                  width: "80px",
                  height: "80px",
                  backgroundImage:
                    "radial-gradient(#f56600 2px, transparent 2px)",
                  backgroundSize: "15px 15px",
                  opacity: 0.45,
                  zIndex: 3,
                }}
              />

              {/* Small decorative circle */}
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "50px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "#f56600",
                  zIndex: 3,
                }}
              />

              {/* Founder Image */}
              <img
                src="/founder.png"
                alt="Purohit Namkeen Founder"
                style={{
                  position: "relative",
                  width: "95%",
                  maxWidth: "580px",
                  height: "auto",
                  maxHeight: "570px",
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  display: "block",
                  zIndex: 4,
                  filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.20))",
                }}
              />

              {/* Founder Badge */}
              <div
                style={{
                  position: "absolute",
                  left: "25px",
                  bottom: "25px",
                  zIndex: 6,
                  padding: "14px 20px",
                  background: "#201e1c",
                  borderRadius: "16px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.20)",
                }}
              >
                <div
                  style={{
                    color: "#f56600",
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "5px",
                  }}
                >
                  OUR FOUNDER
                </div>

                <div
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  Mr. Harish Bhai Purohit
                </div>
              </div>
            </div>

            {/* =====================================
        RIGHT - JOURNEY CONTENT
    ====================================== */}
            <div
              style={{
                flex: "1 1 50%",
                minWidth: "0",
                color: "#ffffff",
              }}
            >
              {/* Section Label */}
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  color: "#f56600",
                  textTransform: "uppercase",
                  marginBottom: "22px",
                }}
              >
                OUR JOURNEY
              </div>

              {/* Main Heading */}
              <h2
                style={{
                  margin: "0 0 28px 0",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "clamp(42px, 5vw, 70px)",
                  lineHeight: "1.05",
                  fontWeight: "700",
                  letterSpacing: "-2px",
                  color: "#ffffff",
                }}
              >
                From a vision
                <br />
                <span style={{ color: "#f56600" }}>to a promise.</span>
              </h2>

              {/* First Paragraph */}
              <p
                style={{
                  margin: "0 0 20px 0",
                  maxWidth: "600px",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  fontWeight: "400",
                  color: "#c7c1bb",
                }}
              >
                It all started with the vision of our founder,
                Mr. Harish Bhai Purohit, who introduced innovative
                products like Soya Sticks and Soya Chips.
              </p>

              {/* Second Paragraph */}
              <p
                style={{
                  margin: "0",
                  maxWidth: "600px",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  fontWeight: "400",
                  color: "#c7c1bb",
                }}
              >
                What began as a small idea soon grew into a trusted
                name, built around quality, taste and innovation.
                Today, Purohit Namkeen continues that journey with
                the same passion that started it all.
              </p>

              {/* Founder Information */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginTop: "38px",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f56600",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "700",
                    boxShadow: "0 8px 20px rgba(245,102,0,0.25)",
                  }}
                >
                  HP
                </div>

                {/* Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#ffffff",
                    }}
                  >
                    Mr. Harish Bhai Purohit
                  </strong>

                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "500",
                      letterSpacing: "1.5px",
                      color: "#88827d",
                      textTransform: "uppercase",
                    }}
                  >
                    Founder · Purohit Namkeen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">

          <h2>Ready to discover<br />your next favourite?</h2>

          <p>
            Explore the complete Purohit Namkeen collection,
            from classic Indian favourites to crazy fusion creations.
          </p>

          <button
            className="cta-button"
            onClick={handleDownloadCatalog}
          >
            Download Complete Catalog ↓
          </button>

        </section>

        {/* FOOTER */}
        <footer>

          <div>
            <span className="footer-brand">
              PUROHIT NAMKEEN
            </span>
            <span> Swad Jo Rahe Yaad.</span>
          </div>

          <button
            className="footer-instagram"
            onClick={handleInstagram}
          >
            @purohitnamkeenofficial ↗
          </button>

        </footer>

      </div>
    </>
  );
}

export default App;