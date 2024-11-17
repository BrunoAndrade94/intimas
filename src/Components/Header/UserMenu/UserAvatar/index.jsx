import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";
import * as React from "react";

export default function UserAvatar() {
  return (
    <IconButton>
      <Stack direction="row">
        <Avatar
          className="user-avatar"
          sx={{
            bgcolor: deepPurple[500],
            width: 24,
            height: 24,
          }}
        >
          R
        </Avatar>
      </Stack>
    </IconButton>
  );
}
