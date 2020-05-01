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
    if (this.state.data.length === 0) {
      fetch("https://api.football-data.org/v2/competitions", {
        headers: { "X-Auth-Token": "97bb7b6b1f1c44f6bf78721d6b0d51ef" },
      })
        .then((res) => res.json())
        .then((all) => {
          let freeContests = [];
          all.competitions.forEach((competition) => {
            if (isPresent(competition.id)) {
              console.log(competition);
              freeContests.push(competition);
            }
          });
          //   add logo for competitions
          freeContests.forEach((ele) => {
            switch (ele.id) {
              case 2001:
                ele.emblemUrl =
                  "https://seeklogo.com/images/U/UEFA_Champions_League-logo-DD9AE0500D-seeklogo.com.png";
                break;
              case 2017:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Liga_NOS_logo.png";
                break;
              case 2021:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png";
                break;
              case 2003:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/1200px-Eredivisie_nieuw_logo_2017-.svg.png";
                break;
              case 2002:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png";
                break;
              case 2015:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Ligue_1_Logo.svg/1200px-Ligue_1_Logo.svg.png";
                break;
              case 2019:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Serie_A_logo_%282019%29.svg/1200px-Serie_A_logo_%282019%29.svg.png";
                break;
              case 2014:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/3/35/La_Liga.png";
                break;
              case 2016:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/3/37/EFL_Championship.png";
                break;
              case 2013:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png/200px-Campeonato_Brasileiro_S%C3%A9rie_A_logo.png";
                break;
              case 2000:
                ele.emblemUrl =
                  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/2018_FIFA_World_Cup.svg/1200px-2018_FIFA_World_Cup.svg.png";
                break;
              case 2018:
                ele.emblemUrl =
                  "https://www.thesportsdb.com/images/media/league/badge/el53xu1551733974.png";
            }
          });
          this.setState({
            data: freeContests,
          });
          localStorage.setItem("competitions", JSON.stringify(freeContests));
        })
        .catch((err) => alert(err));
    }
  }
  render() {
    return (
      <div>
        <div className="card-deck">
          {this.state.data.map((competiton) => (
            <CompCard
              img={competiton.emblemUrl}
              title={competiton.name}
              country={competiton.area.name}
              key={competiton.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Competitions;
