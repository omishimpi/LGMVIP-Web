import React, { useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import {
  LinearProgress,
  Box,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
const url = "https://reqres.in/api/users?page=1";

const useStyles = makeStyles({
  container: {
    margin: "2rem ", 
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  align: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#CC1016",
  },
  noData: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});

const App = () => {
  const classes = useStyles();
  const [usrData, setusrData] = useState([]);
  const [load, setLoad] = useState(true);
  const getData = async () => {
    try {
      await axios.get(url).then((res) => {
        // console.log(res.data.data);
        setusrData(res.data.data);
        setLoad(false);
      });
    } catch (err) {
      console.log(`Error from ${err.message}`);
    }
  };

  const getUserData = () => {
    getData();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.align}>
          <Typography variant="h2" className={classes.title}>
              EMPLOYEE DETAILS
          </Typography>
          <Button
            onClick={() => getUserData()}
            variant="contained"
            style={{ backgroundColor: "#3cb371", color: "#ffffff" }}
          >
            GET USERS
          </Button>
        </Toolbar>
      </AppBar>
      <h3> Please click on the "GET USER" button, to get the users!!!!</h3>

      {load ? (
        <Box>
          <LinearProgress />
          <div className={classes.noData}>
            <img style={{ width: "100%" }} src="/imgs/no Data.jpg" alt="" />
          </div>
        </Box>
      ) : (
        <Box className={classes.container}>
          {usrData.map((indx) => (
            <Cards
              key={indx.id}
              firstName={indx.first_name}
              lastName={indx.last_name}
              email={indx.email}
              photo={indx.avatar}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default App;