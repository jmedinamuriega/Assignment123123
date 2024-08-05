import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Location from '../components/locations';
import { GET_LOCATION } from '../graphql/queries';

const mocks = [
  {
    request: {
      query: GET_LOCATION,
      variables: { id: 1 },
    },
    result: {
      data: {
        location: {
          id: '1',
          name: 'San Francisco',
        },
      },
    },
  },
];

test('renders location name when data is fetched', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Location id={1} />
    </MockedProvider>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
  });
});
