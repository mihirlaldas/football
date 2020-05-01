import React, { Component } from "react";
import Competitions from "./Competitions";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }
  componentDidMount() {
    let urlParams = new URLSearchParams(window.location.search);
    let competitionId = urlParams.get("id");
    if (competitionId) {
      fetch(
        `https://api.football-data.org/v2/competitions/${competitionId}/teams`,
        { headers: { "X-Auth-Token": "97bb7b6b1f1c44f6bf78721d6b0d51ef" } }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.teams);

          res.teams.forEach((ele) => (ele["show"] = false));
          this.setState({
            teams: res.teams,
          });
        })
        .catch((err) => alert(err));
    }
  }
  handleClick = (ele) => {
    // event.preventDefault();
    console.log(ele);
    this.setState({
      teams: this.state.teams.map((team) => {
        if (team.id === ele.id) team.show = !team.show;
        return team;
      }),
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div name="teams" className="col-md-6 col-12">
              Teams
              {this.state.teams && (
                <ul>
                  {this.state.teams.map((ele) => (
                    <li
                      key={ele.id}
                      className="btn"
                      onClick={this.handleClick.bind(this, ele)}
                    >
                      {ele.show ? (
                        <div className="card">
                          <div className="card-body">
                            <div className="container">
                              <div className="row">
                                <div className="col-2">
                                  <img
                                    classname="img-fluid"
                                    src={ele.crestUrl}
                                    alt=""
                                    width="100px"
                                  />
                                </div>
                                <div className="col-10">
                                  <h5 className="card-title">{ele.name}</h5>
                                  <p className="card-text font-weight-light">
                                    {ele.address}
                                  </p>
                                  <p className="card-text text-success">
                                    {ele.phone}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer">
                            <a href={ele.website} target="_blank">
                              website
                            </a>
                          </div>
                        </div>
                      ) : (
                        ele.name
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-md-4 col-12 order-sm-last order-md-first">
              <Competitions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
