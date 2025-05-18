"use client"
import { Grid2, Container, Box, Typography, Button, Input, InputLabel, Breadcrumbs } from "@mui/material";
import styles from "./register.module.css";
import Link from "next/link";



function ForgotPassword() {
    return (<>
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Forgotten Password
                        </Typography>
                    </Box>
                    <Box className={styles.breadcrum}>
                        <Breadcrumbs aria-label="breadcrumb" color="#98949E">
                            <Link underline="hover" color="#98949E" href="/register">
                                Register
                            </Link>
                            <Link
                                underline="none"
                                color="#98949E"
                                href="/login"
                            >
                                Login
                            </Link>
                        </Breadcrumbs>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
        {/* Register Portion goes here  */}

        <Grid2 container className={styles.registersection}>
            <Container maxWidth="lg">
                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.ourregister}>
                    
                    <Box className={styles.formWrapper}>
                        <form>
                           
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
                                />
                            </Grid2>
                            <Grid2 className={styles.textbox}>
                                <Button type="submit" variant="outlined" sx={{
                                    borderColor: '#98949E',
                                    color: '#f5f5f5',
                                    marginTop:"20px",
                                    '&:hover': {
                                        borderColor: 'orange',
                                        backgroundColor: '#fff3e0',
                                        color:"#98949E"
                                    },
                                }}>Fogot-Password</Button>
                            </Grid2>
                        </form>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>



    </>)
}

export default ForgotPassword;
