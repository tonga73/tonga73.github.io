import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, IconButton } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

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
      {/* MAIN TITLE */}
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

      {/* CIRCULAR STATS */}
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
          {!!props.circularStats && props.circularStats.length > 0 && (
            <Grid container gap={1} columns={{ xs: 6 }}>
              {props.circularStats.map((stat, index) => {
                return (
                  <Grid
                    key={index}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    rowGap={1}
                    xs={1}
                    item
                  >
                    <CircularStat level={stat.level} img={stat.img} />
                    <Typography color="#fff">{stat.name}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          )}
          {!!props.textStats && props.textStats.length > 0 && (
            <Grid container>
              {props.textStats.map((stat, index) => {
                return (
                  <Grid
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    item
                    xs={12}
                  >
                    <Typography variant="h5" color="primary">
                      - {stat.name}
                    </Typography>
                    <Typography variant="h6" color="#777">
                      | {stat.years}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          )}
          {!!props.projects && props.projects.length > 0 && (
            <Grid container>
              {props.projects.map((e, index) => {
                return (
                  <Grid key={index} container gap={1} xs={12}>
                    <Grid display="flex" alignItems="center" gap={1} item>
                      <Typography
                        color="#777"
                        variant="h5"
                        fontStyle="italic"
                        sx={{
                          fontWeight: 300,
                        }}
                      >
                        {e.description}
                      </Typography>
                      <Typography variant="h5" color="primary">
                        | {e.role}
                      </Typography>
                    </Grid>
                    <Grid item display="flex" xs={12}>
                      <Typography variant="h4" color="primary">
                        {e.reference}
                      </Typography>
                      {e.reference.includes(".com") && (
                        <IconButton
                          target="_blank"
                          onClick={() =>
                            window.open(`http://${e.reference}`, "_blank")
                          }
                          color="primary"
                        >
                          <OpenInNew />
                        </IconButton>
                      )}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
