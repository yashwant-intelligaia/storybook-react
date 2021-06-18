import React from 'react';
import { grommet, Box, Spinner, Text } from 'grommet';
function Loader() {
    return (
    <React.Fragment>
        <Box 
        direction="row" 
        align="center" 
        alignSelf="center" 
        justify="center"
        elevation="medium" 
        width="xsmall" 
        height="xsmall" 
        pad="xsmall" 
        round="xsmall"
        background="white"
    >
      <Spinner />
    </Box>

    <Box 
        direction="column" 
        align="center" 
        alignSelf="center" 
        justify="center"
        elevation="medium" 
        width="xsmall" 
        height="xsmall" 
        pad="xsmall" 
        round="xsmall"
        background="white"
        margin={{ vertical: 'small', horizontal: 'none' }} >
         <Spinner />
        <Text alignSelf='center' size="small" margin={{ top: 'xsmall', }} >Loading...</Text>
      </Box>

    <Box 
        direction="row" 
        align="center" 
        alignSelf="center" 
        justify="center"
        elevation="medium" 
        width="small" 
        height="small" 
        pad="xsmall" 
        round="xsmall"
        background="white"
        margin={{ vertical: 'small', horizontal: 'none' }}
    >
      <Spinner size='medium' />
    </Box>


     

    <Box 
        direction="column" 
        align="center" 
        alignSelf="center" 
        justify="center"
        elevation="medium" 
        width="small" 
        height="small" 
        pad="xsmall" 
        round="xsmall"
        background="white"
        margin={{ vertical: 'small', horizontal: 'none' }} >
         <Spinner size='medium' />
        <Text alignSelf='center'margin={{ top: 'medium', }} >Loading...</Text>
      </Box>
     </React.Fragment>
    
    )
}

export default Loader;