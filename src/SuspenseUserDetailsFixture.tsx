import React, { Suspense } from 'react';

import UserDetailsDataFixture from './UserDetailsDataFixture';

const SuspenseUserDetailsFixture = () => {

  return (
    <Suspense fallback={'suspended'}>
      <UserDetailsDataFixture/>
    </Suspense>
  )
};

export default SuspenseUserDetailsFixture;