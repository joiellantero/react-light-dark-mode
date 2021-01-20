import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../Shared/globalState';
import './App.css';
import Header from '../Header/Header.component';
import Home from '../Home/Home.component';
import About from '../About/About.component';
import { Route } from "react-router-dom";

function App() {
    const isDarkModeEnabled = useRecoilValue(darkModeState);

    return (
        <div className={ `App ${ isDarkModeEnabled ? 'App--dark-mode' : '' }`}>
            <Header />

            <Route exact path ='/' component={Home}/>
            <Route exact path ='/about' component={About} />
            {/* <Route exact path ='/help' component={Help} />
            <Route exact path ='/ratings' component={Ratings} /> */}
        </div>
    );
}

export default App;
