import React from "react";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import Contact from "../contact/Contact";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f2aa4c",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Item>
        <Grid py={3} gap={3} container spacing={2}>
          <Grid display="flex" justifyContent="center" xs={6} md={12}>
            <Avatar
              sx={{
                width: 150,
                height: 150,
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: "#101820",
              }}
              alt="Gastón Mitoire"
              src="/images/avatar/yo.jpg"
            />
          </Grid>
          <Grid display="grid" gap={7} xs={6} md={12}>
            <Typography textTransform="uppercase" color="#101820" variant="h4">
              Gastón Mitoire
            </Typography>
            <Typography color="#101820" variant="body1">
              I'm 33 yo, and started working as freelancer on web design a few
              years ago, but always have been messing around computers,
              repairing them or even making online game servers to play with my
              brother and friends. Always liked graphic and video design, and
              recently started with music production tho I play guitar and other
              instruments since kid. Currently keep learning everything I can to
              make awesome UI/UX designs and apps I hope can serve others.
            </Typography>
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Contact />
      </Item>
    </Box>
  );
}
