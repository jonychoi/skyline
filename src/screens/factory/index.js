import React, {useState, useEffect} from 'react';
import Architect from './architect';
import Dataset from './dataset';
import Run from './run';

export const Factory = ({tempstate}) => {
    return (
        <>
            {tempstate == 1 && <Architect />}
            {tempstate == 2 && <Dataset />}
            {tempstate == 3 && <Run />}
        </>
    )
}

export default Factory;