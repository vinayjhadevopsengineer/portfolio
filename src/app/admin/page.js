import { Container, Grid2 , Box , } from "@mui/material";
import {Typography} from "@mui/material";
import styles from "./page.module.css"
import Layout from "../../../component/Layout";
function Admin()
{
    return(<>
        
        <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="lg">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Box className={styles.breadcrum}>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Admin
                        </Typography>
                    </Box>
                </Grid2>
            </Container>
        </Grid2>

        {/* <Grid2 container className={styles.aboutbox}>
            <Container maxWidth="md">
                <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
                    <Layout>
                        <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
                            Admin
                        </Typography>
                    </Layout>
                </Grid2>
            </Container>
        </Grid2> */}
    
    </>)
}


export default Admin;