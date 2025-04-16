"use client"
import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./page.module.css"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinearWithValueLabel from "../../../component/progressbar/page.js";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function About() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (<>
       
       <Grid2 container className={styles.aboutbox}>
       <Container maxWidth="lg">
            <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                  <Box className={styles.breadcrum}>
                  <Typography variant="h3" sx={{color: "#F2DCA6"}}>
                    About-us
                  </Typography>
                  </Box>
                  <Box className={styles.breadcrum}>
                  <Breadcrumbs aria-label="breadcrumb" color="#98949E">
        <Link underline="hover" color="#98949E"  href="/">
         Home
        </Link>
        <Link
          underline="none"
          color="#98949E" 
          href="/about"
        >
          About
        </Link>
        </Breadcrumbs>
                  </Box>
            </Grid2>
            </Container>
        </Grid2>
        <Grid2 container className={styles.aboutdetail}>
       <Container maxWidth="lg">
            <Grid2 container>
            <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 12 }} className={styles.aboutbanner}>
                  <Box className={styles.profilebox}>
                    <IconButton onClick={()=>alert("hello here")}>
                     <PlayCircleFilledWhiteIcon sx={{width : "80px" , height:"80px" , color : "#FFA500"}}/>
                     </IconButton>
                     <Box sx={{mt:5}}>
                  <Button variant="outlined" size="large" sx={{ borderColor: "#98949E",
   color:"#98949E"}} startIcon={<DownloadIcon/>}>
         Resume
        </Button>
                  </Box>
                  </Box>
                  
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 7, xl: 12 }} className={styles.aboutbanner}>
                  <Box className={styles.abouthead}>
                  <Typography variant="h3" sx={{color: "#F5F5F5"}}>
                  I’m Vinay Kumar Jha
                  </Typography>
                  <Typography variant="h6" sx={{color:"#98949E"}}>
                  Front End Developer
                  </Typography>
                  </Box>
                  <Box className={styles.abouttext}>
                    <Typography variant="p" sx={{color:"#98949E" , fontWeight:100}}>
                    I'm a passionate Front-End Developer with a strong focus on creating responsive, user-friendly, and visually appealing web applications. With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I enjoy bringing designs to life and optimizing user experiences. Constantly learning and staying up-to-date with the latest web technologies, I strive to build clean, efficient, and scalable code.

