import React from "react"
import { makeStyles } from '@mui/styles';
import backgroundImage from '../image/body-image.jpg'
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${backgroundImage})`,
        fontFamily: "'Hammersmith One', sans-serif",
        height: "800px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            height: "250px"
        },
    },
    text: {
        fontSize: "15rem",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: "4rem"
        },
    },
    literal: {
        fontSize: "4rem",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
        },
    },
    dateContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "10rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "3rem",
        },
    },
    tomeetyou: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4rem",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            fontSize: "3rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
        },
    }
}));
function Section() {
    const classes = useStyles()
    const countDownDate = new Date("Mar 28, 2022").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    return <Box className={classes.container}>
        <Box className={classes.tomeetyou}><div>&ensp;</div></Box>
        <Box className={classes.tomeetyou}><div>&ensp;</div></Box>
        <Box><div>&ensp;</div></Box>
        <Box className={classes.tomeetyou}>Hold your hand again in</Box>
        <Box className={classes.dateContainer}>
            <Box><Box className={classes.text}>{days}</Box><Box className={classes.literal}>DAYS</Box></Box><div>&ensp;</div>
            <Box><Box className={classes.text}>{hours}</Box><Box className={classes.literal}>HOURS</Box></Box>
        </Box>
    </Box>
}

export default Section;