import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, Box } from "@mui/material";
import ListTask from "../TaskList/List";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

export default function InsertItem() {
  const [array, setArray] = useState([]);
  const [element, setElement] = useState("");
  const [flag, setFlag] = useState(true);
  const [errorElement, setErrorElement] = useState(false);
  const handleChangeElement = (e) => {
    setElement(e.target.value);
  };

  useEffect(() => {
    element.length === 0 ? setFlag(true) : setFlag(false);
  }, [element]);

  const handleSubmit = (e) => {
    let tmp = [...array];
    e.preventDefault();
    setErrorElement(false);
    if (element == "") setErrorElement(true);
    if (element != "") {
      tmp.push(element);
    }
    setArray([...tmp]);
  };

  const deleteTask = (e) => {
    let tmp = array.findIndex((item) => item === e);
    let array1 = [...array];
    array1.splice(tmp, 1);
    setArray([...array1]);
  };

  useEffect(() => {
    console.log(array);
  }, [array]);
  return (
    <>
      <Container style={{ marginTop: "2vh" }}>
        <Grid container>
          <Grid item md={3}></Grid>
          <Grid item md={6} style={{ textAlign: "center" }}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Inserisci
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    label="Inserisci Task"
                    variant="outlined"
                    value={element}
                    onChange={handleChangeElement}
                    error={errorElement}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ height: "55px", marginLeft: "5px" }}
                    disabled={flag}
                    endIcon={<KeyboardArrowRightIcon />}
                  >
                    Inserisci
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
        <Box style={{ width: "100%" }}>
          <Grid container style={{ marginTop: "3vh" }}>
            {array.map((item) => (
              <Grid item sm={12}>
                <List dense sx={{ boxShadow: 3 }}>
                  <ListItem
                    onClick={() => {
                      deleteTask(item);
                    }}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
