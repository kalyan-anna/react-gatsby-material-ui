import { Box, Card, Text } from '@ui';

import { EventDetails } from '@state/event';
import React from 'react';

interface EventCardProps {
  event: EventDetails;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const cardBody = <img src={event.img} width="100%"></img>;

  const cardFooter = (
    <Box display="flex" flexDirection="column">
      <Text fontSize={3} as="p">
        {event.title}
      </Text>
      <Text fontSize={1} as="div">
        {event.location}
      </Text>
    </Box>
  );

  return <Card body={cardBody} footer={cardFooter} />;
};
