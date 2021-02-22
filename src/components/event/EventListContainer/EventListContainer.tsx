import React, { useEffect } from 'react';
import { eventSelectors, loadEvents } from 'state/event';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@ui';
import { FeaturedPanel } from '../FeaturedPanel/FeaturedPanel';
import { FlowerSpinner } from 'react-epic-spinners';
import { PopularPanel } from '../PopularPanel/PopularPanel';
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
    <Box alignItems="start" flexDirection="column" display="flex" my={4}>
      <SearchInput />
      <Box backgroundColor="panelBackground" width="100%" px={4} py={1} mt={4}>
        <PopularPanel />
        <FeaturedPanel />
      </Box>
    </Box>
  );
};

export { EventListContainer };
