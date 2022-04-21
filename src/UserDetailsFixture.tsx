import React, { Suspense } from 'react';
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";

const UserDetailsFixture = () => {
  console.log('UserDetailsFixture');

  const response = useLazyLoadQuery(
    graphql`
      query UserDetailsFixtureQuery {
        me {
          ...UserDetailsFixture_user
        }
      }
    `,
    {},
    {
      fetchPolicy: 'network-only'
    });
  

  const me = useFragment(
    graphql`
      fragment UserDetailsFixture_user on User {
        name
      }
    `,
    response.me
  );

  return (
    <Suspense fallback={'suspended'}>
      <div>
        {me?.name}
      </div>
    </Suspense>
  )
};

export default UserDetailsFixture;