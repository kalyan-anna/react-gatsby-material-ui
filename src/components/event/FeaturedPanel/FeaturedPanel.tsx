import { Box, Card, Heading } from '@ui';

import React from 'react';
import { eventSelectors } from '@state/event';
import { useSelector } from 'react-redux';

const FeaturedPanel = () => {
  const futureEvents = useSelector(eventSelectors.featuredEvents);

  return (
    <Box display="flex" flexDirection="column" minHeight="200px" mt={2}>
      <Heading level="2">Featured</Heading>
      <Box display="flex" flexDirection="row">
        {Object.values(futureEvents).map(event => {
          return (
            <div key={event.id}>
              {event.title}
              {event.location}
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export { FeaturedPanel };
