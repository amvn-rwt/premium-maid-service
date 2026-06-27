import type { EnquiryFormValues } from "@/lib/enquiry/validation";
import { siteConfig } from "@/lib/site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitEnquiry(
  values: EnquiryFormValues,
  botcheck = "",
) {
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
      subject: `New enquiry: ${siteConfig.name}`,
      from_name: values.name,
      name: values.name,
      phone: values.phone,
      area: values.area,
      service: values.service,
      work_type: values.workType,
      meal_preference: values.mealPreference || undefined,
      child_age: values.childAge || undefined,
      expected_date: values.expectedDate || undefined,
      message: values.message?.trim() || "(No message provided)",
      botcheck,
      replyto: siteConfig.contact.enquiryEmail,
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Could not send enquiry. Please try WhatsApp.");
  }

  return data.success;
}
