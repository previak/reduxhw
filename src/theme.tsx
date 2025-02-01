import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#3698ff',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#1ABB9C',
        },
        background: {
            default: '#F7F9FC',
            paper: '#444444',
        },
        text: {
            primary: '#ffffff',
            secondary: '#73879C',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            },
        },
    },
});