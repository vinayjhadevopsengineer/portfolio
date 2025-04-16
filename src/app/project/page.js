'use client'
import { Grid2, Container, Box, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styles from "./page.module.css"
import Link from "next/link";
function Project() {
  return (<>
    <Grid2 container className={styles.aboutbox}>
      <Container maxWidth="lg">
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className={styles.aboutbanner}>
          <Box className={styles.breadcrum}>
            <Typography variant="h3" sx={{ color: "#F2DCA6" }}>
              My Project
            </Typography>
          </Box>
          <Box className={styles.breadcrum}>
            <Breadcrumbs aria-label="breadcrumb" color="#98949E">
              <Link underline="hover" sx={{ color: "#FFA500" }} href="/">
                Home
              </Link>
              <Link
                underline="none"
                color="#FFA500"
                href="/about"
              >
                About
              </Link>
            </Breadcrumbs>
          </Box>
        </Grid2>
      </Container>
    </Grid2>
    <Grid2 container className={styles.project}>
      <Container maxWidth="lg">
        <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Box className={styles.projectbox}>

          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Box className={styles.projectbox}>

          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Box className={styles.projectbox}>

          </Box>
        </Grid2>
        </Grid2>
        <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Box className={styles.projectbox}>

          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Box className={styles.projectbox}>

          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <Box className={styles.projectbox}>

          </Box>
        </Grid2>
        </Grid2>
      </Container>
    </Grid2>

  </>)
}

export default Project;


// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SlickSlider = () => {
//   const [expanded, setExpanded] = useState(false);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };

//   const slides = [
//     { id: 1, title: "Slide 1" },
//     { id: 2, title: "Slide 2" },
//     { id: 3, title: "Slide 3" },
//     { id: 4, title: "Slide 4" },
//     { id: 5, title: "Slide 5" },
//     { id: 6, title: "Slide 6" },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//       >
//         {expanded ? "Collapse" : "Expand All"}
//       </button>

//       {!expanded ? (
//         <Slider {...settings}>
//           {slides.map((slide) => (
//             <div key={slide.id} className="p-2">
//               <div className="p-6 bg-gray-300 rounded-lg text-center">
//                 {slide.title}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//           {slides.map((slide) => (
//             <div key={slide.id} className="p-2">
//               <div className="p-6 bg-gray-300 rounded-lg text-center">
//                 {slide.title}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SlickSlider;



