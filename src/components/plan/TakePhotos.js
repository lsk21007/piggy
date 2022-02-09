import React from "react"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Bigpig03 from "../image/Bigpig03.png"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },
    text: {
        left: '50%',
        fontWeight: 'bold',
        top: '45%',
        position: 'fixed',
        fontSize: 50,
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            left: '20%',
            top: '30%'
        }
    },
    img: {
        position: 'fixed',
        top:'28%',
        left: '15%',
        [theme.breakpoints.down('md')]: {
            top: '30%',
            left: '0%'
        }
    }
}))
export default function TakePhotos() {
    const classes = useStyles();
    return <div className={classes.container}>
        <img alt='takephotos' className={classes.img} src={Bigpig03} />
        <Typography className={classes.text}>UPLOAD LATER...</Typography>
    </div>
}