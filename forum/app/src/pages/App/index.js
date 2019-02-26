import React, { Component } from "react";

import Topic from "../../components/Topic";

import { request } from "../../utils";

import classes from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {
          title: "general",
          author: "maddocash"
        },
        {
          title: "general",
          author: "maddocash"
        },
        {
          title: "general",
          author: "maddocash"
        },
        {
          title: "general",
          author: "maddocash"
        }
      ]
    };
  }
  componentDidMount() {
    const topics = request();
    console.log({ topics });
  }

  render() {
    const { topics } = this.state;
    return (
      <div id={classes.container}>
        {topics.map((itm, idx) => (
          <Topic {...itm} key={idx} />
        ))}
      </div>
    );
  }
}

export default App;
