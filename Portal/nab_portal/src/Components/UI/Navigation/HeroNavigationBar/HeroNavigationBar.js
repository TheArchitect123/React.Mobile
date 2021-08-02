import { colors, Icon } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import * as CONST from '../../../../Constants/AppInformation';
import * as FONT_ICONS from '../../../../Constants/IconsFontNames';

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

    heroBar: {
        backgroundColor: colors.red
    }
}));

export default function HeroNavigationBar() {
    const classes = useStyles();

    return <AppBar position="static">
        <Toolbar className={classes.heroBar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Icon>{FONT_ICONS.menu}</Icon>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {CONST.appName}
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar >
};