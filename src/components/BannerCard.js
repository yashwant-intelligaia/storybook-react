import React from 'react';
import { Grommet, Box, Paragraph, Button, Video, List } from 'grommet';
import { MoreVertical } from 'grommet-icons';
import PropTypes from 'prop-types';

export default function BannerCard({ task: { disabled }}){
    const locations = [
        'Boise',
        'Fort Collins',
        'Los Gatos',
        'Palo Alto',
        'San Francisco',
    ];
    return (
        <Grommet>
            <Box pad="small" round="small" elevation="large" background="white" >
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
                        <Button plain icon={<MoreVertical />} onClick={() => { }} disabled={disabled}/>
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
                            <source
                                src="https://scrumbooster.s3.ap-south-1.amazonaws.com/sb/yt1s.com+-+Guest+Mode++Privacy+Actions.mp4"
                                type="video/mp4"
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
                            <Button label="Tell Me More" secondary disabled={disabled} />
                        </Box>

                    </Box>
                </Box>
                {/* Content Ends */}
            </Box>
        </Grommet>
    );
};

BannerCard.propTypes = {
    task:{
        disabled: PropTypes.bool
    }
}