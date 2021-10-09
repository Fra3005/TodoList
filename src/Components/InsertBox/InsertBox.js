import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
export default function InsertItem() {
  const [element, setElement] = useState(null);

  const handleChangeElement = (e) => {
    setElement(e.target.value);
  };
  return (
    <>
      <div className="container">
        <Card style={{ width: "auto", position: "fixed" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Inserisci
            </Typography>
            <TextField
              label="Inserisci Task"
              variant="outlined"
              value={element}
              onChange={handleChangeElement}
            />
            <Button
              variant="contained"
              style={{ height: "55px", marginLeft: "5px" }}
            >
              Inserisci
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
