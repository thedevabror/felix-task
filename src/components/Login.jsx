import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'

const Login = () => {

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(4, "Min length is 4")
        .max(20, "Max lenght is 20"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Min length is 8")
        .max(20, "Max lenght is 20"),
    }),
    onSubmit: (values, helpers) => {
      console.log(values)
      navigate("/panel")
    },
  });

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        p={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "rgb(254, 254, 254)",
          borderRadius: "12px",
          padding: "48px 28px 48px 28px",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontSize: "36px", fontWeight: "700" }}
        >
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: "36px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                placeholder="Enter your username"
                name="username"
                autoComplete="username"
                helperText={formik.touched.username && formik.errors.username}
                error={formik.touched.username && formik.errors.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText={formik.touched.password && formik.errors.password}
                error={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: "36px",
              mb: 2,
              bgcolor: "rgb(98, 0, 238)",
              padding: "10px 24px 10px 24px",
            }}
            color="success"
          >
            Login
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2">
                <NavLink to="/signin">
                  Already signed up?{" "}
                  <span color="success">Go to Register.</span>
                </NavLink>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
