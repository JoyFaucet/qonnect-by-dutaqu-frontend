"use server";

import axios from "axios";

export async function loginUser(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const res = await axios.post(
      "https://8ce5efeae5e9.ngrok-free.app/api/auth/login/",
      { 
        email,
        password
      },
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        withCredentials: true,
      }
    );

    return { success: true, data: res.data };

  } catch (error) {
    if (error.response) {
      // server balikin respon error (status 400, 401, dst)
      console.error("Error status:", error.response.status);
      console.error("Error data:", error.response.data);

      return {
        success: false,
        message: error.response.data?.message || "Terjadi kesalahan",
        errors: error.response.data, // kalau ada field validasi
      };
    } else if (error.request) {
      // request terkirim tapi ga ada respon
      console.error("No response received:", error.request);
      return { success: false, message: "Tidak ada respon dari server" };
    } else {
      // error pas setup axios
      console.error("Axios error:", error.message);
      return { success: false, message: error.message };
    }
  }
}
