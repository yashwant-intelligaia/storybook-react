import React from 'react';
import PropTypes from 'prop-types';

import { CardHeader, Card, CardBody, CardFooter, Button } from 'grommet';
import { Favorite, ShareOption } from 'grommet-icons'
export default function CardItem({task: {color, disabled}, onFavHover}) {
    return <Card height="small" width="small" background="light-1">
        <CardHeader pad="medium">Header</CardHeader>
        <CardBody pad="medium">Body</CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button
                icon={<Favorite color={color} />}
                hoverIndicator
                disabled={disabled}
            />
            <Button icon={<ShareOption color="plain" />} hoverIndicator disabled={disabled}/>
        </CardFooter>
    </Card>
}

CardItem.propTypes = {
    /** Composition of the task */
    task: PropTypes.shape({
        /** Current state of the task */
        color: PropTypes.string,
        disabled: PropTypes.bool
    }),
    /** Event to change the task to hover on favourite */
    onFavHover: PropTypes.func,
};
CardItem.defaultProps = {
    loading: false,
    tasks: PropTypes.arrayOf(CardItem.propTypes.task).isRequired,
};