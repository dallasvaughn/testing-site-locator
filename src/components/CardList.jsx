import React from "react";
import LocationCard from "./LocationCard";

const CardList = (props) => {
  return (
    <div>
      {props.locationData.length === 1 ? (
        <div>No location data available yet!</div>
      ) : (
        props.locationData.map((location) => (
          <LocationCard
            key={location.id}
            name={location.name}
            address={
              location.physical_address.length > 0
                ? location.physical_address[0].address_1
                : "Address not added yet"
            }
            description={location.description}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
