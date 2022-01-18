import { Outlet, NavLink } from "react-router-dom";
import { Box, Icon, Stack } from "@mui/material";
import { Home as HomeIcon } from '@mui/icons-material';


export function Layout() {
  return (
    <div>
      <Stack
        alignItems="center"
        direction={"row"}
        justifyContent={"space-between"}
      >
      <HomeIcon color="primary"></HomeIcon>
     
        <Box>一</Box>
        <Box>二</Box>
        <Box
          sx={{        
            color:'white',
            fontWeight:'bold',
            // textAlign:'left',
            width: '8em',
            height: '3em',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >ddfdf</Box>
      </Stack>
      <nav>
        <NavLink to={"/invoices"}>invoices</NavLink>
        <NavLink to={"/expenses"}>Expences</NavLink>
      </nav>
      <Icon sx={{width:'10em',height:'1.5em'}}>add_cercle</Icon>
      <Outlet />
    </div>
  );
}
