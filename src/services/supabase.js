import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://lldgnosslbioqunhkkvy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZGdub3NzbGJpb3F1bmhra3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2OTYyNzAsImV4cCI6MjA1MzI3MjI3MH0.tsUC_0GynCmXlWf5ep-MCJEwcXSR1Msj3QDwqLcAG3M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

