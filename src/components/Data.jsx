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

        <button onClick={calculatePay}>CALCULATE PAY</button>
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
