import { Grid, styled, withStyles } from '@material-ui/core';

import { spacing } from '@material-ui/system';

const FlexContainer = styled(Grid)(spacing);

FlexContainer.defaultProps = {
  container: true,
};

const FlexItem = withStyles({
  root: {
    textAlign: 'center',
  },
})(styled(Grid)(spacing));

FlexItem.defaultProps = {
  item: true,
};

export { FlexContainer, FlexItem };
