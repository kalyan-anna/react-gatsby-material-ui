import React, { useEffect } from 'react';
import { eventSelectors, loadEvents } from 'state/event';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@ui';
import { FlowerSpinner } from 'react-epic-spinners';
import { SearchInput } from '../SearchInput/SearchInput';
import { theme } from '@theme';

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

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <FlowerSpinner
          size={250}
          animationDuration={2000}
          color={theme?.colors?.secondary}
        />
      </Box>
    );
  }

  return (
    <Box width={[1, 1, 1 / 2, 1 / 4]}>
      <SearchInput />
    </Box>
  );
};

export { EventListContainer };
