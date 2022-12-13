import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card } from '@mui/material';
import { AuthContext } from '../auth/context';
import { useNavigate } from 'react-router-dom';
import { TextFieldWrapper } from './components/textFieldWrapper';

const theme = createTheme();

export default function SignIn() {
    const { onLogin } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        if (await onLogin(data.get('email'), data.get('password')) == true)
            navigate('/feed');

    };

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
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
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, marginTop: "20%" }}>
                            <span style={{ fontWeight: 'bold', color: 'black' }}>Email</span>
                            <TextFieldWrapper
                                style={{ borderRadius: '5%' }}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                placeholder='Email'
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: 'indigo', marginTop: '30%' }}
                            >
                                Login
                            </Button>
                            <div style={{ textAlign: 'center' }}>
                                <span href="#" variant="body2">
                                    Don't have an account?
                                </span>
                                <Link href="/signup" variant="body2" sx={{ marginLeft: '2%' }}>
                                    Signup
                                </Link>
                            </div>
                        </Box>
                    </Box>
                </Card >
            </Container>
        </ThemeProvider >
    );
}