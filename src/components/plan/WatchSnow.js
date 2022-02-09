import React from "react"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Bigpig01 from "../image/Bigpig01.png"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },
    text: {
        left: '25%',
        fontWeight:'bold',
        top: '45%',
        position: 'fixed',
        fontSize: 50,
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            left: '20%',
            top:'40%'
        }
    },
    img: {
        position:'fixed',
        left: '55%',
        [theme.breakpoints.down('md')]:{
            top:'20%',
            left:'20%'
        }
    }
}))
export default function WatchSnow() {
    const classes = useStyles();
    return <div className={classes.container}>
        <Typography className={classes.text}>UPLOAD LATER...</Typography>
        <img alt='watchsnow' className={classes.img} src={Bigpig01} />
    </div>
}