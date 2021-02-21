import { Box, TextInput } from '@ui';
import React, { ChangeEvent, useCallback } from 'react';

import debounce from 'lodash.debounce';
import { filterByKeyword } from '@state/filter';
import { useDispatch } from 'react-redux';

const EventListContainer = () => {
  const dispatch = useDispatch();

  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(filterByKeyword(value));
    }, 250),
    [],
  );

  const handleSeachOnChange = (event: ChangeEvent<any>) => {
    debouncedDispatch(event.target.value);
  };

  return (
    <Box alignItems="start" flexDirection="column" display="flex" my={4}>
      <Box width={[1, 1, 1 / 2, 1 / 4]}>
        <TextInput
          placeholder="Search for events"
          onChange={handleSeachOnChange}
        />
      </Box>
    </Box>
  );
};

export { EventListContainer };
