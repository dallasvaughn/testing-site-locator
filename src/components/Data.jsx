import React, { Fragment } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import locations from "../locations";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#e4e3e3",
    width: "550px",
    borderRadius: "15px",
    margin: "30px",
    "@media (max-width:900px)": {
      width: "400px",
    },
    "@media (max-width:500px)": {
      width: "300px",
    },
    "@media (max-width:400px)": {
      width: "250px",
    },
  },
});

const Data = ({
  locationDataOne,
  locationDataTwo,
  locationOne,
  locationTwo,
}) => {
  const classes = useStyles();
  const colors = ["#00C49F", "#0088FE"];

  let stateOne = locations.filter((location) => location.value === locationOne);
  let stateOnePop = Object(stateOne[0]).pop;
  stateOne = Object(stateOne[0]).name;

  let stateTwo = locations.filter((location) => location.value === locationTwo);
  let stateTwoPop = Object(stateTwo[0]).pop;
  stateTwo = Object(stateTwo[0]).name;

  let data = [
    {
      name: stateOne,
      "Testing locations": locationDataOne.length,
      "Population (million)": stateOnePop,
      "Testing sites/million":
        Math.round(
          (locationDataOne.length / stateOnePop + Number.EPSILON) * 100
        ) / 100,
    },
    {
      name: stateTwo,
      "Testing locations": locationDataTwo.length,
      "Population (million)": stateTwoPop,
      "Testing sites/million":
        Math.round(
          (locationDataTwo.length / stateTwoPop + Number.EPSILON) * 100
        ) / 100,
    },
  ];

  if (!locationOne || !locationTwo) {
    return <h1 className="data-error-message">Compare data between states</h1>;
  } else if (locationDataOne.length === 1 || locationDataTwo.length === 1) {
    return (
      <h1 className="data-error-message">
        Sorry, at least one state selected does not contain testing data yet!
      </h1>
    );
  } else if (stateOne === stateTwo) {
    return (
      <h1 className="data-error-message">Please select two different states</h1>
    );
  } else {
    return (
      <Fragment>
        <div className="data-container">
          <Box className={classes.box}>
            <h1 className="chart-title">Testing Locations Per Capita</h1>
            <ResponsiveContainer width="99%" height={400}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Population (million)" fill="#82ca9d" />
                <Bar dataKey="Testing sites/million" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
          <Box className={classes.box}>
            <h1 className="chart-title">Number of Testing Locations</h1>
            <ResponsiveContainer width="99%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  dataKey="Testing locations"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
                <Legend align="center" layout="horizontal" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </div>
      </Fragment>
    );
  }
};

export default Data;
