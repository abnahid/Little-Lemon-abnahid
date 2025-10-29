import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface ReservationData {
  occasion: string;
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  special: string;
}

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    occasion: "",
    date: "",
    time: "--:--",
    guests: "",
    name: "",
    email: "",
    phone: "",
    special: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmedData, setConfirmedData] = useState<ReservationData | null>(
    null
  );
  const [reservationHistory, setReservationHistory] = useState<
    (ReservationData & { confirmedAt: string })[]
  >([]);

  useEffect(() => {
    const saved = localStorage.getItem("reservationForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }

    const history = localStorage.getItem("reservationHistory");
    if (history) {
      setReservationHistory(JSON.parse(history));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reservationForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmedData(formData);
    setShowConfirm(true);

    const reservationHistory = JSON.parse(
      localStorage.getItem("reservationHistory") || "[]"
    );
    reservationHistory.push({
      ...formData,
      confirmedAt: new Date().toISOString(),
    });
    localStorage.setItem(
      "reservationHistory",
      JSON.stringify(reservationHistory)
    );

    setTimeout(() => {
      localStorage.removeItem("reservationForm");
      setFormData({
        occasion: "",
        date: "",
        time: "--:--",
        guests: "",
        name: "",
        email: "",
        phone: "",
        special: "",
      });
    }, 3000);
  };

  const closeConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-8">
        Reservations
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="text-lg font-semibold text-gray-800 mb-4">
              Personal Details
            </legend>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="occasion" className="text-sm text-gray-600">
                    Occasion
                  </Label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-primary text-sm mt-1"
                    required
                  >
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Business">Business</option>
                    <option value="Casual">Casual</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="date" className="text-sm text-gray-600">
                    DD/MM/YYYY
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none mt-1"
                      >
                        {formData.date
                          ? format(new Date(formData.date), "dd/MM/yyyy")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          formData.date ? new Date(formData.date) : undefined
                        }
                        onSelect={(date) => {
                          if (date) {
                            setFormData((prev) => ({
                              ...prev,
                              date: format(date, "yyyy-MM-dd"),
                            }));
                          }
                        }}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests" className="text-sm text-gray-600">
                    No Of Guests
                  </Label>
                  <Input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="20"
                    placeholder="--:--"
                    value={formData.guests}
                    onChange={handleChange}
                    className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-primary mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="time" className="text-sm text-gray-600">
                    Time
                  </Label>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-primary mt-1"
                    required
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-semibold text-gray-800 mb-4">
              Booking Details
            </legend>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm text-gray-600">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-primary mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm text-gray-600">
                    E-Mail Id
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail Id"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-primary mt-1"
                    required
                  />
                </div>
              </div>

              {/* Phone and Special Request row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-sm text-gray-600">
                    (+880) Mobile Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(+880) Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-primary mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="special" className="text-sm text-gray-600">
                    Special Request ?
                  </Label>
                  <Input
                    type="text"
                    id="special"
                    name="special"
                    placeholder="Special Request ?"
                    value={formData.special}
                    onChange={handleChange}
                    className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-primary mt-1"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <div className="mt-8">
            <Button
              className="rounded-full px-6 py-2 bg-primary text-primary-foreground"
              variant="default"
            >
              Confirm Reservation
            </Button>
          </div>
        </form>

        {/* Right: Image placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-full h-96 bg-gray-300 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src="/public/images/restaurant.jpg"
              alt="Reservation"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Past Reservations */}
      {reservationHistory.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Your Reservations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reservationHistory.map((res, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <p className="text-sm font-semibold text-gray-800">
                  {res.name}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Date:</strong> {res.date}
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Time:</strong> {res.time}
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Guests:</strong> {res.guests}
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Occasion:</strong> {res.occasion}
                </p>
                <p className="text-xs text-green-600 mt-2">✓ Confirmed</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirm && confirmedData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-2xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-primary mb-4">
              ✓ Reservation Confirmed
            </h2>

            <div className="space-y-2 text-sm text-gray-700 mb-6">
              <p>
                <strong>Name:</strong> {confirmedData.name}
              </p>
              <p>
                <strong>Date:</strong> {confirmedData.date}
              </p>
              <p>
                <strong>Time:</strong> {confirmedData.time}
              </p>
              <p>
                <strong>Guests:</strong> {confirmedData.guests}
              </p>
              <p>
                <strong>Email:</strong> {confirmedData.email}
              </p>
              <p>
                <strong>Phone:</strong> {confirmedData.phone}
              </p>
              {confirmedData.special && (
                <p>
                  <strong>Special Request:</strong> {confirmedData.special}
                </p>
              )}
            </div>

            <p className="text-xs text-gray-500 mb-6">
              A confirmation email has been sent to {confirmedData.email}. Thank
              you for your reservation!
            </p>

            <Button
              onClick={closeConfirm}
              className="w-full rounded-md bg-primary text-primary-foreground"
              variant="default"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReservationForm;
