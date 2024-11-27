import "./App.css";

// Todo 1: Component สำหรับ <header>
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">🚀 XYZ CORP</div>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Todo 2: Component สำหรับ <main>
function MainContent() {
  return (
    <main>
      <div className="company-detail-left">
        <h1>Welcome to XYZ Corp</h1>
        <p>Your Trusted Partner in Excellence</p>
        <img src="https://placehold.co/300x300" alt="Company Logo" />
      </div>
      <div className="company-detail-right">
        <h2>About Our Company</h2>
        <p>
          Welcome to XYZ Corp, where excellence meets innovation. We are a passionate team dedicated to
          providing high-quality solutions for the technology industry. With a track record of 10 years of success,
          we have become a trusted partner for clients worldwide.
        </p>
        <p>
          Our mission is to empower businesses through cutting-edge technology. We believe in integrity,
          collaboration, and innovation, and we strive to make a positive impact on businesses and communities alike.
        </p>
        <p>
          At XYZ Corp, we take pride in our commitment to staying at the forefront of technological advancements.
          Our team of experts is ready to collaborate with you to tackle your most complex challenges and drive your success.
        </p>
        <button className="learn-button">Learn More</button>
      </div>
    </main>
  );
}

// Todo 3: Component สำหรับ <section className="product-section">
function ProductSection() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          <ProductCard
            imgSrc="https://placehold.co/300x300"
            title="Premium Bluetooth Headphones"
            price="2,400 Baht"
          />
          <ProductCard
            imgSrc="https://placehold.co/300x300"
            title="Classic Leather Watch"
            price="4,000 Baht"
          />
          <ProductCard
            imgSrc="https://placehold.co/300x300"
            title="Organic Green Tea"
            price="79.99 Baht"
          />
        </div>
      </div>
    </section>
  );
}

// Todo 4: Component สำหรับ <footer>
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
    </footer>
  );
}

// Todo 5: Component สำหรับปุ่ม "Add to Cart"
function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

// Todo 6: Component สำหรับ Product Card
function ProductCard({ imgSrc, title, price }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p className="product-price">{price}</p>
      <Button className="add-to-cart-button-secondary">Add to Cart</Button>
    </div>
  );
}

// Component หลัก
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;