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
            <Box pad="small" round="small" elevation="large" background="white" >
         

                
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
                    <Box pad="xsmall" >
                        <Paragraph margin="none">Getting Started with Hosts</Paragraph>
                    </Box>
                    <Box pad="xsmall" >
                        <Button plain icon={<MoreVertical />} onClick={() => { }} />
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
                    <Box pad="xsmall"  width="55%"  >
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
                    <Box pad="xsmall" width="45%" >
                        <Paragraph size="xlarge" margin="none">We see you have not created any Host yet</Paragraph>
                        <Paragraph size="medium" margin="none">Get started by creating a new Host or explore the tutorials below.</Paragraph>
                        <Box align="start" pad="small"  margin={{ vertical: 'small', horizontal: 'none' }} >
                            <List data={locations} />
                        </Box>
                        <Box align="start" pad="normal" margin="small">
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