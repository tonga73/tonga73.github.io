import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Email, Phone, Web } from "@mui/icons-material/";
import { ListItemIcon } from "@mui/material";

const contactList = [
  {
    content: "+54 3754 463051",
    icon: <Phone />,
  },
  {
    content: "gastonmm@gmail.com",
    icon: <Email />,
  },
  {
    content: "https://tonga73.github.io/",
    icon: <Web />,
  },
];

export default function Contact() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, color: "#101820" }}>
      {contactList.map((e) => {
        return (
          <ListItem>
            <ListItemText primary={e.content} />
            <ListItemIcon style={{ color: "#101820" }}>{e.icon}</ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
}
