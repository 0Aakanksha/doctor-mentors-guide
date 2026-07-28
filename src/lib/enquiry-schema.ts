import { z } from "zod";

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
