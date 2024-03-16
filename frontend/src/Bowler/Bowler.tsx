import { useEffect, useState } from 'react';
import { Bowler } from '../types/oneBowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5015/api/bowler');
      const b = await rsp.json();
      setBowlerData(b);
    };
    fetchBowlerData();
  }, []);
  // useEffect(() => {
  //   const fetchBowlerData = async () => {
  //     const bowlerResponse = await fetch('http://localhost:5015/api/bowler');
  //     const bowlers = await bowlerResponse.json();

  //     const teamResponse = await fetch('http://localhost:5015/api/team');
  //     const teams = await teamResponse.json();

  //     // Map team data to an object for easy access
  //     const teamMap = teams.reduce((map: any, team: any) => {
  //       map[team.teamID] = team.teamName;
  //       return map;
  //     }, {});

  //     // Update bowlerData with team names
  //     const bowlersWithTeamNames = bowlers.map((bowler: any) => ({
  //       ...bowler,
  //       teamName: teamMap[bowler.teamID] || 'Unknown Team', // Use "Unknown Team" if team name not found
  //     }));

  //     setBowlerData(bowlersWithTeamNames);
  //   };
  //   fetchBowlerData();
  // }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>BowlerID</th>
            <th>BowlerFistName</th>
            <th>BowlerMiddleInit</th>
            <th>BowlerLastName</th>
            <th>BowlerAddress</th>
            <th>BowlerCity</th>
            <th>BowlerState</th>
            <th>BowlerZip</th>
            <th>BowlerPhoneNumber</th>
            <th>TeamID</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((x) => (
            <tr key={x.bowlerID}>
              <td>{x.bowlerID}</td>
              <td>{x.bowlerFirstName}</td>
              <td>{x.bowlerMiddleInit}</td>
              <td>{x.bowlerLastName}</td>
              <td>{x.bowlerAddress}</td>
              <td>{x.bowlerCity}</td>
              <td>{x.bowlerState}</td>
              <td>{x.bowlerZip}</td>
              <td>{x.bowlerPhoneNumber}</td>
              <td>{x.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
