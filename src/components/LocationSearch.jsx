import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import locations from "../locations";

class LocationSearch extends React.Component {
  state = { location: "" };

  onFormChange = (e) => {
    this.setState({ location: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="form-container">
          <div className="form-select">
            <FormControl variant="filled">
              <InputLabel>State</InputLabel>
              <Select
                className="location-select"
                value={this.state.location}
                onChange={this.onFormChange}
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
              onClick={() => this.props.getLocationData(this.state.location)}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationSearch;
