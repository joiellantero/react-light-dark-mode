import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../Shared/globalState';
import './App.css';
import Header from '../Header/Header.component';
import Home from '../Home/Home.component';

function App() {
    const isDarkModeEnabled = useRecoilValue(darkModeState);

    return (
        <div className={ `App ${ isDarkModeEnabled ? 'App--dark-mode' : '' }`}>
            <Header />
            <Home />
        </div>
    );
}

export default App;
