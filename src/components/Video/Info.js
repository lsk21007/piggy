import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Bigpig02 from '../image/Bigpig02.png'
import Typography from '@mui/material/Typography';
import { Box, Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    Card: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 200,
        marginLeft: 100,
        position: 'fixed',
        left: 50,
        [theme.breakpoints.down('md')]: {
            position: 'static',
            marginLeft: 0,
        }
    },
    text: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '89%'
        }
    }
}))
export default function Info({ uploadAuth }) {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth)
    const navigate = useNavigate();
    const [auth, setAuth] = useState('')
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser(prev => {
            return { ...prev, [name]: value }
        })
    }

    function handleClick(e) {
        e.preventDefault()
        axios.post("https://piggywebsite.herokuapp.com/login", user).then((res) => setAuth(res.data));
    };

    useEffect(() => {
        uploadAuth(auth);
        if (auth) {
            navigate("/Video");
        }
    }, [auth, uploadAuth, navigate])
    const getWidth = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", getWidth)
        return () => {
            window.removeEventListener("resize", getWidth)
        }
    }, [width]);

    return <Box className={classes.container}>
        <Box className={classes.Card}>
            <Box position='flex'>
                <Typography className={classes.text} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 50 }}>LogIn</Typography>
                <TextField required margin="normal" autoFocus label="Username" name='username' className={classes.text} value={user.username} onChange={handleChange} />
                <TextField required margin="normal" className={classes.text} label="Password" type='password' name='password' value={user.password} onChange={handleChange} />
                <Button sx={{ mt: 3 }} className={classes.text} variant="contained" onClick={handleClick}>Submit</Button>
            </Box>
        </Box>
        {width > 1000 && <img width={1500} style={{ position: 'fixed', margin: 10, left: 720 }} src={Bigpig02} alt='Bigpig02'></img>}
    </Box>
}