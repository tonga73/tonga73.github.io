import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Workspaces } from "@mui/icons-material";

import { useData } from "../../app/providers/DataProvider";

import Profile from "../profile/Profile";
import BasicTabs from "../tabs/Tabs";

import CustomizedTimeline from "../timeline/Timeline";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#101820",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function VirtualCurriculum() {
  const { data } = useData();

  const timelineContent = [
    {
      title: "Skills",
      subtitle: "web design",
      icon: <Workspaces />,
      stats: data.webDesign,
    },
    {
      title: "",
      subtitle: "other tools",
      icon: "",
      stats: data.otherTools,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Item>
            <Profile />
          </Item>
        </Grid>
        <Grid container xs={12} md={8} spacing={0} sx={{ pt: 1 }}>
          {timelineContent.map((e, index) => {
            return (
              <Grid item key={index} xs={12}>
                <CustomizedTimeline
                  title={e.title}
                  subtitle={e.subtitle}
                  icon={e.icon}
                  stats={e.stats}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
