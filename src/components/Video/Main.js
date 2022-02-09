import Box from '@mui/material/Box';
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
    Inner: {
        marginLeft: theme.spacing(15),
        marginRight: theme.spacing(15),
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        [theme.breakpoints.down('lg')]: {
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10),
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(0),
            gridTemplateColumns: 'repeat(1, 1fr)',
        }
    },
    Card: {
        margin: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(10)
        }
    },
    text: {
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
        }
    }
}));

export default function Main() {
    const classes = useStyles();
    return <Box position='relative' >
        <Typography style={{ display: 'flex', justifyContent: 'center' }} sx={{ mt: 5 }} fontSize='30px' fontWeight='bold'>Propose Videos</Typography><hr />
        <Box className={classes.Inner}>
            <Box className={classes.Card}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6juZ-oXfsI8" title="Propose Slides" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Typography fontWeight='bold' className={classes.text}>Peopose Slides</Typography>
                <Typography className={classes.text}>I used this video to propose to you in the fitness we first met.</Typography>
            </Box>
            <Box className={classes.Card}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6juZ-oXfsI8" title="Propose Slides" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <Typography fontWeight='bold' className={classes.text}>Peopose Slides</Typography>
                <Typography className={classes.text}>I used this video to propose to you in the fitness we first met.</Typography>
            </Box>
        </Box>
        <Typography style={{ display: 'flex', justifyContent: 'center' }} sx={{ mt: 10 }} fontSize='30px' fontWeight='bold'>Daily Life</Typography><hr /></Box >
}