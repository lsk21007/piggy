import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import { Card} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import axios from "axios";
import List from "./List";
// import Bigpig01 from "../image/Bigpig01.jpg"


const useStyle = makeStyles((theme) => ({
    form: {
        fontFamily: "'Hammersmith One', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
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

export default function Todolist({ auth }) {

    const [open, setOpen] = React.useState(false);
    const [submit, setSubmit] = useState([]);   //onClick
    const [text, setText] = useState({});   //onChange

    const getTodolist = async () => {
        const response = await fetch("https://piggy-web.herokuapp.com/Todolist");
        const Todolist = await response.json();
        setSubmit(Todolist)
    }

    useEffect(() => {
        getTodolist()
    }, []);

    const handleChange = (e) => {
        setText({ text: e.target.value })
    };

    const handleClickButtom = () => {
        if (auth === 'True') {
            if (text) {
                const newText = { text: text }
                axios.post("https://piggyweb.herokuapp.com/update", newText)
                setSubmit(prev => [...prev, text]);
                setText({ text: '' });
            } else {
                console.log('input is empty');  ///!!!!!!!!
            }
        } else {
            setOpen(true);
        }
    };

    const handleSubmit = (id) => {
        if (auth === 'True') {
            const deleteItem = submit.filter((i, index) => index === id);
            axios.post('https://piggyweb.herokuapp.com/deleteItem', deleteItem);
            setSubmit((prev) => prev.filter((i, index) => index !== id));
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyle()

    return <Box style={{ position: "fixed", top: '25%', width: '100%' }}>
        <Box className={classes.grid}>
            <Box></Box>
            <Box>
                <Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize:40 ,fontWeight:'bold'}} sx={{mb:5}}>Login to update</Typography>
                {submit.map((item, index) =>
                    <Card key={index} style={{ height: 40, display: 'flex' }} sx={{ m: 1 }}>
                        <List submitItem={handleSubmit} id={index} text={item} />
                    </Card>
                )}

                <Box sx={{ mt: 8 }} className={classes.form}>
                    <TextField autoFocus autocomplete="off" label="Add todolist" value={text.text} variant="standard" onChange={handleChange} /> <div>&emsp;</div>
                    <Button style={{ fontWeight: 'bold' }} variant="contained" sx={{ mt: 1 }} onClick={handleClickButtom}>Submit</Button>
                </Box>
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"You are not authorized!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Editing todolist is only available to administrators, Please login to edit. Thanks.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Link style={{ textDecoration: 'none' }} to='/login'>
                                <Button onClick={handleClose}>
                                    Login
                                </Button>
                            </Link>
                            <Button onClick={handleClose}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
        </Box>
    </Box>

}
