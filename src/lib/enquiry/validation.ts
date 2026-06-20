import type { ServiceId } from "@/lib/content/services";

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

export type EnquiryFormValues = {
  name: string;
  phone: string;
  area: string;
  service: ServiceId;
  workType: string;
  message: string;
  mealPreference: string;
  childAge: string;
  expectedDate: string;
};

export type EnquiryFormErrors = Partial<Record<keyof EnquiryFormValues, string>>;

export function normalizePhone(value: string) {
  return value.replace(/\D/g, "").slice(-10);
}

export function validateEnquiryForm(
  values: EnquiryFormValues,
): EnquiryFormErrors {
  const errors: EnquiryFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  const phone = normalizePhone(values.phone);
  if (!phone) {
    errors.phone = "Please enter your mobile number.";
  } else if (!INDIAN_MOBILE_REGEX.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.area.trim()) {
    errors.area = "Please enter your city or area.";
  }

  if (!values.service) {
    errors.service = "Please select a service.";
  }

  if (!values.workType) {
    errors.workType = "Please select a work type.";
  }

  if (values.service === "cooking" && !values.mealPreference) {
    errors.mealPreference = "Please select a meal preference.";
  }

  return errors;
}
