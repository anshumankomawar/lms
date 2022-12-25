import Login from '../components/auth/login'
import './globals.css'

export default function Home() {
  return (
  <div className="grid h-screen place-items-center">
    <div className="w-1/6">

      <div className="flex flex-col">
          <div className="text-center text-charcoal text-2xl">
            bitflow 
          </div>

          <div className="container h-24"/>
          <Login />
          <div className="container h-4"/>

          <a className="w-full p-2 text-8 font-light text-center text-lightcharcoal-200" href="/register">Dont' have an account, Sign up?</a>
      </div>
    </div>
  </div>
  );
}


