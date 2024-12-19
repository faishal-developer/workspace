import React, { useState } from "react";
import "./static/static.scss";

const TeamsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const teams = [
    { name: "Accounts", description: "EcoGlow Lamp", members: 10 },
    { name: "HR", description: "FreshFusion Bottle", members: 17 },
  ];

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="teams-dashboard">
      <div className="dashboard-header">
        <div className="info-card">
          <div className="icon user-icon"></div>
          <div>
            <p>Total Teams</p>
            <h3>8</h3>
          </div>
        </div>
        <div className="info-card">
          <div className="icon team-icon"></div>
          <div>
            <p>Total User</p>
            <h3>108</h3>
          </div>
        </div>
        <div className="info-card">
          <div className="icon incoming-icon"></div>
          <div>
            <p>Total Incoming</p>
            <h3>108</h3>
          </div>
        </div>
        <div className="info-card">
          <div className="icon outgoing-icon"></div>
          <div>
            <p>Outgoing Pending</p>
            <h3>5</h3>
          </div>
        </div>
      </div>

      <div className="search-filter">
        <div className="search">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search by Team name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter">
          <label>Filter By Date:</label>
          <input type="date" />
        </div>
      </div>

      <table className="teams-table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Team Description</th>
            <th>Members Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{team.description}</td>
              <td>{team.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsDashboard;
