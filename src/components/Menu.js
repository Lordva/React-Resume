import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    AppBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Menu(){
    const classes = useStyles();
    return(
    <AppBar position="fixed">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Louis Chabanon - Student
            </Typography>
        <MenuItem>
            <Typography variant="h6" className={classes.title}>
                Home
            </Typography>
        </MenuItem>
        <MenuItem>
            <Typography variant="h6" className={classes.title}>
                About
            </Typography>
        </MenuItem>
        <MenuItem>
            <Typography variant="h6" className={classes.title}>
                Projects
            </Typography>
        </MenuItem>
            <MenuItem>
            <Typography variant="h6" className={classes.title}>
                Contact
            </Typography>
        </MenuItem>
    </Toolbar>
    </AppBar>
    );
}

export default Menu;