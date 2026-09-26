import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqafaexijpilbyaybbsx.supabase.co";
const supabaseKey = "sb_publishable_hrOGPMwdPOefdHo_ligfjA_QkqsPjih";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

