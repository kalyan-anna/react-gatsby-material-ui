import { Box, TextInput } from '@ui';
import React, { useState } from 'react';

const EventMain = () => {
  const [searchTxt, setSearchTxt] = useState();

  return (
    <Box alignItems="start" flexDirection="column" display="flex" my={4}>
      <Box width={[1, 1, 1 / 2, 1 / 4]}>
        <TextInput
          placeholder="Search for events"
          value={searchTxt}
          onChange={event => setSearchTxt(event.target.value)}
        />
      </Box>
    </Box>
  );
};

export { EventMain };
