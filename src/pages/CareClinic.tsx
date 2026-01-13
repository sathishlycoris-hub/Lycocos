import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreatmentCard from "@/components/TreatmentCard";
import { Button } from "@/components/ui/button";

import treatmentFacial from "@/assets/eyelash.jpg";
import treatmentEyelash from "@/assets/treatment-eyelash.jpg";
import treatmentDental from "@/assets/treatment-dental.jpg";
import treatmentManicure from "@/assets/treatment-manicure.jpg";
import treatmentMassage from "@/assets/treatment-massage.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import eyecare from "@/assets/eyecare.jpg";
import facial from "@/assets/facial.jpg";
import treatmentfacial from "@/assets/treatment-facial.jpg";

const CareClinic = () => {
  const treatments = [
    {
      id: "1",
      name: "Dental diamond",
      price: 50.0,
      defaultImage: treatmentDental,
      hoverImage: beforeAfter1,
    },
    {
      id: "2",
      name: "Eyelash Lift and Tinting",
      price: 70.0,
      defaultImage: treatmentEyelash,
      hoverImage: treatmentFacial,
    },
    {
      id: "3",
      name: "Eye care",
      price: 30.0,
      defaultImage: eyecare,
      hoverImage: treatmentEyelash,
    },
    {
      id: "4",
      name: "Adja Golden Facial Treatment",
      price: 110.0,
      defaultImage: treatmentfacial,
      hoverImage: treatmentFacial,
    },
    {
      id: "5",
      name: "Dija Normal Facial Care",
      price: 70.0,
      defaultImage: facial,
      hoverImage: treatmentMassage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="bg-primary py-4 px-4">
        <div className="container mx-auto">
          <h1 className="font-display text-xl font-semibold text-primary-foreground">
            CARE CLINIC
          </h1>
        </div>
      </div>

      {/* Treatment Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Treatments Available
            </h2>
            <p className="text-muted-foreground font-body">
              Discover a wide range of professional treatments designed to care for your
              face, body, and overall well-being.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Left */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Hair Removal
                </h3>
                <p className="text-sm text-muted-foreground">
                  Advanced hair removal techniques for smooth, long-lasting results on all skin types.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Scrub Treatments
                </h3>
                <p className="text-sm text-muted-foreground">
                  Exfoliating body scrubs to eliminate dead skin cells and refresh your complexion.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Massage Therapy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Relaxing and therapeutic massages designed to relieve tension and improve circulation.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Body & Face Care
                </h3>
                <p className="text-sm text-muted-foreground">
                  Customized treatments to hydrate, nourish, and restore your skin's natural glow.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  Pedicure & Manicure
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional nail care services for a clean, polished, and elegant finish.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Button variant="gold" size="lg">
              Make an appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Treatment Cards - Hover to swap images, click to navigate */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {treatments.slice(0, 4).map((treatment) => (
              <TreatmentCard key={treatment.id} {...treatment} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {treatments.slice(4).map((treatment) => (
              <TreatmentCard key={treatment.id} {...treatment} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareClinic;
