import React, {useState, useEffect, useRef} from 'react';
import {Flex, Col, Row, Text} from '../../../components/common/base';
import Coder from './coder';
import Shower from './shower';
import Resizer from '../../../hooks/resizer';

export const Architect = ({}) => {

    const resizeElement1 = useRef(null);
    const resizeElement2 = useRef(null);

    return (
        <Flex width="100vw" height="100vh" padding="padding: 5%; padding-top: 6%; padding-bottom: 3%">
            <Row width="100%" height="100%" overflow="hidden">
                <Coder resizeElement={resizeElement1} />
                <Resizer element1={resizeElement1} element2={resizeElement2} />
                <Shower resizeElement={resizeElement2} />
            </Row>
        </Flex>
    )
}

export default Architect; 