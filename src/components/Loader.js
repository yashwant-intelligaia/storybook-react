import React from 'react';
import { Box, Spinner, Text } from 'grommet';
import PropTypes from 'prop-types';

export default function Loader({ width, height, title, size, showTitle }) {
  return (
    <React.Fragment>
      <Box
        direction={showTitle ? "column" : "row"}
        align="center"
        alignSelf="center"
        justify="center"
        elevation="medium"
        width={width}
        height={height}
        pad="xsmall"
        round="xsmall"
        background="white">
        <Spinner size={size} />
        {showTitle && <Text alignSelf='center' size={size} margin={{ top: 'xsmall', }} >{title}...</Text>}
      </Box>
    </React.Fragment>

  )
}

Loader.propTypes = {
  showTitle: PropTypes.bool,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.string.isRequired
};

Loader.defaultProps = {
  showTitle: false,
  width: "xsmall",
  height: "xsmall",
  size: "xsmall"
}