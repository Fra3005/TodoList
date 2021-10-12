import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
export default function Delete(props) {
  return (
    <div
      onClick={() => {
        console.log(props);
      }}
    >
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
