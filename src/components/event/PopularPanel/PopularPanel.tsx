import { Box, Heading } from '@ui';

import { EventCard } from '../EventCard/EventCard';
import React from 'react';
import { eventSelectors } from '@state/event';
import { useSelector } from 'react-redux';

const PopularPanel = () => {
  const popularEvents = useSelector(eventSelectors.filteredPopularEvents);

  return (
    <Box display="flex" flexDirection="column" minHeight="200px">
      <Heading level="2">Popular around you</Heading>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {Object.values(popularEvents).map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>
    </Box>
  );
};

export { PopularPanel };
