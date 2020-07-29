import React, { useState } from "react";
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
  },
  button: {
    backgroundColor: "#3b6978",
  },
});

const LocationSearch = (props) => {
  const [location, setLocation] = useState("");
  const classes = useStyles();

  return (
    <div>
      <div className="form-container">
        <div className="form-select">
          <FormControl variant="filled">
            <InputLabel>State</InputLabel>
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
        <div className="form-button">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => props.getLocationData(location)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationSearch;
