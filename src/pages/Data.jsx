import React, { useState, useEffect } from "react";
import customFloor from "../Functions/customFloor";
import { payScales } from "../data/payScaleData";
import Button from "../components/Button";
import { BsCashCoin } from "react-icons/bs";

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
      {/* <div className="w-full flex justify-between max-w-[1240px] mx-auto px-10 py-4 text-[#D3D3D3] ">
        <div className="flex flex-col gap-2">
          <h4>Payroll Calculator</h4>
          <h1 className="text-2xl md:text-5xl">Welocome to NexQuant</h1>
        </div>
        <BsCashCoin />
      </div> */}
      <main className="max-w-[1240px] flex md:flex-row justify-between mx-auto my-10 px-10 text-[#D3D3D3] ">
        <section className="flex flex-col gap-7 bg-[#121212] max-w-[520px] w-full rounded-lg px-10 py-14">
          <div className="flex flex-col gap-1">
            <label htmlFor="daySelect">Number of days</label>
            <select
              id="daySelect"
              value={numOfDays}
              onChange={(e) => setNumOfDays(Number(e.target.value))}
              className="p-3 bg-[#0B0B0C] rounded-md max-h-20px"
            >
              <option value="NUM">Select number of days worked</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="teamSelect">Number of team</label>
            <select
              id="teamSelect"
              value={numOfTeams}
              onChange={(e) => setNumOfTeams(Number(e.target.value))}
              className="p-3 bg-[#0B0B0C] rounded-md"
            >
              <option value="">Select number of teams</option>
              <option disabled>Nex Solo</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team} Man
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="totalNumOfKills">Total Kills </label>
            <input
              type="number"
              placeholder="Total kills"
              id="totalNumOfKills"
              value={totalNumOfKills}
              onChange={(e) => setTotalNumOfKills(e.target.value)}
              className="p-3 bg-[#0B0B0C] rounded-md"
            />
          </div>
          <div
            className={`${
              finalPay != 0 ? "w-full flex" : "flex flex-col"
            }  mt-5 gap-5`}
          >
            <Button onClick={calculatePay}>CALCULATE PAY</Button>
            {finalPay != 0 && <Button onClick={resetPay}>RESET</Button>}
          </div>
        </section>

        <section className="bg-[#121212] max-w-[600px] w-full rounded-lg p-10">
          <p>KPD: {killsPerDay.toFixed(2)}</p>
          <p>KPH: {killsPerHour}</p>
          <p>Productive hours: {productiveHours.toFixed(2)}</p>
          <p>Hourly Rate: ${hourlyRate}</p>
          <p>Pay: ${finalPay.toFixed(2)} </p>
        </section>
      </main>
    </>
  );
};

export default Data;
