export const API_BASE_URL = "https://api-datta-pay.onrender.com";

export async function submitLead(data: {
  fullName: string;
  email: string;
  whatsappCountryCode: string;
  whatsappNumber: string;
}) {
  const response = await fetch(`${API_BASE_URL}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: data.fullName,
      email: data.email,
      whatsappCountryCode: data.whatsappCountryCode,
      whatsappNumber: data.whatsappNumber,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Failed to submit lead: ${response.status}`);
  }

  return response.json();
}

