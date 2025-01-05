import Swal from "sweetalert2";

export const showConfirmationModalWithBtnName = async (message, btnName) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: btnName,
      cancelButtonText: "Cancel",
    });
    return result;
  } catch (error) {
    console.error("Error showing confirmation modal:", error);
  }
};

export const showErrorModal = (errorMessage) => {
  try {
    const resulterr = Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      confirmButtonText: "OK",
    });
    return resulterr;
  } catch (error) {
    console.error("Error showing error modal:", error);
  }
};
