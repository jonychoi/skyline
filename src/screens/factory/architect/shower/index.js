import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../../../components/common/base';

export const Shower = ({resizeElement}) => {
    return (
        <Flex ref={resizeElement} flex={1} height="100%" bg="blue">
            
        </Flex>
    )
}

export default Shower;