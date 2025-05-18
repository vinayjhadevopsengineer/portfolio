// "use client"
// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Drawer,
//   CssBaseline,
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Box,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   Settings as SettingsIcon
// } from '@mui/icons-material';

// const drawerWidth = 240;

// const DashboardLayout = ({ children }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Dashboard', 'Settings'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <DashboardIcon /> : <SettingsIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />

//       {/* AppBar */}
//       <AppBar  sx={{ zIndex: theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           {isMobile && (
//             <IconButton
//               color="inherit"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" noWrap component="div">
//             Responsive Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer */}
//       <Box component="nav">
//         <Drawer
//           variant={isMobile ? 'temporary' : 'permanent'}
//           open={isMobile ? mobileOpen : true}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better mobile performance
//           }}
//           sx={{
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//               boxSizing: 'border-box'
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//       {/* Main Content */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` }
//         }}
//       >
//         <Toolbar />
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default DashboardLayout;
