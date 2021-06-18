import React from 'react';
import { Grommet, Box, Paragraph, Text, Button, Video, List, Layer, Spinner } from 'grommet';
import { MoreVertical } from 'grommet-icons';
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
            <Box pad="small" round="small" elevation="large" >
                <Box fill align="center" justify="center">
                    <Button icon={<Add color="brand" />} label={ <Text> <strong>Add</strong></Text>} onClick={onOpen} plain />
                </Box>
                {open && (
                    <Layer
                        position="bottom"
                        modal={false}
                        margin={{ vertical: 'medium', horizontal: 'small' }}
                        onEsc={onClose}
                        responsive={false}
                        plain
                    >
                        <Box
                            align="center"
                            direction="row"
                            gap="small"
                            justify="between"
                            round="xsmall"
                            elevation="medium"
                            background="white"
                        //pad={{ vertical: 'xsmall', horizontal: 'small' }}
                        >
                            <Box align="center" direction="row" gap="xsmall">
                                <Box pad="xsmall" background="status-ok" round={{ corner: 'left', size: 'xsmall' }}>
                                    <StatusGood color='white' />
                                </Box>

                                <Box pad="xsmall" background="white">
                                    <Text>New Tag has been added successfully</Text>
                                </Box>
                            </Box>
                            <Button icon={<FormClose />} onClick={onClose} plain />
                        </Box>
                    </Layer>
                )}

                {/* Spinner Block  Start*/}
                <Box direction="row" align="center" alignSelf="center" justify="center" elevation="medium" width="small" height="medium" pad="xsmall" round="xsmall">
                    <Spinner />
                </Box>
                {/* Spinner Block  Start*/}

                {/* Spinner Block with Heading  Start*/}
                <Box direction="column" align="center" alignSelf="center" justify="center" elevation="medium" width="medium" height="large" pad="xsmall" round="xsmall">
                    <Spinner />
                    <Paragraph margin="xsmall" pad="xsmall" size="xlarge">Creating New Host...</Paragraph>
                </Box>
                {/* Spinner Block with Heading  Start*/}

                {/* Header Starts */}
                <Box
                    direction="row"
                    flex="grow" // Flex
                    direction="row" // Flex Direction
                    align="start" // Vertical Align
                    alignSelf="" // Horizontal Align
                    justify="between" // Content Justification
                    alignContent="start"
                >
                    <Box pad="small" >
                        <Paragraph margin="none">Getting Started with Hosts</Paragraph>
                    </Box>
                    <Box pad="small" >
                        <Button plain icon={<MoreVertical />} onClick={() => { }} primary />
                    </Box>
                </Box>
                {/* Header Ends */}

                {/* Content Starts */}
                <Box
                    direction="row"
                    flex="grow" // Flex
                    direction="row" // Flex Direction
                    align="start" // Vertical Align
                    alignSelf="" // Horizontal Align
                    justify="between" // Content Justification
                    alignContent="start"
                >
                    <Box pad="small" margin="small" width="55%"  >
                        <Video  >
                            <source src="small.mp4" type="video/mp4" />
                            <source
                                src="http://techslides.com/demos/sample-videos/small.webm"
                                type="video/webm"
                            />
                            <source
                                src="http://techslides.com/demos/sample-videos/small.ogv"
                                type="video/ogg"
                            />
                            <source
                                src="http://techslides.com/demos/sample-videos/small.3gp"
                                type="video/3gp"
                            />
                        </Video>
                    </Box>
                    <Box pad="small" width="45%" >
                        <Paragraph size="xlarge" margin="none">We see you have not created any Host yet</Paragraph>
                        <Paragraph margin="none">Get started by creating a new Host or explore the tutorials below.</Paragraph>
                        <Box align="start" pad="none">
                            <List data={locations} />
                        </Box>
                        <Box align="start" pad="normal">
                            <Button label="Tell Me More" secondary />
                        </Box>

                    </Box>
                </Box>
                {/* Content Ends */}
            </Box>
        </Grommet>
    );
};

export default BannerCard;