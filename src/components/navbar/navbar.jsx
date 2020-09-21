import React, { useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    //checks if the user is logged in
    const history = useHistory()

    return (
        <div className='app-bar-container'>
            <AppBar position="static" id="app-bar" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" id="icon">
                        <Link className="nav-link" to="/">
                            Bo2Leaderboards
                     </Link>
                    </IconButton>
                    <div id="nav-links">
                        <Button color="inherit" position="end" onClick={() => history.push('/login')}>
                            Login
                            </Button>
                        <Button color="inherit" onClick={() => history.push('/register')}>
                            Register
                            </Button>
                    </div>

                </Toolbar>
            </AppBar>
        </div>

    );
};

export default NavBar;