Let's build something amazing together! 
                    </Typography>
                  </Box>
                  <Box sx={{width:"100%" , marginTop : "15px" }}>
                  <Button variant="outlined" size="large" sx={{ borderColor: "#98949E",
   color:"#98949E"}}>
         Resume
        </Button>
                  </Box>
                  
            </Grid2>

            </Grid2>
            
            </Container>
        </Grid2>

        <Grid2 container className={styles.education}>
          <Container maxWidth="lg">
             <Grid2 xs={12} sm={12} md={12} lg={12} xl={12} className={styles.educationblock}>
             <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: '#F5F5F5' , color : "#F5F5F5" ,display:"flex" , justifyContent:"center" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        textColor="#98949E"
        indicatorColor="#1e2224de"
        >
          <Tab label="Education" {...a11yProps(0)} sx={{color : "#F5F5F5"}}/>
          <Tab label="Experience" {...a11yProps(1)} sx={{color : "#F5F5F5"}}/>
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className={styles.horizontalview}>
      <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} sx={{marginTop:"10px",padding:"10px"}}>
        <div  className={styles.educationlist} >
        <Typography variant="p"sx={{color:"#98949E"}}>
        2009 - 2010
        
        </Typography> 
        
        
        </div>
        <div className={styles.educationbox}>
         <div className={styles.educationtext}>
         <Typography variant="h5" sx={{color: "#F5F5F5"}}>
          Bachelor of Business Administration
          </Typography>
          <Typography variant="p" sx={{color : "#98949E"}}>
            University of California, Berkeley
            </Typography>
         </div>
         <Typography variant="p" sx={{color:"#7c7881" , lineHeight:"25px"}} className={styles.para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.
            </Typography>
        </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} sx={{marginTop:"10px",padding:"10px"}}>
        <div  className={styles.educationlist} >
        <Typography variant="p" sx={{color:"#98949E"}}>
        2009 - 2010
        </Typography> 
        </div>
        <div className={styles.educationbox}>
         <div className={styles.educationtext}>
         <Typography variant="h5" sx={{color: "#F5F5F5"}}>
          Bachelor of Business Administration
          </Typography>
          <Typography variant="p" sx={{color:"#98949E"}}>
            University of California, Berkeley
            </Typography>
            
         </div>
         <Typography variant="p" sx={{color:"#7c7881" , lineHeight:"25px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.
            </Typography>
        </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} sx={{marginTop:"20px",padding:"10px"}}>
        <div  className={styles.educationlist} >
        <Typography variant="p"sx={{color:"#98949E"}}>
        2009 - 2010
        </Typography> 
        </div>
        <div className={styles.educationbox}>
         <div className={styles.educationtext}>
         <Typography variant="h5" sx={{color: "#F5F5F5"}}>
          Bachelor of Business Administration
          </Typography>
          <Typography variant="p" sx={{color:"#98949E"}}>
            University of California, Berkeley
            </Typography>
           
         </div>
         <Typography variant="p" sx={{color:"#7c7881" , lineHeight:"25px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.
            </Typography>
        </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} sx={{marginTop:"20px",padding:"10px"}}>
        <div  className={styles.educationlist} >
        <Typography variant="p"sx={{color:"#98949E"}}>
        2009 - 2010
        </Typography> 
        </div>
        <div className={styles.educationbox}>
         <div className={styles.educationtext}>
         <Typography variant="h5"  sx={{color: "#F5F5F5"}}>
          Bachelor of Business Administration
          </Typography>
          <Typography variant="p" sx={{color:"#98949E"}}>
            University of California, Berkeley
            </Typography>
            
         </div>
         <Typography variant="p" sx={{color:"#7c7881" , lineHeight:"25px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.
            </Typography>
        </div>
        </Grid2>
      </Grid2>



        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Grid2 container>
       <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} sx={{marginTop:"20px",padding:"10px"}}>
        <div  className={styles.educationlist} >
        <Typography variant="p"sx={{color:"#98949E"}}>
        2009 - 2010
        </Typography> 
        </div>
        <div className={styles.educationbox}>
         <div className={styles.educationtext}>
         <Typography variant="h5" sx={{color: "#F5F5F5"}}>
          Bachelor of Business Administration
          </Typography>
          <Typography variant="p" sx={{color:"#98949E"}}>
            University of California, Berkeley
            </Typography>
           
         </div>
         <Typography variant="p" sx={{color:"#7c7881" , lineHeight:"25px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.
            </Typography>
        </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 12 }} sx={{marginTop:"20px",padding:"10px"}}>
        <div  className={styles.educationlist} >
        <Typography variant="p"sx={{color:"#98949E"}}>
        2009 - 2010
        </Typography> 
        </div>
        <div className={styles.educationbox}>
         <div className={styles.educationtext}>
         <Typography variant="h5" sx={{color: "#F5F5F5"}}>
          Bachelor of Business Administration
          </Typography>
          <Typography variant="p" sx={{color:"#98949E"}}>
            University of California, Berkeley
            </Typography>
           
         </div>
         <Typography variant="p" sx={{color:"#7c7881" , lineHeight:"25px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.
            </Typography>
        </div>
        </Grid2>
       </Grid2>
      </CustomTabPanel>
    </Box>
             </Grid2>
          </Container>
        </Grid2>

          {/* skill section here */}

        <Grid2 container className={styles.skills}>
          <Container maxWidth="lg">
            <Grid2 xs={12} sm={12} md={12} lg={12} xl={12} className={styles.skillparent}>
            <Box className="slider-container">
      <Slider {...settings}>
        <Grid2 className={styles.skillslider}>
          <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#F2DCA6" viewBox="0 0 24 24">
  <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z"/>
</svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="80"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">HTML</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons} sx={{color:"#F2DCA6"}}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#F2DCA6" viewBox="0 0 24 24">
  <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z"/>
</svg>

            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="70"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">CSS</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" fill="none" viewBox="0 0 128 128" id="javascript">
  <path stroke="#F2DCA6" strokeLinecap="round" strokeWidth="7" d="M43 68V68C43 71.866 46.134 75 50 75H50.75C55.0302 75 58.5 71.5302 58.5 67.25V54M82.5 53H75C71.9624 53 69.5 55.4624 69.5 58.5V58.5C69.5 61.5376 71.9624 64 75 64H77.25C80.1495 64 82.5 66.3505 82.5 69.25V69.25C82.5 72.1495 80.1495 74.5 77.25 74.5H69.5"></path>
</svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="60"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">JavaScript</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
      
<svg fill="#F2DCA6" width="58px" height="58px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>react</title>
<path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
</svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="60"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">Reactjs</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
            
            <svg fill="#F2DCA6" width="58px" height="58px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0-3 1.73V7.67l3-1.732V2.474z"/></svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="50"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">Material-Ui</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F2DCA6" viewBox="0 0 394 80"><path fill="#F2DCA6" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#F2DCA6" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="60"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">Nextjs</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
            <svg fill="#F2DCA6" width="58px" height="58px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>mongodb</title>
<path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
</svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="50"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">MongoDB</Link>
            </div>
          </Box>
        </Grid2>
        <Grid2 className={styles.skillslider}>
        <Box className={styles.skillbox}>
            <div className={styles.skillicons}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#F2DCA6" viewBox="0 0 24 24">
  <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z"/>
</svg>
            </div>
            <div className={styles.progressbarbox}>
            <LinearWithValueLabel progressvalue="50"/>
            </div>
            <div className={styles.bloglink}>
              <Link href="/blog">Cloud Computing</Link>
            </div>
          </Box>
        </Grid2>
      </Slider>
    </Box>
            </Grid2>

          </Container>
        </Grid2>
       
    </>)
}
export default About;