import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    layout: {
        display: 'grid',
        margin: spacing(3),
        gridTemplateColumns: 'repeat(4, 1fr)',
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: 25
        }
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
}))

export default function MediaCard() {
    const classes = useStyles()
    return (
        <Box sx={{ bgcolor: "text.disabled" }}>
            <Box><div>&ensp;</div></Box>
            <Typography sx={{ fontSize: 55, color: "white" }} className={classes.title}>To Do List</Typography>
            <Box className={classes.layout}>
                <Box className={classes.card}>
                    <Card sx={{ maxWidth: 345, m: 3 }}>
                        <Link to='/watchsnow'>
                            <CardMedia
                                component="img"
                                height="180"
                                image={require("../image/watchSnow.jpeg")}
                                alt="watchSnow"
                            />
                        </Link>
                        <CardContent>
                            <Link to='watchsnow' style={{ textDecoration: 'none' }}>
                                <Typography color='black' gutterBottom variant="h5" component="div">
                                    WATCH SNOW
                                </Typography>
                            </Link>
                            <Link to='/watchsnow' style={{ textDecoration: 'none' }}>
                                <Typography variant="body2" color="text.secondary">
                                    When we watch the snow, you will hold a cup of hot tea with your snow ring on.
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
                <Box className={classes.card}>
                    <Card sx={{ maxWidth: 345, m: 3 }}>
                        <Link to='goskiing'>
                            <CardMedia
                                component="img"
                                height="180"
                                image={require("../image/goSkiing.jpeg")}
                                alt="goSkiing"
                            />
                        </Link>
                        <CardContent>
                            <Link to='goskiing' style={{ textDecoration: 'none' }}>
                                <Typography color='black' gutterBottom variant="h5" component="div">
                                    SKIING
                                </Typography>
                            </Link>
                            <Link to='goskiing' style={{ textDecoration: 'none' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Your new snowboard is on the way and waiting for your arrival.
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
                <Box className={classes.card}>
                    <Card sx={{ maxWidth: 345, m: 3 }}>
                        <Link to='takephotos'>
                            <CardMedia
                                component="img"
                                height="180"
                                image={require("../image/takePhoto.jpeg")}
                                alt="takePhotos"
                            />
                        </Link>
                        <CardContent>
                            <Link to='takephotos' style={{ textDecoration: 'none' }}>
                                <Typography color='black' gutterBottom variant="h5" component="div">
                                    WEDDING PHOTOS
                                </Typography>
                            </Link>
                            <Link to='takephotos' style={{ textDecoration: 'none' }}>
                                <Typography variant="body2" color="text.secondary">
                                    You remind me every day we should take wedding photos in Vancouver.
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
                <Box className={classes.card}>
                    <Card sx={{ maxWidth: 345, m: 3 }}>
                        <Link to='northernEurope'>
                            <CardMedia
                                component="img"
                                height="180"
                                image={require("../image/northernEurope.jpeg")}
                                alt="northernEurope"
                            />
                        </Link>
                        <CardContent>
                            <Link to='northernEurope' style={{ textDecoration: 'none' }}>
                                <Typography color='black' gutterBottom variant="h5" component="div">
                                    NORTHERNEUROPE
                                </Typography>
                            </Link>
                            <Link to='northernEurope' style={{ textDecoration: 'none' }}>
                                <Typography variant="body2" color="text.secondary">
                                    Northern Europe is the dream destination for us to travel.
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
                <Box><div>&ensp;</div></Box>
            </Box>

        </Box>

    );
}