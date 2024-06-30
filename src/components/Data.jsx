import React from "react";
import { useState, useEffect } from "react";

const Data = () => {
  const [numOfDays, setNumOfDays] = useState(0);
  const [numOfTeams, setNumOfTeams] = useState(0);
  const [totalNumOfKills, setTotalNumOfKills] = useState(0);
  const [killsperDay, setKillsPerDay] = useState(0);
  const [killsperHour, setKillsPerHour] = useState(0);
  const [productiveHours, setProductiveHours] = useState(0);

  const dailyHoursExpected = 10;

  useEffect(() => {
    if (numOfDays > 0 && numOfTeams > 0 && totalNumOfKills > 0) {
      const numberOfKillsPerDay = totalNumOfKills / numOfDays;
      setKillsPerDay(numberOfKillsPerDay);

      let numberOfKillsPerHour = numberOfKillsPerDay / dailyHoursExpected;
      if (numberOfKillsPerHour < numOfTeams) {
        numberOfKillsPerHour = numOfTeams;
      }
      setKillsPerHour(numberOfKillsPerHour);

      const totalProductiveHours = totalNumOfKills / numberOfKillsPerHour;
      setProductiveHours(totalProductiveHours);
    }
  }, [totalNumOfKills, numOfDays, numOfTeams]);

  //   useEffect(() => {
  //     if (numOfDays > 0 && numOfTeams > 0 && totalNumOfKills > 0) {
  //       const numberOfKillsPerDay = totalNumOfKills / numOfDays;
  //       setKillsPerDay(numberOfKillsPerDay);

  //       const numberOfKillsPerHour =
  //         killsperHour <= numOfTeams
  //           ? numOfTeams
  //           : numberOfKillsPerDay / dailyHoursExpected;
  //       setKillsPerHour(numberOfKillsPerHour);

  //       const totalProductiveHours = totalNumOfKills / numberOfKillsPerHour;
  //       setProductiveHours(totalProductiveHours);
  //     }
  //   }, [totalNumOfKills, numOfDays, numOfTeams]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="numOfDays">Days: </label>
          <input
            type="number"
            placeholder="Number of days"
            id="numOfDays"
            value={numOfDays}
            onChange={(e) => setNumOfDays(Number(e.target.value))}
            className="p-3"
          />
        </div>

        <div>
          <label htmlFor="numOfTeams">Team: </label>
          <input
            type="number"
            placeholder="Number of team"
            value={numOfTeams}
            id="numOfTeams"
            onChange={(e) => setNumOfTeams(Number(e.target.value))}
            className="p-3"
            min="0"
          />
        </div>

        <div>
          <label htmlFor="totalNumOfKills">Total Kills: </label>
          <input
            type="number"
            placeholder="Total kills"
            id="totalNumOfKills"
            value={totalNumOfKills}
            onChange={(e) => setTotalNumOfKills(Number(e.target.value))}
            className="p-3"
          />
        </div>
      </div>

      <div>
        <p>KPD: {killsperDay.toFixed(1)}</p>
        <p>KPH: {killsperHour.toFixed(1)}</p>
        <p>Productive hours: {productiveHours.toFixed(2)}</p>
        <p>Hourly Rate: </p>
        <p>Pay: </p>
      </div>
    </>
  );
};

export default Data;
