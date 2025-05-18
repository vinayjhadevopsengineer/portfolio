// components/HeroBanner.js
'use client'
import React from 'react';
import { Box, Typography,  IconButton, Grid2 } from '@mui/material';
import { Cloud, Code, DeviceHub } from '@mui/icons-material';
import vkj from "../public/vkj.svg"
import Image from 'next/image';
import WebhookIcon from '@mui/icons-material/Webhook';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TypeAnimation } from 'react-type-animation';
import html from "../public/html.svg";
import css from  "../public/css.svg";
import js from  "../public/js.svg";
import next from "../public/next.svg"
import mongodb from "../public/mongodb.svg"
import aws from "../public/aws.svg"
import "./global.css"
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // To avoid overflow of video
      }}
      className="bannertop"
    >
      {/* Background Video */}
      <Box
        sx={{
          position: 'absolute',
          top: "0",
          left: "0",
          width: '100%',
          height: '100%',
          zIndex: "-1", // Ensure it stays behind content
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Box sx={{ maxWidth: "100%", padding: 2, textAlign: 'center' , color : "#fff"}}>
        <Typography variant="h4" gutterBottom>
          Welcome to <span>
            <Image src={vkj} alt='svg icon not found'/>
          </span>
        </Typography>
        <Grid2 container>
          <Grid2 item size={{xs:12 , sm:6 , md:6 , lg:12 , xl:6}}>
          <Typography variant="p" >
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am Cloud Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am Cloud Engineer',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '20px', display: 'inline-block' }}
      repeat={Infinity}
    />
        </Typography>
          </Grid2>
        </Grid2>
        {/* <Box> */}
        <Grid2 container spacing={2} justifyContent="center" sx={{mt:4}}>
          <Grid2 item size={{xs:4 , sm:4 , md:6 , lg:2 , xl:6}} className="divalign">
            <Image src={html} alt='html svg icon here' width={40} height={40}/>
          </Grid2>
          <Grid2 item size={{xs:4 , sm:4 , md:6 , lg:2 , xl:6}} className="divalign">
          <Image src={css} alt='css svg icon ' width={40} height={40}/>
          </Grid2>
          <Grid2 item size={{xs:4 , sm:4 , md:6 , lg:2 , xl:6}} className="divalign">
          <Image src={js} alt='css svg icon ' width={40} height={40}/>
          </Grid2>
          <Grid2 item size={{xs:4 , sm:4 , md:6 , lg:2 , xl:6}}  className="divalign">
          
          <Image src={next} alt='css svg icon ' width={50} height={50}/>
          </Grid2>
          <Grid2 item size={{xs:4 , sm:4 , md:6 , lg:2 , xl:6}} className="divalign">
          
          <Image src={mongodb} alt='css svg icon ' width={50} height={50}/>
          
          </Grid2>
          <Grid2 item size={{xs:4 , sm:4 , md:6 , lg:2 , xl:6}} className="divalign">
          <Image src={aws} alt='css svg icon ' width={50} height={50}/>
          </Grid2>
          <Grid2 item size={{xs:12 , sm:12 , md:6 , lg:12 , xl:6}} sx={{mt:3}} className="btnbox">
          <Button variant="outlined" startIcon={<KeyboardArrowRightIcon/>} size="large">Hire me</Button>
          <Button variant="text" startIcon={< DownloadDoneIcon/>}>Resume</Button>
          </Grid2>
        </Grid2>
        {/* </Box> */}
        
      </Box>
    </Box>
  );
};

export default HeroBanner;
