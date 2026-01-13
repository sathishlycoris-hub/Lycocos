import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* About */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                About
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                At Lyco Cosmetics, we embody the perfect harmony between the purity of nature
                and the excellence of cosmetic science. Founded on a rich heritage and a passion for
                well-being, our brand reflects authentic beauty and responsible luxury. Each product
                is a celebration of innovation and craftsmanship, designed to transcend your beauty
                routine. Join us on this elegant journey to radiance and vitality.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm font-body">
                <p className="text-muted-foreground font-semibold">LYCO COSMETICS</p>
                <p className="text-muted-foreground"> Flat No. G1 & G3, RS No. 378/1A, 1B, 1C, Aikya-2 Apartments,</p>
                <p className="text-muted-foreground">Korukonda Road,</p>
                <p className="text-muted-foreground">Konthamuru, Rajahmundry,
East Godavari,</p>
                <p className="text-muted-foreground">Andhra Pradesh – 533102</p>
                <div className="pt-2">
                  <a href="mailto:contact@lycocosmetics.com" className="text-primary hover:underline">
                    contact@lycoris.in
                  </a>
                </div>
                {/* <div className="flex gap-4 pt-2">
                  <span className="text-muted-foreground">Facebook:</span>
                  <a href="#" className="text-primary hover:underline">
                    https://www.facebook.com/Lycocosmetics
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">Tik Tok:</span>
                  <a href="#" className="text-primary hover:underline">
                    https://www.tiktok.com/@lycocosmeticsclinique
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-charcoal py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm font-body">
            © 2026 Lyco Cosmetics E-commerce
          </p>
          {/* <div className="flex items-center gap-4">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-body flex items-center gap-2 hover:bg-gold-dark transition-colors">
              ♡ Follow onshop
            </button>
            <span className="text-muted text-sm font-body border border-muted/30 px-3 py-1 rounded">
              South Korea EUR € ▼
            </span>
          </div> */}
          {/* <div className="flex items-center gap-2">
            {["Visa", "Apple Pay", "Amex", "G Pay", "Klarna", "Maestro", "Mastercard", "Shop", "Union", "Visa"].map((card, i) => (
              <div key={i} className="w-8 h-5 bg-muted/20 rounded flex items-center justify-center">
                <span className="text-[8px] text-muted">{card.slice(0, 2)}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
