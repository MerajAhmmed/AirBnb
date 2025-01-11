import BackBtn from "./BackBtn";
import BillingAddress from "./BillingAddress";
import HotelBookBtn from "./HotelBookBtn";
import HotelInput from "./HotelInput";
import PaymentSection from "./PaymentSection";
import PriceDetails from "./PriceDetails";

export default function Payment() {
  return (
    <>
      <div className="mb-8">
        <BackBtn />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <HotelInput />
          <PaymentSection />
          <BillingAddress />
          <HotelBookBtn />
        </div>
        <div>
          <PriceDetails />
        </div>
      </div>
    </>
  );
}
