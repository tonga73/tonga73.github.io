import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";

export default function CircularStat(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        <Fab
          aria-label="save"
          disableRipple
          disableFocusRipple
          style={{ backgroundColor: "transparent" }}
        >
          <img
            src={props.img}
            alt=""
            style={{ maxHeight: "35px", maxWidth: "35px" }}
          />
        </Fab>
        <CircularProgress
          value={props.level}
          variant="determinate"
          size={68}
          sx={{
            color: "primary",
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}
