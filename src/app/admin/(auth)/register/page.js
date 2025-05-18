"use client"
import { Grid2, Container, Box, Typography, Button, Input, InputLabel, Breadcrumbs } from "@mui/material";
import styles from "./register.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import * as React from 'react';
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function Register() {
    let {register , handleSubmit} = useForm();
    const [open, setOpen] = useState(false);
    const [message,setMessage] = useState("")
    async function onSubmit(data)
    {
        let res = await fetch("http://localhost:3000/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        });
        if(res.ok)
        {
            setOpen(true);
        }
        let result = await res.json();
        setMessage(result.message || result.error);
        console.log(data)

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    return (<>
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Register
                        </Typography>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
        {/* Register Portion goes here  */}

        <Grid2 container className={styles.registersection}>
            <Container maxWidth="lg">
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.ourregister}>
                    <Typography variant="h6" sx={{color: "#F5F5F5"}}>
                        Register Now
                    </Typography>
                    <Box className={styles.formWrapper}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid2 sx={{ lg: 12 }} className={styles.textbox}>
                                <InputLabel sx={{ color: "#F5F5F5", }}>Name</InputLabel>
                                <Input type="text" placeholder=""
                                    sx={{
                                        width: "100%",
                                        '& input::placeholder': {
                                            color: 'orange',
                                            opacity: 1,
                                            color: "#98949E",
                                        },
                                        '& input': {
                                            color: "#F5F5F5", // input text color
                                        },
                                        '&:before': {
                                            borderBottom: '1px solid #98949E', // default
                                        },
                                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                            borderBottom: '2px solid #98949E', // on hover
                                        },
                                        '&.Mui-focused:after': {
                                            borderBottom: '2px solid #98949E', // on focus

                                        },
                                    }}
                                    {...register("name")}
                                />
                            </Grid2>
                            <Grid2 className={styles.textbox}>
                                <InputLabel sx={{color: "#F5F5F5"}}>Email:</InputLabel>
                                <Input type="email" placeholder=""
                                    sx={{
                                        width: "100%",
                                        '& input::placeholder': {
                                            color: 'orange',
                                            opacity: 1,
                                            color: "#98949E",
                                        },
                                        '& input': {
                                            color: "#F5F5F5", // input text color
                                        },
                                        '&:before': {
                                            borderBottom: '1px solid #98949E', // default
                                        },
                                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                            borderBottom: '2px solid #98949E', // on hover
                                        },
                                        '&.Mui-focused:after': {
                                            borderBottom: '2px solid #98949E', // on focus

                                        },
                                    }}

                                    {...register("email")}
                                />
                            </Grid2>
                            <Grid2 className={styles.textbox}>
                                <InputLabel sx={{color:"#F5F5F5"}}>Password:</InputLabel>
                                <Input type="password" placeholder=""
                                    sx={{
                                        width: "100%",
                                        '& input::placeholder': {
                                           color: "#98949E",
                                            opacity: 1,
                                        },
                                        '& input': {
                                            color: "#F5F5F5", // input text color
                                        },
                                        '&:before': {
                                            borderBottom: '1px solid #98949E', // default
                                        },
                                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                            borderBottom: '2px solid #98949E', // on hover
                                        },
                                        '&.Mui-focused:after': {
                                            borderBottom: '2px solid #98949E', // on focus
                                            color: "#cde456"
                                        },
                                    }}
                                    {...register("password")}
                                />
                            </Grid2>
                            <Grid2 className={styles.textbox}>
                                <Grid2 container sx={{display:"flex",justifyContent:"center",marginTop:"20px"}} >
                                    <Grid2 size={{xs:12,sm:12,md:12,lg:6,xl:12}} sx={{color:"#98949E"}}>
                                        <Link href={"/forgot-password"}>Forgot-Password</Link>
                                    </Grid2>
                                    <Grid2 size={{xs:12,sm:12,md:12,lg:5,xl:12}} sx={{display:"flex",justifyContent:"space-evenly", alignItems:"center",color:"#98949E"}}>
                                        <span >Do you have an account--</span>
                                    <Link href={"/admin/login"} sx={{display:"block",width:"40%",paddingLeft:"4px"}}>login</Link>
                                    </Grid2>
                                </Grid2>
                                <Button type="submit" variant="outlined" sx={{
                                    borderColor: '#98949E',
                                    color: '#f5f5f5',
                                    marginTop:"30px",
                                    '&:hover': {
                                        borderColor: 'orange',
                                        backgroundColor: '#fff3e0',
                                        color:"#98949E"
                                    },
                                }}>Register</Button>
                            </Grid2>
                        </form>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>



    </>)
}

export default Register;
