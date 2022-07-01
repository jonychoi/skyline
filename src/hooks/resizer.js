import {useState} from 'react';
import {Flex} from '../components/common/base';

export default ({element1, element2, styles = {
    background: 'white',
    cursor: 'col-resize',
    height: '20px',
    width: '10px',
}}) => {

    const [initialPos1,   setInitialPos1] = useState(null);
    const [initialSize1, setInitialSize1] = useState(null);

    const [initialPos2,   setInitialPos2] = useState(null);
    const [initialSize2, setInitialSize2] = useState(null);
  
    const initial = (e) => {
        setInitialPos1(e.clientX);
        setInitialSize1(element1.current.offsetWidth);
        
        setInitialPos2(e.clientX);
        setInitialSize2(element2.current.offsetWidth);
    }
    
    const resize = (e) => {
        element1.current.style.width = `${parseInt(initialSize1) + parseInt(e.clientX - initialPos1)}px`;
        element2.current.style.width = `${parseInt(initialSize2) - parseInt(e.clientX + initialPos2)}px`;
    }

    return (
        <Flex style={styles}
            draggable   = 'true'
            onDragStart = {initial} 
            onDrag      = {resize}
        />
    )
}