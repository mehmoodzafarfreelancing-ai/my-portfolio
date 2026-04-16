"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type ContactActionState = Readonly<{
  ok: boolean;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  formError?: string;
}>;

export const initialContactState: ContactActionState = { ok: false };

export async function submitContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse({
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    message: typeof raw.message === "string" ? raw.message : "",
  });

  if (!parsed.success) {
    const fieldErrors: ContactActionState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return { ok: false, fieldErrors };
  }

  // Hook for Resend / SMTP: e.g. process.env.RESEND_API_KEY
  console.log("[contact]", {
    name: parsed.data.name,
    email: parsed.data.email,
    messageLength: parsed.data.message.length,
  });

  return { ok: true };
}
