import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator} from 'relay-test-utils';

import SuspenseUserDetailsFixture from '../SuspenseUserDetailsFixture';

it('should render nested suspense tree. UserDetailsFixture should be the last rendered', async () => {
  const environment = createMockEnvironment();

  const meName = '<name-of-me-user>';
  const counterNumber = 10;
  const mock = {
    Query: () => ({
      me: {
        name: meName,
        count: counterNumber,
      }
    })
  };

  render(
    <RelayEnvironmentProvider environment={environment}>
      <SuspenseUserDetailsFixture/>
    </RelayEnvironmentProvider>
  );

  const pendingOperations = environment.mock.getAllOperations();
  expect(pendingOperations.length).toBe(1);

  expect(screen.getByText('suspended')).toBeTruthy();

  // UserDetailsDataFixtureQuery (useLazyLoadQuery)
  environment.mock.resolveMostRecentOperation((operation) => 
    MockPayloadGenerator.generate(operation, mock)
  );

  await waitFor(() => {
    expect(screen.getByText(`Counter: ${counterNumber}`)).toBeTruthy();
    expect(screen.getByText('suspended data component')).toBeTruthy();
  });

  const pendingOperations2 = environment.mock.getAllOperations();
  expect(pendingOperations2.length).toBe(1);

  // UserDetailsFixtureQuery (useLazyLoadQuery)
  environment.mock.resolveMostRecentOperation((operation) => 
    MockPayloadGenerator.generate(operation, mock)
  );

  await waitFor(() => {
    expect(screen.getByText(meName)).toBeTruthy();
  })
});