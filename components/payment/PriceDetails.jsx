import { daysCount } from "@/app/utils/daysCount";
import Image from "next/image";

const PriceDetails = ({ thumbnail, name, price, checkin, checkout }) => {
  const totalStayDays = daysCount(checkin, checkout) + 1;
  const totalAmount = totalStayDays * price + 17.5 + 51.31;
  const totalPriceWithOutSC = price * totalStayDays;

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8 sticky top-0">
        <div className="flex items-start gap-4 mb-6">
          <Image
            src={thumbnail}
            alt="Property"
            className="w-20 h-20 rounded-lg object-cover"
            width={100}
            height={100}
          />
          <div className="max-w-96">
            <p className="text-sm truncate">{name}</p>
            <div className="flex items-center">
              <i className="fas fa-star text-sm mr-1"></i>
              <span className="text-xs mt-1 text-zinc-500">
                5.00 (3 Reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-4">Price details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>
                ${price} x {totalStayDays} nights
              </span>
              <span>${totalPriceWithOutSC}</span>
            </div>
            <div className="flex justify-between">
              <span>Cleaning fee</span>
              <span>$17.50</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>$51.31</span>
            </div>
            <div className="flex justify-between font-semibold pt-3 border-t">
              <span>Total (USD)</span>
              <span>${totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
