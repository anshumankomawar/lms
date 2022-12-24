import 'server-only';

import Logout from '../../components/logout';

// do not cache this page
export const revalidate = 0;

// the user will be redirected to the landing page if they are not signed in
// check middleware.tsx to see how this routing rule is set
export default async function RequiredSession() {
  return <Logout />;
}
