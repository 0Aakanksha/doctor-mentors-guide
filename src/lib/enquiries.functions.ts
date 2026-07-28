import { createServerFn } from "@tanstack/react-start";

import { enquirySchema } from "./enquiry-schema";

export const submitEnquiry= createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
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
