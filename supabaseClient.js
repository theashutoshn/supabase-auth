import dotenv from "dotenv";
dotenv.config();


const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
