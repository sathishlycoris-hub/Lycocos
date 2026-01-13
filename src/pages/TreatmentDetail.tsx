import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AppointmentDialog from "@/components/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Minus, Plus, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

import treatmentFacial from "@/assets/eyelash.jpg";
import treatmentEyelash from "@/assets/treatment-eyelash.jpg";
import treatmentDental from "@/assets/treatment-dental.jpg";
import treatmentManicure from "@/assets/treatment-manicure.jpg";
import treatmentMassage from "@/assets/treatment-massage.jpg";
import eyecare from "@/assets/eyecare.jpg";
import facial from "@/assets/facial.jpg";
import treatmentfacial from "@/assets/treatment-facial.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import collectionAdja from "@/assets/collection-adja.jpg";
import collectionDija from "@/assets/collection-dija.jpg";

const allTreatments = [
  { id: "1", name: "Dental diamond", price: 50.0, image: treatmentDental },
  { id: "2", name: "Eyelash Lift and Tinting", price: 70.0, image: treatmentEyelash },
  { id: "3", name: "Eye care", price: 30.0, image: eyecare },
  { id: "4", name: "Adja Golden Facial Treatment", price: 110.0, image: treatmentfacial },
  { id: "5", name: "Dija Normal Facial Care", price: 70.0, image: facial },
];

const recommendedProducts = [
  { id: "1", name: "Hair serum", price: 45.0, image: productSerum },
  { id: "2", name: "Eyelash Lift and Tinting", price: 70.0, image: treatmentEyelash },
  { id: "3", name: "Black Soap", price: 15.0, image: collectionDija },
  { id: "4", name: "High-strength collagen capsules", price: 45.0, image: collectionAdja },
];

const recentlyViewed = [
  { id: "5", name: "Kojic Acid and Papaya Soap", price: 15.0, image: collectionDija },
  { id: "6", name: "Chromabright Anti-Spot Cream", price: 45.0, image: productSerum },
  { id: "7", name: "Hair balm 30g", price: 22.0, image: productCream },
  { id: "8", name: "Glutathione Face Cream", price: 49.0, image: productCream },
];

const TreatmentDetail = () => {
  const { treatmentId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const treatment = allTreatments.find((t) => t.id === treatmentId) || allTreatments[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Treatment Detail Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Treatment Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Treatment Info */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {treatment.name}
              </h1>
              <p className="font-display text-2xl text-foreground mb-2">
                ₹{treatment.price.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Tax included. Treatment available at our clinic.
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
                    variant="gold"
                    className="flex items-center gap-2"
                    onClick={() => setAppointmentOpen(true)}
                  >
                    <CalendarDays size={18} />
                    Book now
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
                    Experience the luxury of {treatment.name}. Our professional treatment
                    is designed to provide exceptional results with the utmost care and attention.
                    Duration: 30-60 minutes depending on the treatment area.
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

      {/* Appointment Dialog */}
      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
        treatment={treatment}
      />
    </div>
  );
};

export default TreatmentDetail;
