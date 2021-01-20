import React from 'react';

import { Route } from "react-router-dom";

import { useRecoilValue } from 'recoil';
import { darkModeState } from '../Shared/globalState';

import './App.css';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Help from '../Pages/Help/Help';
import Blog from '../Pages/Blog/Blog';

function App() {
    const isDarkModeEnabled = useRecoilValue(darkModeState);

    return (
        <div className={ `App ${ isDarkModeEnabled ? 'App--dark-mode' : '' }`} style={{ height: "100vh"}}>
            <Header />

            <Route exact path ='/' component={Home}/>
            <Route exact path ='/blog' component={Blog} />
            <Route exact path ='/about' component={About} />
            <Route exact path ='/help' component={Help} />
        </div>
    );
}

export default App;
