import React from "react";
import classes from "./Topic.module.css";

const Topic = ({ title, author }) => (
  <div id={classes.container}>
    <h1>{title}</h1>
    <h3>{author}</h3>
  </div>
);

export default Topic;
