import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import './globals.css';
import { createServerClient } from '../utils/supabase-server';

import type { Database } from '../types/supabase';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';

// fonts
import { gilroy } from '../utils/fonts';

export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  const supabase = createServerClient();

  const {
      data: { session }
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <div className="bg-white ${gilroy.className} font-bold">
          <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token} />
              {children}
            </SupabaseProvider>
        </div>
      </body>
    </html>
  );
}
