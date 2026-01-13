import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-background py-8 px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Partners
          </h1>
        </div>
      </div>

      {/* Partners Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  Phone:
                </h2>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  <li>• +91-7673946789 Main Office</li>
                  <li>• +91-7702747747 Branch</li>
                  <li></li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  E-mail:
                </h2>
                <a href="mailto:contact@lycocosmetics.com" className="text-foreground font-body text-sm hover:text-primary transition-colors">
                  contact@lycoris.in
                </a>
              </div>

              <div>
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  Address:
                </h2>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  <li>• LYCO COSMETICS</li>
                  <li className="ml-3">
                    <a href="#" className="text-primary hover:underline">
                     Flat No. G1 & G3, RS No. 378/1A, 1B, 1C, Aikya-2 Apartments, 

                    </a>
                  </li>
                  <li>• street: <a href="#" className="text-primary hover:underline">Korukonda Road,
Konthamuru, Rajahmundry,
East Godavari,</a></li>
                  <li>• State: <a href="#" className="text-primary hover:underline">Andhra Pradesh – 533102</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Join Our Exclusive Distribution Network
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
                Dear pharmacy and parapharmacy partners, Lyco Cosmetics invites you to enrich your product offerings by integrating our exclusive range of cosmetic skincare products. Specializing in formulating products that combine effectiveness and natural ingredients, we are committed to offering your customers high-quality beauty solutions that respect both skin and the environment. Our products, developed from carefully selected natural ingredients, meet a growing demand for authentic and effective skincare. By choosing us as your partner, you will benefit from a distinctive product range, supported by a rapidly expanding brand dedicated to excellence. We would be delighted to discuss this collaboration opportunity in more detail and present our product range to you. To learn more about our partnership terms and begin a successful collaboration, please do not hesitate to contact us below. Join us on this beauty and wellness adventure, and together, let's enhance the everyday lives of our customers. We look forward to collaborating with you, Lyco Cosmetics
              </p>

              <form className="space-y-6">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    className="border-0 border-b border-border rounded-none focus:ring-0 font-body"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    Phone number
                  </label>
                  <Input
                    type="tel"
                    className="border-0 border-b border-border rounded-none focus:ring-0 font-body"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-2">
                    Comment
                  </label>
                  <Textarea
                    className="border-0 border-b border-border rounded-none focus:ring-0 font-body min-h-[100px] resize-none"
                    placeholder=""
                  />
                </div>
                <Button variant="gold" size="lg">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
