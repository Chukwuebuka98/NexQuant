import React, { useState } from "react";

function HoursWorkedComponent() {
  const [numDaysWorked, setNumDaysWorked] = useState(21);
  const [killsPerDay, setKillsPerDay] = useState(new Array(21).fill(0));

  const calculateTotalHours = () => {
    return killsPerDay.reduce((totalHours, kills, index) => {
      if (index < numDaysWorked) {
        return totalHours + (kills >= 1 ? 10 : 0);
      }
      return totalHours;
    }, 0);
  };

  const totalHoursWorked = calculateTotalHours();

  const handleKillsChange = (index, value) => {
    const updatedKills = [...killsPerDay];
    updatedKills[index] = Number(value);
    setKillsPerDay(updatedKills);
  };

  return (
    <div>
      <h1>Work Hours Calculation</h1>
      <label>
        Number of Days Worked:
        <input
          type="number"
          value={numDaysWorked}
          onChange={(e) => setNumDaysWorked(Number(e.target.value))}
          min="1"
          max={killsPerDay.length}
        />
      </label>
      {Array.from({ length: numDaysWorked }, (_, index) => (
        <div key={index}>
          <label>
            Kills for Day {index + 1}:
            <input
              type="number"
              value={killsPerDay[index]}
              onChange={(e) => handleKillsChange(index, e.target.value)}
              min="0"
            />
          </label>
        </div>
      ))}
      <p>Total Hours Worked: {totalHoursWorked}</p>
    </div>
  );
}

export default HoursWorkedComponent;
