import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeText from "@/components/MarqueeText";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Leaf, Droplets, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Import images
import heroMain from "@/assets/hero-main.jpg";
import heroModel3 from "@/assets/hero-model-3.jpg";
import heroModel4 from "@/assets/hero-model-4.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import collectionAdja from "@/assets/collection-adja.jpg";
import collectionDija from "@/assets/collection-dija.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import skinConcernModel from "@/assets/skin-concern-model.webp";

const Index = () => {
  const navigate = useNavigate();
  const collections = [
    { name: "ADJA GOLDEN", image: collectionAdja },
    { name: "DIJA", image: collectionDija },
    { name: "BEAUTY", image: productSerum },
    { name: "ESSENTIALS", image: productCream },
  ];

  const products = [
    { name: "Hair balm 30g", price: 22.0, image: productCream },
    { name: "Hair balm 70g", price: 39.0, image: productSerum },
    { name: "Botox cream", price: 60.0, image: productCream },
    { name: "High-strength collagen capsules", price: 45.0, image: productSerum },
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure botanical extracts and organic ingredients sourced from nature's finest."
    },
    {
      icon: Droplets,
      title: "Deep Hydration",
      description: "Advanced formulas that penetrate deep into skin layers for lasting moisture."
    },
    {
      icon: Sparkles,
      title: "Visible Results",
      description: "Clinically proven to improve skin texture and radiance within 4 weeks."
    },
    {
      icon: ShieldCheck,
      title: "Dermatologist Tested",
      description: "Safe for all skin types, rigorously tested by skincare experts."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Running Marquee Text */}
      {/* <MarqueeText 
        text="Lyco Cosmetics Your ultimate partner for perfect skin" 
        separator="✦"
      /> */}

      {/* New Hero Section */}
 <section className="relative min-h-[95vh] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={heroMain}
      alt="Lyco Cosmetics Hero"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
  </div>

  {/* Hero Content */}
   <div className="relative container mx-auto px-4 min-h-[95vh] flex items-center">
    <div className="max-w-xl">

      {/* Eyebrow Text */}
      {/* <p className="text-primary font-body uppercase tracking-[0.35em] text-xs mb-6">
        Luxury Skincare & Wellness
      </p> */}

      {/* Brand Name */}
      <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-1">
        Lyco
      </h1>
      <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light italic text-primary leading-[1.05] mb-8">
        Cosmetics
      </h1>

      {/* Description */}
      <p className="font-body text-muted-foreground text-lg md:text-xl mb-10 max-w-md">
        High-performance skincare crafted with nature’s finest ingredients
        to restore balance, radiance, and timeless beauty.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4 mb-14">
        <Button variant="gold" size="lg" className="group" onClick={() => navigate('/products')}>
          Shop Collection
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button variant="gold-outline" size="lg" onClick={() => navigate('/care-clinic')}>
          Discover Lyco
        </Button>
      </div>

      {/* Divider */}
      <div className="w-24 h-px bg-primary/40 mb-10" />

      {/* Stats */}
      <div className="flex gap-10">
        <div>
          <p className="font-display text-3xl font-semibold text-foreground">
            50k+
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Happy Customers
          </p>
        </div>
        <div>
          <p className="font-display text-3xl font-semibold text-foreground">
            100%
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Natural Actives
          </p>
        </div>
        <div>
          <p className="font-display text-3xl font-semibold text-foreground">
            4.9
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Customer Rating
          </p>
        </div>
      </div>
    </div>
  </div>


  {/* Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest">
    SCROLL
  </div>
</section>


     

      {/* Enhance Your Natural Beauty */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Enhance your natural beauty
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            Welcome to our universe. We are dedicated to providing you with the best skincare and wellness
            products designed to bring out your natural radiance.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="gold" onClick={() => navigate('/care-clinic')}>Care</Button>
            <Button variant="gold-outline" onClick={() => navigate('/products')}>Beauty products</Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Adja Golden Collection */}
      {/* Adja Golden Collection – Alternate Design */}
<section className="py-20 px-4 bg-secondary">
  <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* Left – Visual */}
    <div className="relative">
      <img
        src={collectionAdja}
        alt="Adja Golden Collection"
        className="w-full h-[500px] object-cover rounded-2xl"
      />
      <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg">
        <p className="font-display text-lg font-semibold text-foreground">
          Adja Golden
        </p>
        <p className="text-sm text-muted-foreground">
          Radiance • Repair • Glow
        </p>
      </div>
    </div>

    {/* Right – Content */}
    <div>
      <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
        Signature Collection
      </p>

      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Adja Golden Collection
      </h2>

      <p className="font-body text-muted-foreground mb-8 max-w-lg">
        Our most luxurious range, infused with powerful botanicals and
        gold-inspired actives to restore vitality, boost collagen, and
        reveal luminous skin.
      </p>

      {/* Mini product row */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {products.slice(0, 2).map((product, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="font-body text-sm font-medium text-foreground">
                {product.name}
              </p>
              <p className="text-sm text-muted-foreground">
                ₹{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button variant="gold" size="lg" onClick={() => navigate('/products')}>
          Shop Adja Golden
        </Button>
        <Button variant="gold-outline" size="lg" onClick={() => navigate('/care-clinic')}>
          Learn More
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Discover Our Collections */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Discover our collections
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {collections.map((collection, i) => (
              <div key={i} className="text-center group cursor-pointer" onClick={() => navigate('/products')}>
                <div className="aspect-square rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-primary transition-colors">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-body text-sm font-medium text-foreground">
                  {collection.name}
                </p>
              </div>
            ))}
          </div>
          <Button variant="gold" onClick={() => navigate('/products')}>View all</Button>
        </div>
      </section>

      {/* Dija Collection */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Dija Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </div>
      </section>

      

{/* Shop by Skin Concern */}
<section className="py-20 px-4 bg-background">
  <div className="container mx-auto text-center">
    <h2 className="font-display text-2xl md:text-3xl font-bold mb-12">
      Shop by skin concern
    </h2>

    <div className="relative flex justify-center items-center max-w-5xl mx-auto">
      
      {/* Center Image */}
      <img
        src={skinConcernModel}
        alt="Skin concern model"
        className="w-full max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] rounded-2xl cursor-pointer hover:opacity-95 transition-opacity"
        onClick={() => navigate('/products')}
      />

      {/* Fine Lines */}
      {/* <div className="absolute top-10 left-0 flex items-center gap-2">
        <span className="w-3 h-3 bg-primary rounded-full"></span>
        <p className="text-sm font-body">Fine lines & wrinkles</p>
      </div> */}

      {/* Dryness */}
      {/* <div className="absolute bottom-20 left-6 flex items-center gap-2">
        <span className="w-3 h-3 bg-primary rounded-full"></span>
        <p className="text-sm font-body">Dryness</p>
      </div> */}

      {/* Pigmentation */}
      {/* <div className="absolute top-16 right-0 flex items-center gap-2">
        <p className="text-sm font-body">Pigmentation</p>
        <span className="w-3 h-3 bg-primary rounded-full"></span>
      </div> */}

      {/* Acne */}
      {/* <div className="absolute bottom-24 right-10 flex items-center gap-2">
        <p className="text-sm font-body">Acne</p>
        <span className="w-3 h-3 bg-primary rounded-full"></span>
      </div> */}
    </div>
  </div>
</section>

      {/* Before/After Treatment */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            Before/After Treatment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={beforeAfter1} alt="Before after 1" className="rounded-lg aspect-square object-cover" />
            <img src={beforeAfter2} alt="Before after 2" className="rounded-lg aspect-square object-cover" />
            <img src={heroModel3} alt="Before after 3" className="rounded-lg aspect-square object-cover" />
            <img src={heroModel4} alt="Before after 4" className="rounded-lg aspect-square object-cover" />
          </div>
        </div>
      </section>

      


      {/* Video Section */}
       {/* The Lyco Difference Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4">
            Why Choose Lyco
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-16">
            The Lyco Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-primary">
  <div className="container mx-auto">
    <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-8">
      Testimonial
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          name: "Anna",
          text:
            "The products are amazing! My skin has never felt better. I highly recommend Lyco Cosmetics to anyone looking for quality skincare.",
        },
        {
          name: "Daniel",
          text:
            "Absolutely love these products. The quality is outstanding and my skin feels refreshed every day.",
        },
        {
          name: "Richie",
          text:
            "Lyco Cosmetics has completely changed my skincare routine. Simple, effective, and high quality.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-background p-6 rounded-lg">
          <div className="flex mb-4">
            {[...Array(5)].map((_, j) => (
              <span key={j} className="text-primary">★</span>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground mb-4">
            "{item.text}"
          </p>

          <p className="font-body text-sm font-semibold text-foreground">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Newsletter */}
      {/* <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join our exclusive circle by subscribing to our newsletter.
          </h2>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Email"
              className="flex-1 font-body"
            />
            <Button variant="gold">→</Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
