'use client' 

import { useSupabase } from './supabase-provider';

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return (<button onClick={handleLogout}>Logout</button>);
}
