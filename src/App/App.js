import React from 'react';
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../Shared/globalState';
import './App.css';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
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
