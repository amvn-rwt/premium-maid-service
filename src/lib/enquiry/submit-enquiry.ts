import type { EnquiryFormValues } from "@/lib/enquiry/validation";
import { siteConfig } from "@/lib/site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function formatEnquiryBody(values: EnquiryFormValues) {
  const lines = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Area: ${values.area}`,
    `Service: ${values.service}`,
    `Work type: ${values.workType}`,
  ];

  if (values.mealPreference) {
    lines.push(`Meal preference: ${values.mealPreference}`);
  }
  if (values.childAge) {
    lines.push(`Child/baby age: ${values.childAge}`);
  }
  if (values.expectedDate) {
    lines.push(`Expected date: ${values.expectedDate}`);
  }
  if (values.message) {
    lines.push(`Message: ${values.message}`);
  }

  return lines.join("\n");
}

export async function submitEnquiry(values: EnquiryFormValues) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to send enquiries by email.",
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New enquiry — ${siteConfig.name}`,
      from_name: values.name,
      name: values.name,
      phone: values.phone,
      area: values.area,
      service: values.service,
      work_type: values.workType,
      meal_preference: values.mealPreference || undefined,
      child_age: values.childAge || undefined,
      expected_date: values.expectedDate || undefined,
      message: formatEnquiryBody(values),
      botcheck: "",
      replyto: siteConfig.contact.enquiryEmail,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Could not send enquiry. Please try WhatsApp.");
  }

  return data.success;
}
