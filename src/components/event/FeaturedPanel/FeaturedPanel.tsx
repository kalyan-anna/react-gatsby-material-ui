import { Box, Heading } from '@ui';

import { EventCard } from '../EventCard/EventCard';
import React from 'react';
import { eventSelectors } from '@state/event';
import { useSelector } from 'react-redux';

const FeaturedPanel = () => {
  const futureEvents = useSelector(eventSelectors.featuredEvents);

  return (
    <Box display="flex" flexDirection="column" minHeight="200px" mt={[4, 6]}>
      <Heading level="2">Featured</Heading>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {Object.values(futureEvents).map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>
    </Box>
  );
};

export { FeaturedPanel };
