import {
  enquiryServicesContent,
  mealPreferenceOptions,
  workTypeOptions,
  type MealPreference,
  type WorkType,
} from "@/lib/content/enquiry";
import type { ServiceId } from "@/lib/content/services";
import { siteConfig } from "@/lib/site";

import { normalizePhone, type EnquiryFormValues } from "./validation";

function getLabel<T extends string>(
  options: readonly { value: T; label: string }[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function buildEnquiryWhatsAppMessage(values: EnquiryFormValues) {
  const serviceName = enquiryServicesContent[values.service as ServiceId].name;
  const workTypeLabel = getLabel(workTypeOptions, values.workType as WorkType);
  const lines = [
    `Hi, I'd like to enquire about domestic help in ${siteConfig.serviceArea}.`,
    "",
    `Name: ${values.name.trim()}`,
    `Phone: ${normalizePhone(values.phone)}`,
    `Area: ${values.area.trim()}`,
    `Service: ${serviceName}`,
    `Work type: ${workTypeLabel}`,
  ];

  if (values.service === "cooking" && values.mealPreference) {
    const mealLabel = getLabel(
      mealPreferenceOptions,
      values.mealPreference as MealPreference,
    );
    lines.push(`Meals: ${mealLabel}`);
  }

  if (
    (values.service === "babycare" || values.service === "japa") &&
    values.childAge.trim()
  ) {
    const ageLabel =
      values.service === "japa" ? "Baby age / due date" : "Child age";
    lines.push(`${ageLabel}: ${values.childAge.trim()}`);
  }

  if (values.service === "japa" && values.expectedDate.trim()) {
    lines.push(`Expected delivery: ${values.expectedDate.trim()}`);
  }

  if (values.message.trim()) {
    lines.push("", `Notes: ${values.message.trim()}`);
  }

  return lines.join("\n");
}
