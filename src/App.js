import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Main from './screens/main';
import { ThemeEvent } from './contexts/globalContext';

export const App = ({}) => {
    const {darkMode, setDarkMode} = ThemeEvent();
    return (
        <>
            <GlobalStyles darkMode={darkMode} />
            <Main />
        </>
    )
};

export default App;