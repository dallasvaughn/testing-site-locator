import React, { useState } from "react";
import Header from "./Header";
import LocationSearch from "./LocationSearch";
import axios from "axios";
import CardList from "./CardList";

const App = () => {
  const [locationData, setLocationData] = useState([]);

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
    <div>
      <Header />

      <LocationSearch getLocationData={getLocationData} />

      <CardList locationData={locationData} />
    </div>
  );
};

export default App;
