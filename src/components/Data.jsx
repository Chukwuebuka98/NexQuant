import React, { useState, useEffect } from "react";
import customFloor from "../Functions/customFloor";
import { payScales } from "../data/payScaleData";

const Data = () => {
  const [numOfDays, setNumOfDays] = useState(0);
  const [numOfTeams, setNumOfTeams] = useState(0);
  const [totalNumOfKills, setTotalNumOfKills] = useState(0);
  const [killsPerDay, setKillsPerDay] = useState(0);
  const [killsPerHour, setKillsPerHour] = useState(0);
  const [productiveHours, setProductiveHours] = useState(0);
  const [hourlyRate, setHourlyRate] = useState("");
  const [finalPay, setFinalPay] = useState(0);

  const dailyHoursExpected = 10;

  const calculatePay = () => {
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

      // Get hourly rate based on killsPerDay and team size
      const teamSizeKey = `${numOfTeams}man`;
      const kpdKey = `kph-${numberOfKillsPerHour}`;
      const rate = payScales[teamSizeKey]?.[kpdKey] || "0";
      setHourlyRate(rate);

      setFinalPay(totalProductiveHours * rate);
    }
  };

  const resetPay = () => {
    setNumOfDays(0);
    setNumOfTeams(0);
    setTotalNumOfKills(0);
    setKillsPerDay(0);
    setKillsPerHour(0);
    setProductiveHours(0);
    setHourlyRate("");
    setFinalPay(0);
  };

  // useEffect(() => {
  //   if (numOfDays > 0 && numOfTeams > 0 && totalNumOfKills > 0) {
  //     const numberOfKillsPerDay = totalNumOfKills / numOfDays;
  //     setKillsPerDay(numberOfKillsPerDay);

  //     let numberOfKillsPerHour = numberOfKillsPerDay / dailyHoursExpected;
  //     if (numberOfKillsPerHour < numOfTeams) {
  //       numberOfKillsPerHour = numOfTeams;
  //     }
  //     numberOfKillsPerHour = customFloor(numberOfKillsPerHour.toFixed(2));
  //     setKillsPerHour(numberOfKillsPerHour);

  //     const totalProductiveHours = totalNumOfKills / numberOfKillsPerHour;
  //     setProductiveHours(totalProductiveHours);

  //     // Get hourly rate based on killsPerDay and team size
  //     const teamSizeKey = `${numOfTeams}man`;
  //     const kpdKey = `kph-${numberOfKillsPerHour}`;
  //     const rate = payScales[teamSizeKey]?.[kpdKey] || "0";
  //     setHourlyRate(rate);

  //     setFinalPay(totalProductiveHours * rate);
  //   }
  // }, [totalNumOfKills, numOfDays, numOfTeams]);

  const days = Array.from({ length: 23 }, (_, i) => i + 1);
  const teams = Array.from({ length: 4 }, (_, i) => i + 2);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="daySelect">Number of days:</label>
          <select
            id="daySelect"
            value={numOfDays}
            onChange={(e) => setNumOfDays(Number(e.target.value))}
            className="p-3"
          >
            <option value="" disabled>
              Select number of days worked
            </option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="teamSelect">Number of team:</label>
          <select
            id="teamSelect"
            value={numOfTeams}
            onChange={(e) => setNumOfTeams(Number(e.target.value))}
            className="p-3"
          >
            <option value="" disabled>
              Select number of teams
            </option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team === 1 ? "Nex Solo" : `${team} Man`}
              </option>
            ))}
          </select>
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

        <button onClick={calculatePay}>CALCULATE PAY</button>
        <button onClick={resetPay}>RESET</button>
      </div>

      <div>
        <p>KPD: {killsPerDay.toFixed(2)}</p>
        <p>KPH: {killsPerHour}</p>
        <p>Productive hours: {productiveHours.toFixed(2)}</p>
        <p>Hourly Rate: ${hourlyRate}</p>
        <p>Pay: ${finalPay.toFixed(2)} </p>
      </div>
    </>
  );
};

export default Data;
