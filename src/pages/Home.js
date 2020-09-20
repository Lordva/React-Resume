import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '../components/Menu';
import Footer from '../components/footer'
import MainContent from '../components/MainContent';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));
function Home(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Menu />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Home;