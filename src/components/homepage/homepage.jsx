import React from 'react'
import {Button} from '@material-ui/core'
import './homepage-styles.scss'
import {Alert} from '@material-ui/lab'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const HomePage = () => {
    const classes = useStyles()
    return (
        <div>
            <header>
                <div className='content-container'>
                <Alert className={classes.root} id='alert' severity="info">This website is still under development. I plan on releasing it in december, stay tune!</Alert>
                    <div className="header-content">
                        <h1>Bo2LeaderBoards</h1>
                        <p>No Glitch Snaking, No Ring, No Bullshit</p>
                        <Button color='primary' variant='contained'>Sign Up</Button>
                    </div>
                    
                </div>                
            </header>
        </div>
    )
}

export default HomePage
