import React from "react";
import {AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header () {
    return(
    <AppBar position="static" style={{ margin: 0 ,marginBottom:5}}>
        <Toolbar>
            <Typography>
                Newsapp
            </Typography>
        </Toolbar>
    </AppBar>);
};