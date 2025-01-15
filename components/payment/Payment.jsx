"use client";

import { getCheckInOut } from "@/app/utils/getCheckOut";
import { successToast } from "@/app/utils/notify";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import EditableDate from "../property-details/EditableDatePickker";
import BackBtn from "./BackBtn";
import BillingAddress from "./BillingAddress";
import Guest from "./Guset";
import PaymentSection from "./PaymentSection";
import PriceDetails from "./PriceDetails";

export default function Payment({ lang, dict, hotelId, hotel }) {
  const price = hotel?.pricePerNight;
  const guest = hotel?.totalGuests;
  const thumbnail = hotel?.gallery[0];
  const name = hotel?.name;
  const searchParams = useSearchParams();
  const [guestsNumber, setGuestsNumber] = useState(searchParams.get("guest"));
  const [checkin, setCheckin] = useState(new Date(searchParams.get("checkin")));
  const [checkout, setCheckout] = useState(
    new Date(searchParams.get("checkout"))
  );
  const [edit, setEdit] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (formData) => {
    const paymentDetails = {
      cardNumber: formData.cardNumber,
      totalAmount: formData.totalAmount || 0,
      cleaningFee: formData.cleaningFee || 0,
      serviceFee: formData.serviceFee || 0,
      perNightFee: formData.perNightFee || 0,
    };
    console.log(paymentDetails);
    const bookingDetails = {
      hotelId,
      checkInDate: checkin,
      checkOutDate: checkout,
      guests: guestsNumber,
      streetAddress: formData.streetAddress,
      aptOrSuite: formData.aptOrSuite,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    };
    console.log(bookingDetails);
    try {
      const response = await hotelBooking({
        paymentDetails,
        bookingDetails,
      });

      successToast(`Booking requested successfull!`);

      router.push(`${lang}/user/bookings`);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error("root.random", { message: errorMessage });
    }
  };

  return (
    <>
      <div className="mb-8">
        <BackBtn hotelId={hotelId} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your trip</h2>
            <div className="flex justify-between items-center mb-4">
              {edit === "date" ? (
                <EditableDate
                  checkIn={checkin}
                  checkOut={checkout}
                  onCheckIn={setCheckin}
                  onCheckOut={setCheckout}
                />
              ) : (
                <div>
                  <h3 className="font-medium">Dates</h3>
                  <p className="text-zinc-600 text-sm">
                    {getCheckInOut(checkin, checkout)}
                  </p>
                </div>
              )}

              <button
                className="text-zinc-800 underline text-sm"
                onClick={() => setEdit((prev) => (prev ? "" : "date"))}
              >
                {edit === "date" ? "save" : "edit"}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Guests</h3>
                {edit === "guests" ? (
                  <Guest
                    guestsNumber={guestsNumber}
                    onGuest={setGuestsNumber}
                  />
                ) : (
                  <p className="text-zinc-600 text-sm">{guestsNumber} guest</p>
                )}
              </div>

              <button
                className="text-zinc-800 underline text-sm"
                onClick={() => setEdit((prev) => (prev ? "" : "guests"))}
              >
                {edit === "guests" ? "save" : "edit"}
              </button>
            </div>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PaymentSection errors={errors} register={register} />
            <BillingAddress errors={errors} register={register} />
            <button
              type="submit"
              className="w-full block text-center bg-primary text-white py-3 rounded-lg mt-6 hover:brightness-90"
            >
              Request to book
            </button>
          </form>
        </div>

        <PriceDetails
          thumbnail={thumbnail}
          name={name}
          price={price}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </>
  );
}
