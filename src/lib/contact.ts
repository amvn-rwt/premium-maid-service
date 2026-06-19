import { getPrimaryPhone } from "@/lib/site";

export function telHref(phone: string) {
  return `tel:${phone}`;
}

export function whatsappHref(
  number: string,
  message = "Hi, I'd like to enquire about domestic help in Delhi NCR.",
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getPrimaryTelHref() {
  return telHref(getPrimaryPhone().tel);
}

export function getPrimaryWhatsAppHref() {
  return whatsappHref(getPrimaryPhone().whatsapp);
}
