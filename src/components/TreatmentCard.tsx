import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppointmentDialog from "@/components/AppointmentDialog";

interface TreatmentCardProps {
  id?: string;
  name: string;
  price: number;
  defaultImage: string;
  hoverImage: string;
}

const TreatmentCard = ({ id, name, price, defaultImage, hoverImage }: TreatmentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const navigate = useNavigate();

  const treatmentId = id || name.toLowerCase().replace(/\s+/g, "-");

  const handleCardClick = () => {
    navigate(`/treatment/${treatmentId}`);
  };

  const handleBookClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAppointmentOpen(true);
  };

  return (
    <>
      <div className="group cursor-pointer" onClick={handleCardClick}>
        <div
          className="relative aspect-square overflow-hidden rounded-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={defaultImage}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={hoverImage}
            alt={`${name} hover`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <button
            onClick={handleBookClick}
            className="absolute bottom-4 right-4 w-10 h-10 bg-charcoal rounded-full flex items-center justify-center text-muted hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <CalendarDays size={18} />
          </button>
        </div>
        <div className="mt-3">
          <h3 className="font-body text-sm font-medium text-foreground">{name}</h3>
          <p className="font-body text-sm text-primary font-semibold mt-1">
            ₹{price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Appointment Dialog */}
      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
        treatment={{
          name,
          price,
          image: defaultImage,
        }}
      />
    </>
  );
};

export default TreatmentCard;
