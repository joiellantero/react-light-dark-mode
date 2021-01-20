import React from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../Shared/globalState';

const Header = () => {
    const [isDarkModeEnabled, setISDarkModeEnabled] = useRecoilState(darkModeState);
    const toggleDarkMode = () => setISDarkModeEnabled(!isDarkModeEnabled);

    return(
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="123">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top" />
                        Bootstrap
                    </a>
                </div>
                <div>
                    <input 
                        id="dark-mode-select"
                        className="Header__content__dark-mode__input"
                        type="checkbox"
                        value={ isDarkModeEnabled }
                        onChange={ toggleDarkMode }
                    />
                </div>
            </nav>
        </>
    );
};

export default Header;