import React from "react"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Smallpig02 from "../image/Smallpig02.png"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },
    text: {
        left: '38%',
        fontWeight: 'bold',
        top: '35%',
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
        top: '15%',
        left: '9%',
        [theme.breakpoints.down('md')]: {
            top: '30%',
            left: '-200%',
            transform: 'rotate(90deg)'
        }
    }
}))
export default function NorthernEurope() {
    const classes = useStyles();
    return <div className={classes.container}>
        <img alt='northerneurope' className={classes.img} src={Smallpig02} />
        <Typography className={classes.text}>UPLOAD LATER...</Typography>
    </div>
}