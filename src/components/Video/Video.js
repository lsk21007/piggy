import Box from '@mui/material/Box';
import React from 'react';
import Main from './Main'
import Info from './Info'


export default function Video({ auth, uploadAuth }) {
    return <Box>
        {auth ? <Main /> : <Info uploadAuth={uploadAuth} />}
    </Box>
}
