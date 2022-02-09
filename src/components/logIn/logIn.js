// import React, { useState } from "react"
// import axios from "axios"

// export default function LogIn({uploadAuth}) {
//     const [user, setUser] = useState({
//         username: '',
//         password: ''
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setUser(prev => {
//             return { ...prev, [name]: value }
//         })
//     }

//     function handleClick(e) {
//         e.preventDefault()
//         axios.post("http://localhost:3001/login", user).then((res) => uploadAuth(res.data)); 
//     }

//     return <>
//         user:<input name='username' value={user.username} onChange={handleChange}></input>
//         password:<input name='password' value={user.password} onChange={handleChange}></input>
//         <button onClick={handleClick}>click</button>
//     </>
// }

import React, { useEffect, useState } from "react"
import axios from "axios"
import { Box, Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3)
        }
    },
}))

export default function LogIn({ uploadAuth }) {
    const classes = useStyles();
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
        axios.post("https://piggyweb.herokuapp.com/login", user).then((res) => setAuth(res.data));
    };

    useEffect(() => {
        uploadAuth(auth);
        if (auth) {
            navigate("/Todolist");
        }
    }, [auth,uploadAuth,navigate])

    return <Box style={{ position: 'fixed', top: '25%', width: '100%' }}>
        <Box className={classes.grid}>
            <Box></Box>
            <Box>
                <Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 50 }}>LogIn</Typography>
                <TextField required margin="normal" fullWidth autoFocus label="Username" name='username' value={user.username} onChange={handleChange} />
                <TextField required margin="normal" fullWidth label="Password" type='password' name='password' value={user.password} onChange={handleChange} />
                <Button sx={{ mt: 3 }} fullWidth variant="contained" onClick={handleClick}>Submit</Button>
            </Box>
        </Box>
    </Box>
};