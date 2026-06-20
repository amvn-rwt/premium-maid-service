"use client";

import { useCallback, useEffect, useId, useState } from "react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PillCtaButton } from "@/components/ui/pill-cta-button";
import { Select } from "@/components/ui/select";
import { SlidingTabs } from "@/components/ui/sliding-tabs";
import { Textarea } from "@/components/ui/textarea";
import { whatsappHref } from "@/lib/contact";
import {
  enquirySectionContent,
  mealPreferenceOptions,
  serviceSelectOptions,
  workTypeOptions,
} from "@/lib/content/enquiry";
import type { ServiceId } from "@/lib/content/services";
import { buildEnquiryWhatsAppMessage } from "@/lib/enquiry/whatsapp-message";
import {
  validateEnquiryForm,
  type EnquiryFormErrors,
  type EnquiryFormValues,
} from "@/lib/enquiry/validation";
import { siteConfig, getPrimaryPhone } from "@/lib/site";

type EnquiryFormProps = {
  serviceId: ServiceId;
  onServiceChange: (serviceId: ServiceId) => void;
};

const initialValues = (serviceId: ServiceId): EnquiryFormValues => ({
  name: "",
  phone: "",
  area: siteConfig.serviceArea,
  service: serviceId,
  workType: "",
  message: "",
  mealPreference: "",
  childAge: "",
  expectedDate: "",
});

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="text-xs text-destructive">
      {message}
    </p>
  );
}

export function EnquiryForm({ serviceId, onServiceChange }: EnquiryFormProps) {
  const formId = useId();
  const [values, setValues] = useState(() => initialValues(serviceId));
  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setValues((current) => ({
      ...current,
      service: serviceId,
      mealPreference: serviceId === "cooking" ? current.mealPreference : "",
      childAge:
        serviceId === "babycare" || serviceId === "japa"
          ? current.childAge
          : "",
      expectedDate: serviceId === "japa" ? current.expectedDate : "",
    }));
    setErrors({});
    setSubmitted(false);
  }, [serviceId]);

  const updateField = useCallback(
    <K extends keyof EnquiryFormValues>(field: K, value: EnquiryFormValues[K]) => {
      setValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    },
    [],
  );

  const handleServiceSelect = (nextService: ServiceId) => {
    onServiceChange(nextService);
    updateField("service", nextService);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateEnquiryForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const message = buildEnquiryWhatsAppMessage(values);
    const href = whatsappHref(getPrimaryPhone().whatsapp, message);
    window.open(href, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const showMealPreference = values.service === "cooking";
  const showChildAge =
    values.service === "babycare" || values.service === "japa";
  const showExpectedDate = values.service === "japa";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] ring-1 ring-foreground/10 bg-background">
      <div className="p-4 sm:p-5">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Your enquiry
        </p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          Share your requirements
        </h3>
      </div>

      <div className="px-4 sm:px-5">
        <SlidingTabs
          className="mb-4"
          items={serviceSelectOptions}
          value={serviceId}
          onChange={handleServiceSelect}
          aria-label="Service type"
        />
      </div>

      <form
        id={formId}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-1 flex-col gap-4 px-4 pb-4 sm:px-5 sm:pb-5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor={`${formId}-name`}>Full name</Label>
            <Input
              id={`${formId}-name`}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${formId}-name-error` : undefined}
              placeholder="Your full name"
            />
            <FieldError id={`${formId}-name-error`} message={errors.name} />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${formId}-phone`}>Phone</Label>
            <Input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? `${formId}-phone-error` : undefined
              }
              placeholder="10-digit mobile"
            />
            <FieldError id={`${formId}-phone-error`} message={errors.phone} />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${formId}-area`}>City / area</Label>
            <Input
              id={`${formId}-area`}
              name="area"
              autoComplete="address-level2"
              value={values.area}
              onChange={(event) => updateField("area", event.target.value)}
              aria-invalid={Boolean(errors.area)}
              aria-describedby={errors.area ? `${formId}-area-error` : undefined}
              placeholder="e.g. Gurgaon, Sector 56"
            />
            <FieldError id={`${formId}-area-error`} message={errors.area} />
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor={`${formId}-work-type`}>Work type</Label>
            <Select
              id={`${formId}-work-type`}
              name="workType"
              value={values.workType}
              onChange={(event) => updateField("workType", event.target.value)}
              aria-invalid={Boolean(errors.workType)}
              aria-describedby={
                errors.workType ? `${formId}-work-type-error` : undefined
              }
            >
              <option value="">Select work type</option>
              {workTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            <FieldError
              id={`${formId}-work-type-error`}
              message={errors.workType}
            />
          </div>

          {showMealPreference ? (
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`${formId}-meal`}>Meal preference</Label>
              <Select
                id={`${formId}-meal`}
                name="mealPreference"
                value={values.mealPreference}
                onChange={(event) =>
                  updateField("mealPreference", event.target.value)
                }
                aria-invalid={Boolean(errors.mealPreference)}
                aria-describedby={
                  errors.mealPreference ? `${formId}-meal-error` : undefined
                }
              >
                <option value="">Select preference</option>
                {mealPreferenceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <FieldError
                id={`${formId}-meal-error`}
                message={errors.mealPreference}
              />
            </div>
          ) : null}

          {showChildAge ? (
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`${formId}-child-age`}>
                {values.service === "japa"
                  ? "Baby age or due date"
                  : "Child age"}
              </Label>
              <Input
                id={`${formId}-child-age`}
                name="childAge"
                value={values.childAge}
                onChange={(event) => updateField("childAge", event.target.value)}
                placeholder={
                  values.service === "japa"
                    ? "e.g. 2 weeks old or due in March"
                    : "e.g. 3 years"
                }
              />
            </div>
          ) : null}

          {showExpectedDate ? (
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor={`${formId}-expected-date`}>
                Expected delivery date{" "}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
              </Label>
              <Input
                id={`${formId}-expected-date`}
                name="expectedDate"
                type="date"
                value={values.expectedDate}
                onChange={(event) =>
                  updateField("expectedDate", event.target.value)
                }
              />
            </div>
          ) : null}

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor={`${formId}-message`}>
              Message{" "}
              <span className="font-normal text-muted-foreground">
                (optional)
              </span>
            </Label>
            <Textarea
              id={`${formId}-message`}
              name="message"
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Timing, language preference, or anything else we should know"
              rows={4}
            />
          </div>
        </div>

        <div className="mt-auto space-y-3 pt-1">
          <div className="flex flex-wrap items-center gap-3">
            <PillCtaButton type="submit" className="shrink-0">
              {enquirySectionContent.submitLabel}
            </PillCtaButton>

            <Button
              asChild
              variant="outline"
              className="h-12 shrink-0 rounded-full border-border px-5"
            >
              <a
                href={whatsappHref(getPrimaryPhone().whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4" />
                {enquirySectionContent.whatsappLabel}
              </a>
            </Button>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground">
            {enquirySectionContent.privacyNote}
          </p>

          {submitted ? (
            <p className="text-sm text-foreground/90">
              {enquirySectionContent.successHint}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
