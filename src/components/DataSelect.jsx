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

const Data = () => {
  const [locationOne, setLocationOne] = useState("");
  const [locationTwo, setLocationTwo] = useState("");

  return (
    <Fragment>
      <p>Select two states to compare testing availability data</p>
      <FormControl variant="filled">
        <InputLabel>State</InputLabel>
        <Select value={locationOne}>
          {locations.map((location) => (
            <MenuItem key={location.value} value={location.value}>
              {location.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel>State</InputLabel>
        <Select value={locationTwo}>
          {locations.map((location) => (
            <MenuItem key={location.value} value={location.value}>
              {location.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default Data;
