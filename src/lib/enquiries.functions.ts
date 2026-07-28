import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import type { Database } from "@/integrations/supabase/types";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{8,20}$/, "Enter a valid phone number"),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  state: z.string().trim().max(80).optional().or(z.literal("")),
  neetScore: z.string().trim().max(20).optional().or(z.literal("")),
  category: z.string().trim().max(40).optional().or(z.literal("")),
  domicileState: z.string().trim().max(80).optional().or(z.literal("")),
  preferredStream: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("student_enquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      city: data.city || null,
      state: data.state || null,
      neet_score: data.neetScore || null,
      category: data.category || null,
      domicile_state: data.domicileState || null,
      preferred_stream: data.preferredStream || null,
      message: data.message || null,
    });

    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
