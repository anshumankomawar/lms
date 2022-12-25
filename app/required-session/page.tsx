import 'server-only';

import Logout from '../../components/auth/logout';

export const revalidate = 0;

export default async function RequiredSession() {
  return <Logout />;
}
