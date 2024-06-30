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

  const customFloor = (value) => {
    if (value <= 15.9 && value >= 15.5) return 15.5;
    if (value < 15.5 && value >= 15) return 4;

    if (value <= 14.9 && value >= 14.5) return 14.5;
    if (value < 14.5 && value >= 14) return 14;

    if (value <= 13.9 && value >= 13.5) return 13.5;
    if (value < 13.5 && value >= 13) return 13;

    if (value <= 12.9 && value >= 12.5) return 12.5;
    if (value < 12.5 && value >= 12) return 12;

    if (value <= 11.9 && value >= 11.5) return 11.5;
    if (value < 11.5 && value >= 11) return 11;

    if (value <= 10.9 && value >= 10.5) return 10.5;
    if (value < 10.5 && value >= 10) return 10;

    if (value <= 10.9 && value >= 10.5) return 10.5;
    if (value < 10.5 && value >= 10) return 10;

    if (value <= 9.9 && value >= 9.5) return 9.5;
    if (value < 9.5 && value >= 9) return 9;

    if (value <= 8.9 && value >= 8.5) return 8.5;
    if (value < 8.5 && value >= 8) return 8;

    if (value <= 7.9 && value >= 7.5) return 7.5;
    if (value < 7.5 && value >= 7) return 7;

    if (value <= 6.9 && value >= 6.5) return 6.5;
    if (value < 6.5 && value >= 6) return 6;

    if (value <= 5.9 && value >= 5.5) return 5.5;
    if (value < 5.5 && value >= 5) return 5;

    if (value <= 4.9 && value >= 4.5) return 4.5;
    if (value < 4.5 && value >= 4) return 4;

    if (value <= 3.9 && value >= 3.5) return 3.5;
    if (value < 3.5 && value >= 3) return 3;

    if (value <= 2.9 && value >= 2.5) return 2.5;
    if (value < 2.5 && value >= 2) return 2;

    if (value <= 1.9 && value >= 1.5) return 1.5;
    if (value < 1.5 && value >= 1) return 2;
  };

  useEffect(() => {
    if (numOfDays > 0 && numOfTeams > 0 && totalNumOfKills > 0) {
      const numberOfKillsPerDay = totalNumOfKills / numOfDays;
      setKillsPerDay(numberOfKillsPerDay);

      let numberOfKillsPerHour = numberOfKillsPerDay / dailyHoursExpected;
      if (numberOfKillsPerHour < numOfTeams) {
        numberOfKillsPerHour = numOfTeams;
      }
      numberOfKillsPerHour = customFloor(numberOfKillsPerHour.toFixed(2));
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
        <p>KPD: {killsperDay}</p>
        <p>KPH: {killsperHour}</p>
        <p>Productive hours: {productiveHours.toFixed(2)}</p>
        <p>Hourly Rate: </p>
        <p>Pay: </p>
      </div>
    </>
  );
};

export default Data;
