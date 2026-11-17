"use client";
import { createBrowserClient } from "@supabase/ssr";
import { supabasePublishableKey, supabaseUrl } from "./env";

/** Supabase client in the browser (sign-in form, direct uploads with a signed upload link). */
export const createClient = () => createBrowserClient(supabaseUrl, supabasePublishableKey);
