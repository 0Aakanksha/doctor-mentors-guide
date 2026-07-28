CREATE TABLE public.student_enquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text,
  state text,
  neet_score text,
  category text,
  domicile_state text,
  preferred_stream text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.student_enquiries TO anon;
GRANT INSERT ON public.student_enquiries TO authenticated;
GRANT ALL ON public.student_enquiries TO service_role;

ALTER TABLE public.student_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.student_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);