import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../../../components/common/base';
import {coderColorer} from '../../../../styles';

export const Coder = ({resizeElement}) => {
    return (
        <Flex ref={resizeElement} height="100%" bg={coderColorer()} style={{width: '50%'}}>

        </Flex>
    )
};

export default Coder;