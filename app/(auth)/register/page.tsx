import '../../globals.css';
import Register from '../../../components/auth/register';

export const revalidate = 0;

export default function LoginSession() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="w-1/6">
        <div className="flex flex-col">
            <div className="text-center text-charcoal text-2xl">
              bitflow 
            </div>

            <div className="container h-24"/>
            <Register />
            <div className="container h-4"/>

            <a className="w-full p-2 text-8 font-light text-center text-lightcharcoal-200" href="/login">Dont' have an account, Log in?</a>
        </div>
      </div>
    </div>
  );
}
