import React, { Suspense } from 'react';
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import UserDetailsFixture from './UserDetailsFixture';

const UserDetailsDataFixture = () => {

  const response = useLazyLoadQuery(
    graphql`
      query UserDetailsDataFixtureQuery {
        me {
          ...UserDetailsDataFixture_user
        }
      }
    `,
    {},
    {
      fetchPolicy: 'network-only'
    });
  

  const me = useFragment(
    graphql`
      fragment UserDetailsDataFixture_user on User {
        count
      }
    `,
    response.me
  );

  return (
    <div>
      <p>Counter: {me.count}</p>
      <Suspense fallback={'suspended data component'}>
        <UserDetailsFixture/>
      </Suspense>
    </div>
  )
};

export default UserDetailsDataFixture;