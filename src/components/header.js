import React from 'react';
import {Flex, Col, Row, Text, Link} from './common/base';
import {Logo} from './icons/common';

export const Header = ({setTempstate}) => {
    return (
        <Row width="100%" padding="padding: 30px" align="center" justify="space-between" position="fixed">
            <Link href="/">
                <Logo />
            </Link>
            <Row align="center" justify="space-between">
                <Link margin="margin-left: 50px;" onClick={() => setTempstate(1)}>
                    <Text className="ff" hovercolor="#00dcff">
                        ARCHITECT
                    </Text>
                </Link>
                <Link margin="margin-left: 50px;" onClick={() => setTempstate(2)}>
                    <Text className="ff" hovercolor="#00dcff">
                        DATASET
                    </Text>
                </Link>
                <Link margin="margin-left: 50px;" onClick={() => setTempstate(3)}>
                    <Text className="ff" hovercolor="#00dcff">
                        RUN
                    </Text>
                </Link>
            </Row>
        </Row>
    )
}