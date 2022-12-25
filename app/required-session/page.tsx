import 'server-only';

import Logout from '../../components/logout';

export const revalidate = 0;

export default async function RequiredSession() {
  return <Logout />;
}
