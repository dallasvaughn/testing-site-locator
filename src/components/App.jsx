import React, { useState, Fragment } from "react";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import axios from "axios";
import CardList from "./CardList";
import DataSelect from "./DataSelect";
import { Switch, FormControlLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  switch: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#84a9ac",
    width: "190px",
    margin: "0 auto",
    fontFamily: "Arial",
  },
});

const App = () => {
  const [locationData, setLocationData] = useState([]);
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const getLocationData = async (location) => {
    await axios
      .get(
        `https://covid-19-testing.github.io/locations/${location}/complete.json`
      )
      .then((res) => {
        setLocationData(res.data);
      });
  };

  return (
    <Fragment>
      <Header />
      <div className="switch-container">
        <FormControlLabel
          className={classes.switch}
          control={
            <Switch
              checked={checked}
              color="primary"
              onChange={(e) => setChecked(e.target.checked)}
            />
          }
          label="Data Visualization"
        />
      </div>

      {checked ? (
        <DataSelect />
      ) : (
        <Fragment>
          <LocationSearch getLocationData={getLocationData} />

          <CardList locationData={locationData} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
