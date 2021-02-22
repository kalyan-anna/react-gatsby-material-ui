import { Box, TextInput } from '@ui';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { eventSelectors, loadEvents } from 'state/event';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash.debounce';
import { filterByKeyword } from '@state/filter';

const EventListContainer = () => {
  const dispatch = useDispatch();
  const isAlreadyLoaded = useSelector(eventSelectors.isAlreadyLoaded);
  const isLoading = useSelector(eventSelectors.isLoading);

  useEffect(() => {
    if (isAlreadyLoaded) {
      return;
    }
    dispatch(loadEvents());
  }, [isAlreadyLoaded]);

  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(filterByKeyword(value));
    }, 250),
    [],
  );

  const handleSeachOnChange = (event: ChangeEvent<any>) => {
    debouncedDispatch(event.target.value);
  };

  if (isLoading) {
    return <div>Spinning....</div>;
  }

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
