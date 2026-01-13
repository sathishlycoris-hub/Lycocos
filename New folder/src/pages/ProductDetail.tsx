import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Minus, Plus, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import collectionAdja from "@/assets/collection-adja.jpg";
import collectionDija from "@/assets/collection-dija.jpg";

const allProducts = [
  { id: "1", name: "Hair balm 30g", price: 22.0, image: productCream },
  { id: "2", name: "Hair balm 70g", price: 39.0, image: productSerum },
  { id: "3", name: "Botox cream", price: 60.0, image: productCream },
  { id: "4", name: "High-strength collagen capsules", price: 45.0, image: collectionAdja },
  { id: "5", name: "Nutricosmetic hyaluronic capsule", price: 35.0, image: productSerum },
  { id: "6", name: "Super Copper Capsule", price: 35.0, image: collectionAdja },
  { id: "7", name: "Chantilly Moringa", price: 39.0, image: collectionDija },
  { id: "8", name: "Chantilly Vit. C", price: 39.0, image: productCream },
  { id: "9", name: "Chromabright Anti-Spot Cream", price: 45.0, image: productSerum },
  { id: "10", name: "Perfect Ally Day Cream", price: 49.0, image: productCream },
  { id: "11", name: "Kojic Acid and Papaya Soap", price: 15.0, image: collectionDija },
  { id: "12", name: "Hair serum", price: 45.0, image: productSerum },
];

const paymentMethods = ["💳", "🍎", "💰", "G", "K", "💳", "🛒", "💳", "V"];

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const product = allProducts.find((p) => p.id === productId) || allProducts[0];
  const recommendedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);
  const recentlyViewed = allProducts.filter((p) => p.id !== product.id).slice(4, 8);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Product Detail Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-display text-2xl text-foreground mb-2">
                €{product.price.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Tax included. Shipping calculated at checkout.
              </p>

              {/* Quantity */}
              <div className="mb-6">
                <label className="font-body text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-muted"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-body">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-muted"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag size={18} />
                    Add to cart
                  </Button>
                </div>
              </div>

              {/* Guaranteed Safe Checkout */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Guaranteed safe checkout</p>
                <div className="flex gap-1">
                  {["visa", "mastercard", "amex", "paypal", "apple", "google"].map((method, i) => (
                    <div
                      key={i}
                      className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs"
                    >
                      {method.slice(0, 2).toUpperCase()}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Accordion */}
              <Accordion type="single" collapsible className="border-t">
                <AccordionItem value="description">
                  <AccordionTrigger className="font-body font-medium">
                    📦 Description
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground">
                    Experience the luxurious care of {product.name}. Formulated with premium
                    natural ingredients to nourish and protect your skin. Suitable for all skin
                    types.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Recommended products
            </h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 border border-border rounded-full flex items-center justify-center hover:bg-muted">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 border border-border rounded-full flex items-center justify-center hover:bg-muted">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Recently viewed product
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentlyViewed.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 bg-primary/10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Subscribe to our emails
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Be the first to know about new collections and exclusive offers.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input placeholder="E-mail" className="w-full md:w-64" />
              <Button variant="gold">Register</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
