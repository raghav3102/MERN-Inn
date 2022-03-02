import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        MERN Inn.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [emailIsRepeated, setEmailIsRepeated] = useState(false)
  const [isPassError, setIsPassError] = useState(true)
  const [isNameError, setIsNameError] = useState(true)
  const [isEmailError, setIsEmailError] = useState(true)
  let history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(credentials)
    }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      history.push('/booking-history')
    }
    else {
      if (json.error === 'Email already exists') {
        setEmailIsRepeated(true);
        setTimeout(() => {
          setCredentials({ name: credentials.name, email: "", password: credentials.password })
          setIsEmailError(true)
          setEmailIsRepeated(false);
        }, 1500);
      }
    }

  };

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' })
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    if (e.target.name === 'password' && e.target.value.length < 5) {
      setIsPassError(true)
    }
    else if (e.target.name === 'password' && e.target.value.length >= 5) {
      setIsPassError(false)
    }
    else if (e.target.name === 'name' && e.target.value.length === 0) {
      setIsNameError(true)
    }
    else if (e.target.name === 'name' && e.target.value.length != 0)
      setIsNameError(false);
    else if (e.target.name === 'email' && e.target.value.length === 0) {
      setIsEmailError(true)
    }
    else if (e.target.name === 'email' && e.target.value.length != 0) {
      if (e.target.value.match(/.+@.+\..+/))
        setIsEmailError(false)
      else
        setIsEmailError(true)

    }

  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  error={isNameError}
                  onChange={handleChange}
                  value={credentials.name}
                  id="name"
                  label="Full Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={emailIsRepeated || isEmailError}
                  onChange={handleChange}
                  value={credentials.email}
                  autoComplete="email"
                />
                <p style={{ display: isEmailError ? 'inline-block' : 'none', color: 'red', fontSize: '0.8rem', margin: '0'}}>Invalid Email.</p>
                <p style={{ display: emailIsRepeated ? 'inline-block' : 'none', color: 'red', fontSize: '0.8rem', margin: '0' }}>This email already exists.</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={handleChange}
                  label="Password"
                  type="password"
                  error={isPassError}
                  value={credentials.password}
                  id="password"
                  autoComplete="new-password"
                />
                <p style={{ display: isPassError ? 'inline-block' : 'none', color: 'red', fontSize: '0.8rem', margin: '0'  }}>Password must be greater than 5 characters.</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              disabled={isNameError || isEmailError || isPassError}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Link to="/login" variant="body2">
                <Grid item>Already have an account? Sign in</Grid>
              </Link>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
