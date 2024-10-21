import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaShoePrints } from 'react-icons/fa'; 
import { GiSandal } from 'react-icons/gi';  
import { ShoppingCart, Menu, X } from 'lucide-react'; 

const ProductList = () => <div style={{ padding: '16px' }}>Product List</div>;
const About = () => <div style={{ padding: '16px' }}>About Us</div>;
const Contact = () => <div style={{ padding: '16px' }}>Contact Us</div>;

const FeaturedProduct = ({ product }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  }}>
    <img 
      src=".\download (1).jpg"
      alt={product.name} 
      style={{
        width: '100%',
        height: '160px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '16px',
      }} 
    />
    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{product.name}</h3>
    <p style={{ color: '#4b5563', marginBottom: '16px' }}>${product.price}</p>
    <button style={{
      width: '100%',
      backgroundColor: '#f97316',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '9999px',
      transition: 'background-color 0.3s ease-in-out'
    }}>
      Buy me
    </button>
  </div>
);

const HeroSection = () => (
  <div style={{
    background: 'linear-gradient(to right, #f97316, #fbbf24)',
    color: 'white',
    padding: '80px 6px',
    
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '40px',
        fontWeight: '700',
        marginBottom: '24px',
        animation: 'fadeIn 0.3s'
      }}>Hola Amigos, welcome to Best Buy</h1>
      <p style={{
        fontSize: '20px',
        marginBottom: '32px',
        animation: 'fadeIn 0.3s 0.3s'
      }}>Experience the best which life has to offer</p>
      <button style={{
        backgroundColor: 'white',
        color: '#f97316',
        padding: '12px 32px',
        borderRadius: '9999px',
        fontSize: '18px',
        fontWeight: '600',
        transition: 'background-color 0.3s',
        animation: 'fadeIn 0.3s 0.6s'
      }}>
        Buy Now
      </button>
    </div>
  </div>
);

const FeatureSection = () => (
  <div style={{ padding: '64px 0', backgroundColor: '#f3f4f6' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '48px'
      }}>Benefits of Best Buy</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', justifyContent: 'center' }}>
        <FeatureCard 
          icon={<FaShoePrints size={40} />}  
          title="Walk on the air"
          description="Traverse with absolute ease, and roam around freely."
        />
        <FeatureCard 
          icon={<GiSandal size={40} />} 
          title="Special Medic Sandals"
          description="Have doctors care for your feet, with our medic sandals."
        />
        <FeatureCard 
          icon={<FaShoePrints size={40} />}  
          title="Promise of comfort"
          description="We excel at providing comfort with every step."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out'
  }}>
    <div style={{ color: '#f97316', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
    <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{title}</h3>
    <p style={{ color: '#4b5563' }}>{description}</p>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = () => {
      const products = [
        { id: 1, name: "Heal shoes", price: 299.99 },
        { id: 2, name: "Natures walk", price: 149.99 },
        { id: 3, name: "Air fly", price: 199.99 },
      ];
      setFeaturedProducts(products);
    };

    fetchFeaturedProducts();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <header style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link to="/" style={{ fontSize: '24px', fontWeight: '700', color: '#f97316' }}>Best Buy</Link>
            <nav style={{ display: 'none', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              <Link to="/" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
              <Link to="/products" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Products</Link>
              <Link to="/about" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>About</Link>
              <Link to="/contact" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</Link>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShoppingCart style={{ color: '#6b7280', cursor: 'pointer', transition: 'color 0.3s' }} />
              <button onClick={toggleMenu} style={{ color: '#6b7280', transition: 'color 0.3s' }}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </header>

        {isMenuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
            <Link to="/products" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Products</Link>
            <Link to="/about" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>About</Link>
            <Link to="/contact" style={{ color: '#6b7280', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</Link>
          </div>
        )}

        <main style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <FeatureSection />
                <section style={{ padding: '64px 0' }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '700', textAlign: 'center', marginBottom: '48px' }}>Featured Products</h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '32px'
                    }}>
                      {featuredProducts.map(product => (
                        <FeaturedProduct key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
