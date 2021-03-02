import { Button, styled } from '@material-ui/core';
import { compose, palette, spacing, typography } from '@material-ui/system';

import { grey } from '@material-ui/core/colors';

const PrimaryButton = styled(Button)(compose(palette, typography, spacing));

PrimaryButton.defaultProps = {
  variant: 'contained',
  bgcolor: grey[600],
  fontWeight: 600,
};

export { PrimaryButton };
