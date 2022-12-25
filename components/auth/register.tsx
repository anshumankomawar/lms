'use client';

import { useSupabase } from '../supabase-provider';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';


// Supabase auth needs to be triggered client-side
export default function Register() {
  const router = useRouter()
  const { supabase, session } = useSupabase();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = async (event: any) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      console.log({ error });
    } else {
      router.push('/required-session')
    }
  };

  return ( 
          <form onSubmit={signUp} >
            <input type="text"
              id="email"
                className="w-full p-2 text-xs border-b border-gray-100 outline-none font-light text-lightcharcoal-200 placeholder:text-slate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" />
             <input type="password"
                id="password"
                className="w-full p-2 text-xs border-b border-gray-100 outline-none font-light text-lightcharcoal-200 placeholder:text-slate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
             <button
                 type="submit"
                 className="invisible"
             />
        </ form>
  );
}
