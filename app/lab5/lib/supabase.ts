
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rblvqudrdmwtjwcazzar.supabase.co';  
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJibHZxdWRyZG13dGp3Y2F6emFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjU5MzEsImV4cCI6MjA2NzUwMTkzMX0.XQ0hZBkegBYvAZViL0CuBr_iSh-_KB60LOY322ktuyI';                         

export const supabase = createClient(supabaseUrl, supabaseKey);
