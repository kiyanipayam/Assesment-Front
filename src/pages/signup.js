import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from '@mui/material';
import { display } from '@mui/system';
import Axios from 'axios';
import { TextFieldWrapper } from './components/textFieldWrapper';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("snack message")
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            fullName: data.get('fullname')
        });
        try {
            var response = await Axios.post(`http://localhost:3000/users/signup`, {
                email: data.get('email'),
                password: data.get('password'),

                fullName: data.get('fullname')
            })
            console.log("Response:", response)
            localStorage.setItem('userInfo', JSON.stringify(response.data))
            navigate('/');
        } catch (error) {
            console.log(error)
            setOpen(true)
            setMessage(error.response.data.message)
        }
    };

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                />
                <Card sx={{
                    maxWidth: 800, display: 'flex', flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20%',
                    padding: '10%',
                    boxShadow: '0px 0px 10px lightgrey',
                    borderRadius: '5%'
                }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3">
                            Signup
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, marginTop: "20%" }}>
                            <span style={{ fontWeight: 'bold', color: 'black' }}>Email</span>
                            <TextFieldWrapper
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                placeholder="Email"
                                name="email"
                                autoComplete="email"
                                focused
                            />
                            <span style={{ fontWeight: 'bold', color: 'black' }}>Password</span>
                            <TextFieldWrapper
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                placeholder="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                focused
                            />
                            <span style={{ fontWeight: 'bold', color: 'black' }}>Fullname</span>
                            <TextFieldWrapper
                                margin="normal"
                                required
                                fullWidth
                                name="fullname"
                                placeholder="Fullname"
                                id="fullname"
                                autoComplete="fullname"
                                focused
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: 'indigo' }}
                            >
                                Signup
                            </Button>
                            <div style={{ textAlign: 'center' }}>
                                <span variant="body2">
                                    Already have an account?
                                </span>
                                <Link href="/" variant="body2" sx={{ marginLeft: '2%' }}>
                                    Login
                                </Link>
                            </div>
                        </Box>
                    </Box>
                </Card >
            </Container>
        </ThemeProvider>
    );
}