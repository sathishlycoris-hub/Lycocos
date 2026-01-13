import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, CalendarDays, Clock, Timer, Users } from "lucide-react";
import logo from "@/assets/lycorislogo.png";

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  treatment: {
    name: string;
    price: number;
    image: string;
  };
}

type Step = "calendar" | "time" | "booking";

const timeSlots = [
  "14:45", "15:30", "16:15", "17:00", "17:45", "18:30", "19:15", "20:00"
];

const AppointmentDialog = ({ open, onOpenChange, treatment }: AppointmentDialogProps) => {
  const [step, setStep] = useState<Step>("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setStep("time");
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("booking");
  };

  const handleBack = () => {
    if (step === "time") setStep("calendar");
    if (step === "booking") setStep("time");
  };

  const handleConfirm = () => {
    // In production, this would submit to a backend
    alert(`Booking confirmed for ${treatment.name} on ${selectedDate?.toLocaleDateString()} at ${selectedTime}`);
    onOpenChange(false);
    // Reset state
    setStep("calendar");
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="flex min-h-[500px]">
          {/* Left Panel - Treatment Info */}
          <div className="w-[280px] bg-primary p-6 text-primary-foreground flex flex-col">
            {step !== "calendar" && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-sm mb-4 hover:opacity-80"
              >
                <ChevronLeft size={16} />
                Back to {step === "time" ? "dates" : "times"}
              </button>
            )}

            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Lyco" className="w-12 h-12 rounded-full bg-white p-1" />
            </div>

            <h3 className="font-display text-lg font-semibold mb-4">{treatment.name}</h3>

            {selectedDate && (
              <div className="flex items-center gap-2 text-sm mb-2">
                <CalendarDays size={16} />
                <div>
                  <p className="font-semibold">{formatDate(selectedDate)}</p>
                  <p className="text-xs opacity-80">Asia/Calcutta</p>
                </div>
              </div>
            )}

            {selectedTime && (
              <div className="flex items-center gap-2 text-sm mb-2">
                <Clock size={16} />
                <span>{selectedTime} - {parseInt(selectedTime.split(":")[0]) + 1}:{selectedTime.split(":")[1]}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm mb-2">
              <Timer size={16} />
              <span>Duration: 30 minutes</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users size={16} />
              <span>Quantity: 1</span>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="flex-1 p-6">
            {step === "calendar" && (
              <div>
                <DialogHeader className="mb-4">
                  <DialogTitle className="font-display text-xl">Select a Date</DialogTitle>
                </DialogHeader>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </div>
            )}

            {step === "time" && (
              <div>
                <DialogHeader className="mb-4">
                  <DialogTitle className="font-display text-xl flex items-center gap-2">
                    <span className="text-primary">📅</span>
                    Book a 30 minutes meeting
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-body text-sm text-muted-foreground">What time works best?</p>
                  <div className="flex gap-1">
                    <span className="px-2 py-1 text-xs bg-muted rounded">AM/PM</span>
                    <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded">24h</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-4">🕐 Asia/Calcutta</p>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className="w-full flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      <span className="font-body font-medium">{time}</span>
                      <span className="text-xs text-muted-foreground">1 SLOT LEFT</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "booking" && (
              <div>
                <DialogHeader className="mb-6">
                  <DialogTitle className="font-display text-xl">Complete your booking</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="font-body text-sm font-medium mb-1 block">
                      First Name *
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium mb-1 block">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium mb-1 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <Button
                    variant="gold"
                    className="w-full mt-4"
                    size="lg"
                    onClick={handleConfirm}
                    disabled={!formData.firstName || !formData.lastName || !formData.email}
                  >
                    Confirm booking
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
