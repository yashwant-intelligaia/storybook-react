import React from 'react';
import { Grommet, Box, Paragraph, Text, Button, Video, List, Layer, Spinner } from 'grommet';
import { Alert, CircleAlert } from 'grommet-icons';
import { Add, FormClose, StatusGood } from 'grommet-icons';

function BannerCard(){
    const locations = [
        'Boise',
        'Fort Collins',
        'Los Gatos',
        'Palo Alto',
        'San Francisco',
    ];

    const [open, setOpen] = React.useState(false);

    const onOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 30000);
    };

    const onClose = () => setOpen(false);
    return (
        <Grommet>
            <Box  direction="row" align="center"  pad="small" round="small" elevation="large" background="white" >
              <Button label="Default" label={ <Text> <strong>Success State</strong></Text>} onClick={onOpen}  margin={{ right: 'xsmall' }}/>
              <Button label="Default" label={ <Text> <strong>Error State</strong></Text>} onClick={onOpen}  margin={{ right: 'xsmall' }}/>
              <Button label="Default" label={ <Text> <strong>Warning State</strong></Text>} onClick={onOpen}  margin={{ right: 'xsmall' }} />
              <Button label="Default" label={ <Text> <strong>Info State</strong></Text>} onClick={onOpen}  margin={{ right: 'xsmall' }} />
                
                {open && (
                    <Layer
                        position="bottom"
                        modal={false}
                        margin={{ vertical: 'medium', horizontal: 'small' }}
                        onEsc={onClose}
                        responsive={false}
                        plain
                    >
                        {/* <Box
                            align="center"
                            direction="row"
                            gap="small"
                            justify="between"
                            round="xsmall"
                            elevation="medium"
                            background="white"
                            pad={{ right: 'xsmall' }}
                        //pad={{ vertical: 'xsmall', horizontal: 'small' }}
                        >
                            <Box align="center" direction="row" gap="xsmall">
                                <Box pad="xsmall" background="status-ok" round={{ corner: 'left', size: 'xsmall' }}>
                                    <StatusGood color='white' />
                                </Box>

                                <Box pad="xsmall" background="white">
                                    <Text>Your message has been sent successffully.</Text>
                                </Box>
                            </Box>
                            <Button icon={<FormClose />} onClick={onClose} plain />
                        </Box> */}
                       <Box
                            align="center"
                            direction="row"
                            gap="small"
                            justify="between"
                            round="xsmall"
                            elevation="medium"
                            background="white"
                            pad={{ right: 'xsmall' }}
                        >
                            <Box align="center" direction="row" gap="xsmall">
                                <Box pad="xsmall" background="status-error" round={{ corner: 'left', size: 'xsmall' }}>
                                    <Alert color='white' size="medium" />
                                </Box>

                                <Box pad="xsmall" background="white">
                                    <Text>A problem has been occurred while submitting your data.</Text>
                                </Box>
                            </Box>
                            <Button icon={<FormClose />} onClick={onClose} plain />
                        </Box> 

                        {/* <Box
                            align="center"
                            direction="row"
                            gap="small"
                            justify="between"
                            round="xsmall"
                            elevation="medium"
                            background="white"
                            pad={{ right: 'xsmall' }}
                        >
                            <Box align="center" direction="row" gap="xsmall">
                                <Box pad="xsmall" background="status-warning" round={{ corner: 'left', size: 'xsmall' }}>
                                    <CircleAlert color='white' size="medium" />
                                </Box>

                                <Box pad="xsmall" background="white">
                                    <Text>There was a problem with your network connection.</Text>
                                </Box>
                            </Box>
                            <Button icon={<FormClose />} onClick={onClose} plain />
                        </Box> */}
                    </Layer>
                )}

                
                

                
            </Box>
        </Grommet>
    );
};

export default BannerCard;