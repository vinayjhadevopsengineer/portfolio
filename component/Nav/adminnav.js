// components/Navbar.js'
'use client'
import { useState , useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box, Grid2, Container,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styles from './page.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import CloseIcon from '@mui/icons-material/Close';
import vkj from "../../public/vkj.svg";
import Image from "next/image"
const Adminnav = () => {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const toggleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("#1e2224de"); // Change to any color
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box>
      {/* Desktop Navbar */}
      <AppBar position="fixed" className={styles.nav} style={{ backgroundColor: `${bgColor}` }}>
        <Toolbar>
          <Container>
            <Grid2 container className={styles.appwarp}>
              <Grid2 size={{ xs: 3, sm: 6, md: 3, lg: 1, xl: 6 }}  className={styles.mylogo}>
                
                  <Image src={vkj} alt='logo image'/>
              
              </Grid2>
              <Grid2 size={{ xs: 3, sm: 6, md: 3, lg: 10, xl: 8 }}>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: "flex" } }} className={styles.horizontalbar}>
            
        
                  <Link href="/register">Register</Link>
                </Box>
              </Grid2>
            </Grid2>
          </Container>
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'flex', sm: 'flex', md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" sx={{
        width: { xs: 240, sm: 280, md: 320 },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xs: 240, sm: 280, md: 320 }, // Same for the Drawer Paper
          boxSizing: 'border-box',
        },
      }} open={open} onClose={toggleDrawer} size="md" >
        <Box className={styles.closeicon}>
          <CloseIcon onClick={toggleDrawer} />
        </Box>
        <Box className={styles.mobiledraw}>
          <Link href="/admin/register">Register</Link>
        </Box>

        <Grid2 container className={styles.socialicon}>
          <Grid2>
            <FacebookIcon />
          </Grid2>
          <Grid2>
            <LinkedInIcon />
          </Grid2>
          <Grid2>
            <GitHubIcon />
          </Grid2>
          <Grid2>
            <XIcon />
          </Grid2>
        </Grid2>

      </Drawer>
    </Box>
  );
};

export default Adminnav;
