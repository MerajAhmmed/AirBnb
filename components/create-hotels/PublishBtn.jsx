"use client";

import { getMissingInfo } from "@/app/utils/getMissingInfo";
import {
  showConfirmationModalWithBtnName,
  showErrorModal,
} from "@/app/utils/modals";
import { successToast, warningToast } from "@/app/utils/notify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { ImSpinner6 } from "react-icons/im";

const Publish = ({ images, hotelInfo, session, lang }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onPublish = async () => {
    if (!hotelInfo) {
      console.error("hotelInfo is undefined!");
      return;
    }

    const missingInfo = getMissingInfo(hotelInfo);

    if (missingInfo) {
      warningToast(`You are missing the following information: ${missingInfo}`);
      return;
    }

    // Ensure all images are uploaded
    // if (images.includes("")) {
    //   showWarningModal("Please upload all the images before publishing.");
    //   return;
    // }

    const response = await showConfirmationModalWithBtnName(
      "Are you sure you want to publish this hotel?",
      "Publish"
    );

    setLoading(true);

    if (response.isConfirmed) {
      try {
        const response = await fetch("/api/auth/hotels", {
          method: "POST",
          body: JSON.stringify({
            ...hotelInfo,

            email: session?.user?.email,
            path: `/${lang}/manage-hotels`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();

          successToast(data.message);
          router.push(`/${lang}/manage-hotels`);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        showErrorModal(error.message);
      }
    }
    setLoading(false);
  };

  return (
    <button
      onClick={onPublish}
      disabled={loading}
      className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded-lg hover:brightness-90 absolute top-4 right-4"
    >
      {loading ? (
        <ImSpinner6 className="animate-spin" />
      ) : (
        <FaSave className="mr-2" />
      )}
      Publish
    </button>
  );
};

export default Publish;
