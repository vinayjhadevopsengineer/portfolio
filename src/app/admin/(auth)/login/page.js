"use client"
import { Grid2, Container, Box, Typography, Button, Input, InputLabel, Breadcrumbs } from "@mui/material";
import styles from "./register.module.css";
import Link from "next/link";



function Login() {
    return (<>
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Login Now
                        </Typography>
                    </Box>
                    <Box className={styles.breadcrum}>
                        <Breadcrumbs aria-label="breadcrumb" color="#98949E">
                            <Link underline="hover" color="#98949E" href="/">
                                Home
                            </Link>
                            <Link
                                underline="none"
                                color="#98949E"
                                href="/admin/register"
                            >
                                Register
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
                    <Typography variant="h6" sx={{color: "#F5F5F5"}}>
                        LOGIN HERE
                    </Typography>
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
                                />
                            </Grid2>
                            <Grid2 className={styles.textbox}>
                                <Grid2 container sx={{display:"flex",justifyContent:"center",marginTop:"20px"}} >
                                    <Grid2 size={{xs:12,sm:12,md:12,lg:6,xl:12}} sx={{color:"#98949E"}}>
                                        <Link href={"/forgot-password"}>Forgot-Password</Link>
                                    </Grid2>
                                    <Grid2 size={{xs:12,sm:12,md:12,lg:6,xl:12}} sx={{display:"flex",justifyContent:"space-evenly", alignItems:"center",color:"#98949E"}}>
                                        <span >Do you not have an account</span>
                                    <Link href={"/register"} sx={{display:"block",width:"40%",paddingLeft:"4px"}}>REGISTER</Link>
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
                                }}>Login</Button>
                            </Grid2>
                        </form>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>



    </>)
}

export default Login;
