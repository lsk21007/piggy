import * as React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))

export default function Footer() {
    const classes = useStyles()
    return <div className={classes.content} style={{ height: 50, backgroundColor: "#ec407a" }}>
    <Typography variant="h6" color='white'>Lawrence&Zoe</Typography>
    </div>
}