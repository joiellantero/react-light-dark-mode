import React from 'react';

import { useRecoilState } from 'recoil';
import { darkModeState } from '../Shared/globalState';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
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

            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        React Webapp
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </div>

            
        </>
    );
};

export default Header;