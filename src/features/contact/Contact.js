import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Email, Language, Smartphone } from "@mui/icons-material/";
import { ListItemIcon, Typography } from "@mui/material";

const contactList = [
  {
    content: "+54 3754 463051",
    icon: <Smartphone />,
  },
  {
    content: "gastonmm@gmail.com",
    icon: <Email />,
  },
  {
    content: "https://tonga73.github.io/",
    icon: <Language />,
  },
];

export default function Contact() {
  return (
    <>
      <Typography
        variant="h5"
        color="secondary"
        sx={{
          textTransform: "lowercase",
          textAlign: "right",
          textDecoration: "underline",
          px: 2,
          mt: 5,
        }}
      >
        Contact
      </Typography>
      <List sx={{ width: "100%", color: "#101820" }}>
        <ListItem
          component="a"
          href="tel:+54 3754 463051"
          button
          alt="Call"
          sx={{
            textAlign: "right",
            gap: 1,
          }}
        >
          <ListItemText primary="+54 3754 463051" />
          <ListItemIcon sx={{ color: "#101820", minWidth: "auto" }}>
            <Smartphone />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component="a"
          href="mailto:gastonmm@gmail.com"
          button
          alt="Call"
          sx={{
            textAlign: "right",
            gap: 1,
          }}
        >
          <ListItemText primary="gastonmm@gmail.com" />
          <ListItemIcon sx={{ color: "#101820", minWidth: "auto" }}>
            <Email />
          </ListItemIcon>
        </ListItem>
        <ListItem
          component="a"
          href="https://tonga73.github.io/"
          button
          alt="Call"
          sx={{
            textAlign: "right",
            gap: 1,
          }}
        >
          <ListItemText primary="https://tonga73.github.io/" />
          <ListItemIcon sx={{ color: "#101820", minWidth: "auto" }}>
            <Language />
          </ListItemIcon>
        </ListItem>
      </List>
    </>
  );
}
