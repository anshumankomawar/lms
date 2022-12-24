'use client';

import { useSupabase } from './supabase-provider';
import React, { useState } from "react";

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailLogin = async () => {
    console.log("handleEmailLogin");
    console.log("email: ", email);
    console.log("password: ", password);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      console.log("THIS DOESNT SWORK");
      console.log({ error });
    }

    console.log("THIS WORKS");
  };

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: 'anshumankomawar@gmail.com',
      password: 'password',
    })

    if (error) {
      console.log({ error });
    }
  };
  
  const handleLogout = async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
          console.log({ error });
      }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration

  return ( 
          <>
            <input type="text"
              id="email"
                className="w-full p-2 text-sm border-b border-gray-100 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email" />
             <input type="text"
              id="password"
                className="w-full p-2 text-sm border-b border-gray-100 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" />
             <button
                 onClick={handleEmailLogin}
                 className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
             />
        </>
  );
}
