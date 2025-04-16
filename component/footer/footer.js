'use client'
import { Container, Grid, Grid2, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import styles from "./footer.module.css"
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useForm } from "react-hook-form";
function Footer() {
  let {register , handleSubmit} = useForm();
  async function onSubmit(data)
  {
    console.log(data);
    let url = "http://localhost:3000/api/subscribe";
    let subscribe = await fetch(url,{
      method:"POST",
      headers:{
        "Content-type" : "application/json"
      },
      body:JSON.stringify(data)
    })
    return subscribe;
  }
  return (<>

   <Grid2 container className={styles.footer}>
    <Container maxWidth="lg" >
    <Grid2 xs={12} sm={12} md={12} lg={12} xl={12} className={styles.typo}>
    <Typography variant="p" sx={{ color: "#98949E" }}>
              ||  Get Latest Updates
    </Typography>
    </Grid2>
    <Grid2 xs={12} sm={12} md={12} lg={12} xl={12} className={styles.typo}>
    <Typography variant="h4" sx={{ mt: 4, color: "#F5F5F5" }}>
              Subscribe For Newsletter
    </Typography>
    </Grid2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid2 xs={12} sm={12} md={12} lg={12} xl={12} className={styles.subscriptionbox}>
     <div>
     
     <input id="outlined-basic" label="Joedoe@gmail.com" variant="outlined" className={styles.subscribechannelinput}
            sx={{ "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFA500",
              borderWidth: "2px",
              color: "#FFA500",
              backgroudColor : "transparent"
            },
            "& .MuiInputLabel-outlined": {
          color: "#FFA500",
          fontWeight: "bold",
        },
          
          
          }}
          placeholder="joedoe@gmail.com"
          {...register("email")}
            />
     
     </div>
     <div>
     <Button type="submit" variant="outlined" size="large" className={styles.subbutton} sx={{borderColor : "#F5F5F5" , color : "#98949E" ,
              paddingTop : "10px"
            }}>
              Subscribe me
            </Button>
     </div>
    </Grid2>
    </form>
      <Grid2 container className={styles.socialbox}>
      <Grid2 xs={12} sm={12} md={12} lg={4} xl={4} className={styles.mobile}>
      <div className={styles.mobicon} sx={{color:"#F2DCA6"}}><LocalPhoneIcon sx={{color:"#F2DCA6"}}/></div>
      <div><Typography variant="p" sx={{ color: "#F5F5F5" }}>
              +917678384520
    </Typography></div>
    </Grid2>
    <Grid2 xs={12} sm={12} md={12} lg={4} xl={4} className={styles.mobile}>
    <div className={styles.mobicon}><AlternateEmailIcon sx={{color:"#F2DCA6"}}/></div>
    <div><Typography variant="p" sx={{ color: "#F5F5F5" }}>
              vinayjha.mca@gmail.com
    </Typography></div>
    </Grid2>
    <Grid2 xs={12} sm={12} md={12} lg={4} xl={4} className={styles.socialboxwrap}>
    <div><FacebookOutlinedIcon sx={{color:"#F2DCA6"}}/></div>
    <div><GitHubIcon sx={{color:"#F2DCA6"}}/></div>
    <div><LinkedInIcon sx={{color:"#F2DCA6"}}/></div>
    </Grid2>
      </Grid2>
    </Container>
   </Grid2>

  </>);
}

export default Footer;