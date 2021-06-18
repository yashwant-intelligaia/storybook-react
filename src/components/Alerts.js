import React from 'react';
import { Grommet, Box, Text, Button, Layer } from 'grommet';
import { Alert, Add, FormClose, StatusGood, CircleAlert } from 'grommet-icons';
import PropTypes from 'prop-types';

export default function BannerCard({ type, duration, message }) {
    const [open, setOpen] = React.useState(false);
    const onOpen = () => {
        setOpen(true);
        setTimeout(() => { setOpen(false); }, duration);
    };
    const onClose = () => setOpen(false);

    return (
        <Grommet>
            <Box pad="small" round="small" elevation="large" >
                <Box fill align="center" justify="center">
                    <Button icon={<Add color="brand" />} label={<Text> <strong>Add</strong></Text>} onClick={onOpen} plain />
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
                            pad={{ right: 'xsmall' }}
                        >
                            <Box align="center" direction="row" gap="xsmall">
                                <Box pad="xsmall" background={"status-" + type} round={{ corner: 'left', size: 'xsmall' }}>
                                    {type === "ok" && <StatusGood color='white' />}
                                    {type === "error" && <Alert color='white' size="medium" />}
                                    {type === "warning" && <CircleAlert color='white' size="medium" />}
                                </Box>
                                <Box pad="xsmall" background="white">
                                    <Text>{message}</Text>
                                </Box>
                            </Box>
                            <Button icon={<FormClose />} onClick={onClose} plain />
                        </Box>
                    </Layer>
                )}
            </Box>
        </Grommet>
    );
};

BannerCard.propTypes = {
    type: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

BannerCard.defaultProps = {
    type: 'ok',
    duration: 3000,
    message: "Your message has been sent successffully"
}