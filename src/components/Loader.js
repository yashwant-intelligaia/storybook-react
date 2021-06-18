import React from 'react';
import { Box, Spinner } from 'grommet';
function Loader() {
    return (<Box direction="row" align="center" alignSelf="center" justify="center" elevation="medium" width="small" height="medium" pad="xsmall" round="xsmall">
        <Spinner />
    </Box>)
}

export default Loader;