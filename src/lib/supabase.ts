import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ujcwbgekbwtehgjlpvbo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqY3diZ2VrYnd0ZWhnamxwdmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTM4OTEsImV4cCI6MjA5NjQ4OTg5MX0.FURWvgXR0wspPSbxEgO4XEoKRNet1MJezvv8dNTVxpY";
export const supabase = createClient(supabaseUrl, supabaseKey);