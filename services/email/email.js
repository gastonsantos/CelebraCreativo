// services/email/email.js

export const sendEmail = async (form) => {
  try {
    const formData = new FormData(form);

    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      tel: formData.get("user_phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error enviando mensaje");

    return true;
  } catch (error) {
    console.error("ERROR EMAIL:", error);
    return false;
  }
};
