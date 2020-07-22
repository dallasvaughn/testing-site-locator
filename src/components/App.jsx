import React from "react";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import axios from "axios";
import CardList from "./CardList";

class App extends React.Component {
  state = { locationData: [] };

  getLocationData = (location) => {
    axios
      .get(
        `https://covid-19-testing.github.io/locations/${location}/complete.json`
      )
      .then((res) => {
        this.setState({ locationData: res.data });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <LocationSearch getLocationData={this.getLocationData} />
        <CardList locationData={this.state.locationData} />
      </div>
    );
  }
}

export default App;
