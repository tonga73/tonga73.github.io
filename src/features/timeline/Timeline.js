import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Box } from "@mui/material";
import { Email, ViewQuilt, AccountTree } from "@mui/icons-material";

import CircularStat from "../circularStat/CircularStat";

export default function CustomizedTimeline(props) {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      {props.title && (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              style={{ boxShadow: "none", color: "#101820", marginTop: "23px" }}
              color="primary"
            >
              {props.icon}
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "#f2aa4c" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ pt: "12px", pb: "24px" }}>
            <Typography
              color="primary"
              variant="h3"
              textTransform="lowercase"
              sx={{
                fontWeight: 400,
              }}
            >
              {props.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      )}
      <TimelineItem sx={{ pl: "12px" }}>
        <TimelineSeparator>
          <TimelineDot
            style={{ boxShadow: "none", color: "#101820" }}
            color="primary"
          />
          <TimelineConnector sx={{ bgcolor: "#f2aa4c" }} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            color="primary"
            variant="h5"
            textTransform="lowercase"
            sx={{
              fontWeight: 400,
            }}
          >
            {props.subtitle}
          </Typography>
          <Grid container gap={1} columns={{ xs: 6 }}>
            {props.stats &&
              !!props.stats &&
              props.stats.map((stat, index) => {
                return (
                  <Grid
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    rowGap={1}
                    key={index}
                    xs={1}
                    item
                  >
                    <CircularStat level={stat.level} img={stat.img} />
                    <Typography color="#fff">{stat.name}</Typography>
                  </Grid>
                );
              })}
          </Grid>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
