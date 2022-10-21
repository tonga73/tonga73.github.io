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
        {contactList.map((e, index) => {
          return (
            <ListItem
              button
              key={index}
              sx={{
                textAlign: "right",
                gap: 1,
              }}
            >
              <ListItemText primary={e.content} />
              <ListItemIcon sx={{ color: "#101820", minWidth: "auto" }}>
                {e.icon}
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
