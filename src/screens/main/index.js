import React, {useState, useEffect} from 'react';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import {One, Two, Three} from './components';
import Factory from '../factory';

export const Main = ({}) => {
    const [tempstate, setTempstate] = useState(0);
    return (
        <div width="100vw" height="100vh" style={{overflowX: 'hidden'}}>
            <Header setTempstate={setTempstate} />
            {tempstate == 0 && <>
                <One />
                <Two />
                <Three />
                <Footer />
            </>}
            {tempstate != 0 && <Factory tempstate={tempstate} />}
        </div>
    )
}

export default Main;