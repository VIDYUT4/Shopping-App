import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Box, Button, Typography, Modal, IconButton, TextField, Avatar, CssBaseline, FormControlLabel, Checkbox, Link, Grid, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { actions as loginAction } from 'store/login/actions';
import CustomButton from 'Components/Button/CustomButton';
;


const style = {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
};

const Login = () => {
    const loginModelStatus = useSelector(state => state.login.showLoginModel);
    const authToken = useSelector(state => state.login.token);
    const loginErrorMessage = useSelector(state => state.login.loginErrorMessage);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(loginAction.showLoginModel(false));

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const loginData = {
            username: data.get('username'),
            password: data.get('password'),
        }
        dispatch(loginAction.loginAuthentication(loginData))
    };
    return <>
        <Modal
            open={loginModelStatus}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Container className="loginContainer" component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={style}>
                    <IconButton onClick={handleClose} className="modelClose" color="primary" aria-label="add to shopping cart">
                        <CloseOutlinedIcon />
                    </IconButton>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button> */}
                        <CustomButton type="submit" buttonText='Sign In' fullWidth />
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Modal>
    </>;
};

export default Login;
