import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center'
    },
}));

const Home = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <h1 className="text-center my-5">Home page</h1>
        </div>
    );
};

export default Home;