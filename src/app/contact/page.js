"use client"
import { Grid2, Box, Typography, Container, Input, Button, FormControl, InputLabel } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

function Contact() {
    let { register, handleSubmit, formState: { errors, isValid }, } = useForm({ mode: "onChange" });
    async function onSubmit(data) {
        console.log(data);
        let url = "http://localhost:3000/api/hireme";
        let postingdata = await fetch(url,{
            method:"POST",
            headers : {
                "Content-type":"application/json"
            },
            body : JSON.stringify(data)
        })
        return postingdata;
        
    }
    return (<>
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Contact-us
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
                                href="/contact"
                            >
                                Contact-us
                            </Link>
                        </Breadcrumbs>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>
        <Grid2 container className={styles.contactsection}>
            <Container maxWidth="lg">
                <Grid2 container>
                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087466!2d144.95373631531537!3d-37.81627917975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2s!4v1634684925294!5m2!1sen!2s"
                            width="100%"
                            height="450px"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>



                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                        <div className={styles.contactadd}>
                            <Grid2 container className={styles.addressdetail}>
                                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 12 }}>
                                    <Box className={styles.address}>
                                        <Typography variant="h6" sx={{ color: "#98949E" }}>
                                            Phone:
                                        </Typography>
                                        <Typography variant="p" sx={{ color: "#98949E" }}>
                                            0123456789
                                        </Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 12, md: 11, lg: 3, xl: 12 }}>
                                    <Box className={styles.address}>
                                        <Typography variant="h6" sx={{ color: "#98949E" }}>
                                            Email :
                                        </Typography>
                                        <Typography variant="p" sx={{ color: "#98949E" }}>
                                            demo@example.com
                                        </Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 12 }}>
                                    <Box className={styles.address}>
                                        <Typography variant="h6" sx={{ color: "#98949E" }}>
                                            Phone:
                                        </Typography>
                                        <Typography variant="p" sx={{ color: "#98949E" }}>
                                            0123456789
                                        </Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 12 }} >
                                    <Box className={styles.address}>
                                        <Typography variant="h6" sx={{ color: "#98949E" }}>
                                            Phone:
                                        </Typography>
                                        <Typography variant="p" sx={{ color: "#98949E" }}>
                                            0123456789
                                        </Typography>
                                    </Box>
                                </Grid2>
                            </Grid2>

                        </div>
                    </Grid2>

                </Grid2>
                <Grid2 container>
                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 12 }}>
                        <Box className={styles.followme}>
                            <Typography variant="h3" sx={{ color: "#F5F5F5" }}>
                                Follow Me
                            </Typography>
                            <Grid2 container>

                                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 12 }} className={styles.socialicon}>
                                    <Box className={styles.iconbox} sx={{ color: "#F2DCA6" }}>
                                        <FacebookIcon />
                                    </Box>
                                    <Box className={styles.iconbox} sx={{ color: "#F2DCA6" }}>
                                        <LinkedInIcon />
                                    </Box>
                                    <Box className={styles.iconbox} sx={{ color: "#F2DCA6" }}>
                                        <GitHubIcon />
                                    </Box>
                                </Grid2>

                            </Grid2>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 12 }} className={styles.contactform}>
                        <Box className={styles.getintouch}>
                            <Typography variant="p" sx={{ color: "#98949ebd" }}>
                                || Get In Touch
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" sx={{ color: "#F5F5F5" }}>
                                If you have any project or need help. Contact me
                            </Typography>
                        </Box>
                        <Box className={styles.contactpara}>
                            <Typography variant="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting emndustry lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print only five centuries, but also the leap into electronic.
                            </Typography>
                        </Box>
                        <Box>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid2 container>
                                    <Container maxWidth="lg">

                                        <Grid2 container>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} className={styles.formarrange}>

                                                <FormControl variant="outlined" sx={{ width: "90%" }}>
                                                    <InputLabel htmlFor="my-input" sx={{ borderColor: "#98949ebd", color: "#98949E", padding: "5px" }}>Name</InputLabel>
                                                    <Input id="my-input" sx={{
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
                                    }}  {...register("name",{ required: "Name is required" })} />
                                                </FormControl>
                                                 <Grid2 container>
                                                 <Grid2 size={{xs:12, sm:12 , md:12 , lg:12 , xl:12}} className={styles.errormessage}>
                                                 {errors.name && <p sx={{ fontWeight: "700" }}>{errors.name.message}</p>}
                                                 </Grid2>
                                                 </Grid2>

                                            </Grid2>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} className={styles.formarrange}>

                                                <FormControl variant="outlined" sx={{ width: "90%" }}>
                                                    <InputLabel htmlFor="my-input" sx={{ borderColor: "#98949ebd", color: "#98949E", padding: "5px" }}>Email</InputLabel>
                                                    <Input id="my-input" {...register("email" , { required: "email is required" })} 
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
                                                </FormControl>

                                                <Grid2 container>
                                                 <Grid2 size={{xs:12, sm:12 , md:12 , lg:12 , xl:12}} className={styles.errormessage}>
                                                 {errors.email && <p sx={{ fontWeight: "700" }}>{errors.email.message}</p>}
                                                 </Grid2>
                                                 </Grid2>

                                            </Grid2>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} className={styles.formarrange}>

                                                <FormControl variant="filled" sx={{ width: "90%" }}>
                                                    <InputLabel htmlFor="my-input" sx={{ borderColor: "#98949ebd", color: "#98949E", padding: "5px" }}>Mobile Number</InputLabel>
                                                    <Input id="my-input"  {...register("number" , { required: "Mobile number is required" })} 
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
                                                </FormControl>
                                               
                                                <Grid2 container>
                                                 <Grid2 size={{xs:12, sm:12 , md:12 , lg:12 , xl:12}} className={styles.errormessage}>
                                                 {errors.number && <p sx={{ fontWeight: "700" }}>{errors.number.message}</p>}
                                                 </Grid2>
                                                 </Grid2>
                                            </Grid2>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} className={styles.formarrange}>

                                                <FormControl variant="outlined" sx={{ width: "90%" }}>
                                                    <InputLabel htmlFor="my-input" sx={{ color: "#98949E", padding: "5px" }}>Subject</InputLabel>
                                                    <Input id="my-input" 
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
                                                                color: "#98949E"
                                                            },
                                                        }}
                                                        {...register("subject" , { required: "Subject is required" })}
                                                    />
                                                </FormControl>
                                                
                                                <Grid2 container>
                                                 <Grid2 size={{xs:12, sm:12 , md:12 , lg:12 , xl:12}} className={styles.errormessage}>
                                                 {errors.subject && <p sx={{ fontWeight: "700" }}>{errors.subject.message}</p>}
                                                 </Grid2>
                                                 </Grid2>
                                            </Grid2>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.formarrange}>

                                                <Box sx={{ width: "100%", borderColor: "#98949ebd", color: "#98949ebd" }}>

                                                    <TextField
                                                        label="Comment"
                                                        multiline
                                                        minRows={12}
                                                        maxRows={8}
                                                        variant="outlined"
                                                        color="#98949ebd"

                                                        sx={{
                                                            width:"100%",
                                                            input: {
                                                                color: '#f5f5f5',
                                                              },
                                                            '& .MuiOutlinedInput-root': {
                                                              '& fieldset': {
                                                                borderColor: '#98949E',
                                                              },
                                                              '&:hover fieldset': {
                                                                borderColor: '#98949E',
                                                              },
                                                              '&.Mui-focused fieldset': {
                                                                borderColor: '#98949E',
                                                              },
                                                            },
                                                            '& .MuiInputLabel-root': {
                                                              color: '#98949E',
                                                            },
                                                            '& .MuiInputLabel-root.Mui-focused': {
                                                              color: '#98949E',
                                                            },
                                                            
                                                            
                                                          }}
                                                        {...register("comment" , { required: "please provide some feedback" })}
                                                    />

                                                </Box>
                                                
                                                <Grid2 container>
                                                 <Grid2 size={{xs:12, sm:12 , md:12 , lg:12 , xl:12}} className={styles.errormessage}>
                                                 {errors.comment && <p sx={{ fontWeight: "700" }}>{errors.comment.message}</p>}
                                                 </Grid2>
                                                 </Grid2>
                                            </Grid2>
                                            <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 12 }} className={styles.formbutton}>
                                                <Button type="submit" variant="primary">
                                                    submit
                                                </Button>
                                            </Grid2>


                                        </Grid2>

                                    </Container>
                                </Grid2>
                            </form>
                        </Box>
                    </Grid2>

                </Grid2>
            </Container>
        </Grid2>
    </>)
}

export default Contact;