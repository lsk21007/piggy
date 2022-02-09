import { createTheme } from '@mui/material/styles';

const font = "'Hammersmith One', sans-serif"
const theme = createTheme({
    typography: {
        fontFamily: font
    },
    palette: {
        primary: {
            light: '#ef6694',
            main: '#ec407a',
            dark: '#a52c55',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ef6694',
            main: '#ec407a',
            dark: '#a52c55',
            contrastText: '#000',
        },
    },
});

export default theme;