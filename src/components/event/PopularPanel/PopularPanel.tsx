import { Box, Card, Heading } from '@ui';

import React from 'react';
import { eventSelectors } from '@state/event';
import { useSelector } from 'react-redux';

const PopularPanel = () => {
  const popularEvents = useSelector(eventSelectors.filteredPopularEvents);

  return (
    <Box display="flex" flexDirection="column" minHeight="200px">
      <Heading level="2">Popular around you</Heading>
      <Box display="flex" flexDirection="row">
        {popularEvents.map(event => {
          return (
            <div>
              {event.title}
              {event.location}
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export { PopularPanel };
