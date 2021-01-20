import React from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil';
import { darkModeState } from '../Shared/globalState';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
import HelpIcon from '@material-ui/icons/Help';
import { AppBar, Toolbar, Typography, IconButton, Checkbox,
         Drawer, ListItem, List, Divider, ListItemText
} from '@material-ui/core';

 const drawerWidth = 240;

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

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    hide: {
        display: 'none',
    },
    
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: drawerWidth,
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [isDarkModeEnabled, setISDarkModeEnabled] = useRecoilState(darkModeState);
    const toggleDarkMode = () => setISDarkModeEnabled(!isDarkModeEnabled);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        toggleDarkMode();
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <>
            <div className={classes.root}>
                <AppBar style={{ backgroundColor: isDarkModeEnabled ? '#333333' : '#FFFFFF', color: isDarkModeEnabled ? '#FFFFFF' : '#333333'}} position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            WebApp
                        </Typography>
                        <Checkbox
                            style={{
                                color: isDarkModeEnabled ? '#FFFFFF' : '#333333'
                            }}
                            checked={checked}
                            value={ isDarkModeEnabled }
                            onChange={ handleChange }
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Toolbar>
                </AppBar>
                
                <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>

                        <ListItem button component={Link} to="/blog">
                            <ListItemIcon><GradeIcon /></ListItemIcon>
                            <ListItemText>Blog</ListItemText>
                        </ListItem>

                        <ListItem button component={Link} to="/about">
                            <ListItemIcon><GradeIcon /></ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItem>

                        <ListItem button component={Link} to="/help">
                            <ListItemIcon><HelpIcon /></ListItemIcon>
                            <ListItemText>Help</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </div>

            
        </>
    );
};

export default Header;