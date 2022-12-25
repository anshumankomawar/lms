'use client' 

import { useSupabase } from '../supabase-provider';

// Supabase auth needs to be triggered client-side
export default function Logout() {
  const { supabase, session } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  return (<button onClick={handleLogout}>Logout</button>);
}
