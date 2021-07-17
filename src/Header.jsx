import React from "react";
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header () {
    return(
    <AppBar position="static" style={{ margin: 0 ,marginBottom:5, padding:0, alignItems:"center"}}>
        <Toolbar>
            <MenuIcon/>
            <h3 style={{textAlign:"center"}}>
                Newsapp
            </h3>
        </Toolbar>
    </AppBar>);
};