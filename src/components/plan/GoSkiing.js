import React from "react"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material";
import Smallpig01 from "../image/Smallpig01.png"

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        left: '25%',
        [theme.breakpoints.down('md')]: {
            left: '20%'
        }
    },
    text: {
        fontSize: 50,
        position: 'fixed',
        top: '45%',
        [theme.breakpoints.down('md')]: {
            fontSize: 30,
            top: '30%'
        }
    },
    img: {
        position: 'fixed',
        top: '15%',
        left: '40%',
        [theme.breakpoints.down('md')]: {
            top: '40%',
            left: '-60%'
        }
    }
}))
export default function GoSkiing() {
    const classes = useStyles();
    return <Box className={classes.container}>
        <Typography className={classes.text} style={{ display: 'flex', fontWeight:'bold', alignItems: 'center', justifyContent: 'center' }}>UPLOAD LATER...</Typography>
        <img className={classes.img} alt='goskiing' src={Smallpig01} />
    </Box>
}