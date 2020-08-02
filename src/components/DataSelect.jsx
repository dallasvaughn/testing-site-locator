import React, { Fragment, useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  makeStyles,
} from "@material-ui/core";
import locations from "../locations";

const useStyles = makeStyles({
  select: {
    width: "300px",
    backgroundColor: "#e4e3e3",
    margin: "10px",
    "@media (max-width:900px)": {
      width: "200px",
    },
    "@media (max-width:500px)": {
      width: "130px",
    },
  },
  button: {
    backgroundColor: "#3b6978",
  },
});

const Data = ({ getLocationDataCompare }) => {
  const [locationOne, setLocationOne] = useState("");
  const [locationTwo, setLocationTwo] = useState("");
  const classes = useStyles();

  return (
    <Fragment>
      <p className="data-p">
        <strong>Select two states to compare testing availability data</strong>
      </p>
      <div className="form-container-data">
        <FormControl variant="filled">
          <InputLabel>State</InputLabel>
          <Select
            value={locationOne}
            onChange={(e) => setLocationOne(e.target.value)}
            className={classes.select}
          >
            {locations.map((location) => (
              <MenuItem key={location.value} value={location.value}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="filled">
          <InputLabel>State</InputLabel>
          <Select
            value={locationTwo}
            onChange={(e) => setLocationTwo(e.target.value)}
            className={classes.select}
          >
            {locations.map((location) => (
              <MenuItem key={location.value} value={location.value}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="form-button-data">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => getLocationDataCompare(locationOne, locationTwo)}
        >
          Compare
        </Button>
      </div>
    </Fragment>
  );
};

export default Data;
