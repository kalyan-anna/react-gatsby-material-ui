import { Button, styled } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';
import { compose, palette, spacing, typography } from '@material-ui/system';

const PrimaryButton = styled(Button)(compose(palette, typography, spacing));

PrimaryButton.defaultProps = {
  variant: 'contained',
  bgcolor: blue[600],
  fontWeight: 600,
};

export { PrimaryButton };
