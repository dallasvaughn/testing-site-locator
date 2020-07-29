import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "400px",
    backgroundColor: "#e4e3e3",
  },

  cardText: {
    fontFamily: "Lato",
    marginBottom: "12px",
  },
});

const LocationCard = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className="card-container">
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.cardText}>
              <strong>{props.name}</strong>
            </Typography>
            <Typography className={classes.cardText}>
              {props.address}
            </Typography>
            <Typography className={classes.cardText}>
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocationCard;
