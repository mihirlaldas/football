import React, { Component } from "react";
import CompCard from "./CompCard";

export class Competitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("competitions")) || [],
    };
  }
  componentDidMount() {
    function isPresent(val) {
      let freeTier = [
        2001,
        2017,
        2021,
        2003,
        2002,
        2015,
        2019,
        2014,
        2016,
        2013,
        2000,
        2018,
      ];
      for (let i = 0; i < freeTier.length; i++)
        if (freeTier[i] === val) return true;
      return false;
    }
    fetch("https://api.football-data.org/v2/competitions")
      .then((res) => res.json())
      .then((all) => {
        let freeContests = [];
        all.competitions.forEach((competition) => {
          if (isPresent(competition.id)) {
            console.log(competition);
            freeContests.push(competition);
          }
        });
        this.setState({
          data: freeContests,
        });
        localStorage.setItem("competitions", JSON.stringify(freeContests));
      })
      .catch((err) => alert(err));
  }
  render() {
    return <div></div>;
  }
}

export default Competitions;
