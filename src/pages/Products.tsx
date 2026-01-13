import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import collectionAdja from "@/assets/collection-adja.jpg";
import collectionDija from "@/assets/collection-dija.jpg";

const Products = () => {
  const navigate = useNavigate();
  const products = [
    { name: "Hair balm 30g", price: 22.0, image: productCream },
    { name: "Hair balm 70g", price: 39.0, image: productSerum },
    { name: "Botox cream", price: 60.0, image: productCream },
    { name: "High-strength collagen capsules", price: 45.0, image: collectionAdja },
    { name: "Nutricosmetic hyaluronic capsule", price: 35.0, image: productSerum },
    { name: "Super Copper Capsule", price: 35.0, image: collectionAdja },
    { name: "Chantilly Moringa", price: 39.0, image: collectionDija },
    { name: "Chantilly Vit. C", price: 39.0, image: productCream },
    { name: "Chromabright Anti-Spot Cream", price: 45.0, image: productSerum },
    { name: "Perfect Ally Day Cream", price: 49.0, image: productCream },
    { name: "Moisturizing Cream SPF 50 (anti-UV)", price: 60.0, image: collectionDija },
    { name: "Slimming cream", price: 45.0, image: productSerum },
  ];

  const treatments = [
    "Hair removal",
    "Scrub",
    "Massage",
    "Body and Face Care",
    "Pedicure and Manicure",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-primary py-4 px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-xl font-semibold text-primary-foreground">
            PRODUCTS
          </h1>
        </div>
      </div>

      {/* Our Treatments */}
{/* Our Beauty Philosophy */}
<section className="py-16 px-4">
  <div className="container mx-auto text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
      Our Beauty Philosophy
    </h2>

    <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-12">
      At Lyco Cosmetics, beauty is a ritual. Every product is created with care,
      precision, and respect for your skin’s natural balance.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="bg-secondary rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-display text-lg font-semibold mb-2">
          Thoughtful Formulas
        </h3>
        <p className="bg-secondary rounded-2xl p-6">
          Designed to work in harmony with your skin for long-term beauty and comfort.
        </p>
      </div>

      <div className="bg-secondary rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-display text-lg font-semibold mb-2">
          Clean & Effective
        </h3>
        <p className="bg-secondary rounded-2xl p-6">
          A balance of purity and performance using carefully selected active ingredients.
        </p>
      </div>

      <div className="bg-secondary rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h3 className="font-display text-lg font-semibold mb-2">
          Everyday Luxury
        </h3>
        <p className="bg-secondary rounded-2xl p-6 ">
          Simple routines elevated into moments of self-care and confidence.
        </p>
      </div>
    </div>

    <Button variant="gold" size="lg" onClick={() => navigate('/care-clinic')}>
      Explore the Collection
    </Button>
  </div>
</section>



      {/* Product Grid */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-charcoal text-primary-foreground font-body text-sm">1</button>
            <button className="w-8 h-8 rounded-full hover:bg-muted font-body text-sm text-foreground">2</button>
            <button className="w-8 h-8 rounded-full hover:bg-muted font-body text-sm text-foreground">3</button>
            <button className="w-8 h-8 rounded-full hover:bg-muted font-body text-sm text-foreground">4</button>
            <button className="w-8 h-8 rounded-full hover:bg-muted font-body text-sm text-foreground">→</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
