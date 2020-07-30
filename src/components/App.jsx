import React, { useState, Fragment } from "react";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import axios from "axios";
import CardList from "./CardList";
import DataSelect from "./DataSelect";
import Data from "./Data";
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
  const [locationData, setLocationData] = useState([]); //state for testing site locations
  const [checked, setChecked] = useState(false);
  const [locationDataOne, setLocationDataOne] = useState([]); //state for data comparison
  const [locationDataTwo, setLocationDataTwo] = useState([]); //state for data comparison
  const [locationOne, setLocationOne] = useState("");
  const [locationTwo, setLocationTwo] = useState("");
  const classes = useStyles();

  const getLocationData = async (location) => {
    if (!location) {
      alert("Please select a state");
    } else {
      await axios
        .get(
          `https://covid-19-testing.github.io/locations/${location}/complete.json`
        )
        .then((res) => {
          setLocationData(res.data);
        });
    }
  };

  const getLocationDataCompare = async (locationOne, locationTwo) => {
    if (!locationOne || !locationTwo) {
      alert("Please select two states");
    } else {
      setLocationOne(locationOne);
      setLocationTwo(locationTwo);

      await axios
        .get(
          `https://covid-19-testing.github.io/locations/${locationOne}/complete.json`
        )
        .then((res) => {
          setLocationDataOne(res.data);
        });

      await axios
        .get(
          `https://covid-19-testing.github.io/locations/${locationTwo}/complete.json`
        )
        .then((res) => {
          setLocationDataTwo(res.data);
        });
    }
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
        <Fragment>
          <DataSelect getLocationDataCompare={getLocationDataCompare} />

          <Data
            locationDataOne={locationDataOne}
            locationDataTwo={locationDataTwo}
            locationOne={locationOne}
            locationTwo={locationTwo}
          />
        </Fragment>
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
