import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, User, ChevronUp, ChevronDown, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { items, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);

  const navLinks = [
    { name: "Welcome", path: "/" },
    { name: "Product Ranges/Products", path: "/products" },
    { name: "Care Clinic", path: "/care-clinic" },
    { name: "Partners", path: "/partners" },
  ];

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-primary-foreground text-sm font-body">
            Your beauty essentials are waiting for you!{" "}
            <button 
              onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}
              className="ml-2 bg-primary-foreground/20 text-primary-foreground px-3 py-0.5 rounded text-xs hover:bg-primary-foreground/30 transition-colors inline-flex items-center gap-1"
            >
              More {isAnnouncementOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </p>
          <span className="text-primary-foreground text-sm font-body hidden sm:block">
            India INR ₹ ▼
          </span>
        </div>
      </div>

      {/* Announcement Dropdown Panel */}
      {isAnnouncementOpen && (
        <div className="bg-primary py-12 px-4 relative">
          <button 
            onClick={() => setIsAnnouncementOpen(false)}
            className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4 italic">
              Announcement title
            </h2>
            <p className="font-body text-primary-foreground/90 mb-6">
              Pair text with an image to focus on your chosen product, collection, or blog post. Include information about availability, style, or even a review.
            </p>
            <Button 
              variant="outline" 
              className="bg-background text-primary border-none hover:bg-background/90 px-8"
              onClick={() => {
                setIsAnnouncementOpen(false);
                navigate('/products');
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-background py-4 px-4 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl font-bold">L</span>
            </div>
            <span className="ml-2 font-display text-xl font-semibold text-foreground hidden sm:block">
              Lyco Cosmetics
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground font-body text-sm hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-foreground hover:text-primary transition-colors relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-body">
                {itemCount}
              </span>
            </button>
            <span className="text-border">|</span>
            <button className="text-foreground hover:text-primary transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
