"use client"
import { Grid2, Box, Typography, Container } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import pagenotfound from "../../public/404-error.webp";
import Image from "next/image";
function PageNotFound() {
    return (<>
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Page Not Found
                        </Typography>
                    </Box>
                    <Box className={styles.breadcrum}>
                        <Breadcrumbs aria-label="breadcrumb" color="#98949E">
                            <Link underline="hover" color="#98949E" href="/">
                                Home
                            </Link>
                            <Link underline="hover" color="#98949E" href="#">
                                404
                            </Link>
                                
                            
                        </Breadcrumbs>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>

        <Grid2 container className={styles.PageNotFound}>
            <Container maxWidth="lg">
                <Grid2 container>
                    <Grid2 size={{xs:12 , sm:12 , md:12 , lg:6 , xl:12}}>
                        <Box>
                            <Typography variant="h3">
                            Sorry!
                            </Typography>
                            <Typography variant="h6">
                        This Page is Not Found.
                        </Typography>
                        </Box>
                         <Box>
                         <Typography variant="p">
                        Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown specimen book has not only five.
                        </Typography>
                         </Box>
                         <Box>
                            <Link href="/">Home</Link>
                         </Box>
                    </Grid2>
                    <Grid2 size={{xs:12 , sm:12 , md:12 , lg:6 , xl:12}}>
                        <Box className={styles.imagebox}>
                            <Image src={pagenotfound} width={500} height={500} alt="page not found"/>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Grid2>

    </>)
}

export default PageNotFound;