import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareSupabaseClient({ req, res });

    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (!session && (
        req.nextUrl.pathname.startsWith('/required-session')) ||
        req.nextUrl.pathname === '/'
    ) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/login';
        redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
    } else if (session && req.nextUrl.pathname === '/') {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/required-session';
        redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
    } 

    return res;
}
