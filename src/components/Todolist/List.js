import React from 'react'
import { Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(() => ({
    icon: {
        color: 'grey',
        '&:hover': {
            color: '#ec407a',
        }
    }
}));

export default function List({ id, text, submitItem }) {
    const classes = useStyle();
    const handleClick = () => {
        submitItem(id)
    }
    return <>
        <DeleteIcon className={classes.icon} sx={{ m: 1 }} onClick={handleClick} />
        <Box sx={{ mt: 1.5 }}>{text.text}</Box>
    </>
}
