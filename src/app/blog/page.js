"use client"
import { Grid2, Box, Typography, Container, Input, Button, FormControl, InputLabel } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css"
import Breadcrumbs from "@mui/material/Breadcrumbs";

function Blog() {
   
    return (<>
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Blog
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
                                Blog
                            </Link>
                        </Breadcrumbs>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>

        <Grid2 container className={styles.blogcontent}>
            <Container maxWidth="lg">
                <Grid2 container>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 12 }}>
                        <Box>
                            <Typography variant="h5">
                                search icon
                            </Typography>
                        </Box>
                        <Box>
                           
                        </Box>
                    </Grid2>
                    <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 12 }}>

                    </Grid2>
                </Grid2>
            </Container>
        </Grid2>


    </>)
}

export default Blog;