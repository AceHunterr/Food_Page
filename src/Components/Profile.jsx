import React from "react";
import Sidenav from "./sidenav";
import { Box } from "@mui/material";

const Profile = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div>ProfilePage to be determined...</div>
      </Box>
    </Box>
  );
};

export default Profile;
