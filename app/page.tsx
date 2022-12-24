import Login from '../components/login'
import './globals.css'
import { useSupabase } from '../components/supabase-provider';



export default function Home() {
  return (
  <div className="grid h-screen place-items-center">
    <div className="w-1/6">

      <div className="flex flex-col">
          <div className="text-center">
            BitFlow
          </div>

          <div className="container h-24"/>
          <Login />
          <div className="container h-4"/>

          <a className="w-full p-2 text-xs text-center text-zinc-800" href="/register">Dont' have an account, Sign up?</a>
      </div>
    </div>
  </div>
  );
}


