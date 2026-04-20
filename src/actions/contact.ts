"use server";

import { siteConfig } from "@/config/site";
import { z } from "zod";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type Web3FormsResponse = Readonly<{
  success?: boolean;
  message?: string;
}>;

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      ok: false,
      formError:
        "Contact form is not configured. Please email " + siteConfig.email + " directly.",
    };
  }

  let response: Response;
  try {
    response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: parsed.data.name,
        email: parsed.data.email,
        message: parsed.data.message,
        subject: `Portfolio contact — ${siteConfig.name}`,
        from_name: parsed.data.name,
      }),
    });
  } catch {
    return {
      ok: false,
      formError: "Network error. Please try again or email " + siteConfig.email + " directly.",
    };
  }

  const data = (await response.json()) as Web3FormsResponse;
  if (!response.ok || !data.success) {
    return {
      ok: false,
      formError:
        typeof data.message === "string" && data.message.length > 0
          ? data.message
          : "Could not send your message. Please try again or email " +
            siteConfig.email +
            " directly.",
    };
  }

  return { ok: true };
}
