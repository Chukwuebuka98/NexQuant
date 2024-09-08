// export default function customFloor(value) {
//   if (value <= 150.99 && value >= 150.59) return 150.5;
//   if (value < 150.5 && value >= 150) return 150;

//   if (value <= 145.99 && value >= 145.5) return 145.5;
//   if (value < 145.5 && value >= 145) return 145;

//   if (value <= 140.99 && value >= 140.5) return 140.5;
//   if (value < 140.5 && value >= 140) return 140;

//   if (value <= 135.99 && value >= 135.5) return 135.5;
//   if (value < 135.5 && value >= 135) return 135;

//   if (value <= 130.99 && value >= 130.5) return 130.5;
//   if (value < 130.5 && value >= 130) return 130;

//   if (value <= 125.99 && value >= 125.5) return 125.5;
//   if (value < 125.5 && value >= 125) return 125;

//   if (value <= 120.99 && value >= 120.5) return 120.5;
//   if (value < 120.5 && value >= 120) return 120;

//   if (value <= 115.99 && value >= 115.5) return 115.5;
//   if (value < 115.5 && value >= 115) return 115;

//   if (value <= 110.99 && value >= 110.5) return 110.5;
//   if (value < 110.5 && value >= 110) return 110;

//   if (value <= 105.99 && value >= 105.5) return 105.5;
//   if (value < 105.5 && value >= 105) return 105;

//   if (value <= 100.99 && value >= 100.5) return 100.5;
//   if (value < 100.5 && value >= 100) return 100;

//   if (value <= 95.99 && value >= 95.5) return 95.5;
//   if (value < 95.5 && value >= 95) return 95;

//   if (value <= 90.99 && value >= 90.5) return 90.5;
//   if (value < 90.5 && value >= 90) return 90;

//   if (value <= 85.99 && value >= 85.5) return 85.5;
//   if (value < 85.5 && value >= 85) return 85;

//   if (value <= 80.99 && value >= 80.5) return 80.5;
//   if (value < 80.5 && value >= 80) return 80;

//   if (value <= 75.99 && value >= 75.5) return 75.5;
//   if (value < 75.5 && value >= 75) return 75;

//   if (value <= 70.99 && value >= 70.5) return 70.5;
//   if (value < 70.5 && value >= 70) return 70;

//   if (value <= 65.99 && value >= 65.5) return 65.5;
//   if (value < 65.5 && value >= 65) return 65;

//   if (value <= 60.99 && value >= 60.5) return 60.5;
//   if (value < 60.5 && value >= 60) return 60;

//   if (value <= 55.99 && value >= 55.5) return 55.5;
//   if (value < 55.5 && value >= 55) return 55;

//   if (value <= 50.99 && value >= 50.5) return 50.5;
//   if (value < 50.5 && value >= 50) return 50;

//   if (value <= 45.99 && value >= 45.5) return 45.5;
//   if (value < 45.5 && value >= 45) return 45;

//   if (value <= 40.99 && value >= 40.5) return 40.5;
//   if (value < 40.5 && value >= 40) return 40;

//   if (value <= 35.99 && value >= 35.5) return 35.5;
//   if (value < 35.5 && value >= 35) return 35;

//   if (value <= 30.99 && value >= 30.5) return 30.5;
//   if (value < 30.5 && value >= 30) return 30;

//   if (value <= 25.99 && value >= 25.5) return 25.5;
//   if (value < 25.5 && value >= 25) return 25;

//   if (value <= 20.99 && value >= 20.5) return 20.5;
//   if (value < 20.5 && value >= 20) return 20;

//   if (value <= 15.99 && value >= 15.5) return 15.5;
//   if (value < 15.5 && value >= 15) return 15;

//   if (value <= 14.99 && value >= 14.5) return 14.5;
//   if (value < 14.5 && value >= 14) return 14;

//   if (value <= 13.99 && value >= 13.5) return 13.5;
//   if (value < 13.5 && value >= 13) return 13;

//   if (value <= 12.99 && value >= 12.5) return 12.5;
//   if (value < 12.5 && value >= 12) return 12;

//   if (value <= 11.99 && value >= 11.5) return 11.5;
//   if (value < 11.5 && value >= 11) return 11;

//   if (value <= 10.99 && value >= 10.5) return 10.5;
//   if (value < 10.5 && value >= 10) return 10;

//   if (value <= 10.99 && value >= 10.5) return 10.5;
//   if (value < 10.5 && value >= 10) return 10;

//   if (value <= 9.99 && value >= 9.5) return 9.5;
//   if (value < 9.5 && value >= 9) return 9;

//   if (value <= 8.99 && value >= 8.5) return 8.5;
//   if (value < 8.5 && value >= 8) return 8;

//   if (value <= 7.99 && value >= 7.5) return 7.5;
//   if (value < 7.5 && value >= 7) return 7;

//   if (value <= 6.99 && value >= 6.5) return 6.5;
//   if (value < 6.5 && value >= 6) return 6;

//   if (value <= 5.99 && value >= 5.5) return 5.5;
//   if (value < 5.5 && value >= 5) return 5;

//   if (value <= 4.99 && value >= 4.5) return 4.5;
//   if (value < 4.5 && value >= 4) return 4;

//   if (value <= 3.99 && value >= 3.5) return 3.5;
//   if (value < 3.5 && value >= 3) return 3;

//   if (value <= 2.99 && value >= 2.5) return 2.5;
//   if (value < 2.5 && value >= 2) return 2;

//   if (value <= 1.99 && value >= 1.5) return 1.5;
//   if (value < 1.5 && value >= 1) return 1;

//   return Math.floor(value);
// }

export default function customFloor(value) {
  if (value > 150.5 && value <= 151) return 151;
  if (value > 150 && value <= 150.5) return 150.5;

  if (value > 145.5 && value <= 150) return 150;
  if (value > 145 && value <= 145.5) return 145.5;

  if (value > 140.5 && value <= 145) return 145;
  if (value > 140 && value <= 140.5) return 140.5;

  if (value > 135.5 && value <= 140) return 140;
  if (value > 135 && value <= 135.5) return 135.5;

  if (value > 130.5 && value <= 135) return 135;
  if (value > 130 && value <= 130.5) return 130.5;

  if (value > 125.5 && value <= 130) return 130;
  if (value > 125 && value <= 125.5) return 125.5;

  if (value > 120.5 && value <= 125) return 125;
  if (value > 120 && value <= 120.5) return 120.5;

  if (value > 115.5 && value <= 120) return 120;
  if (value > 115 && value <= 115.5) return 115.5;

  if (value > 110.5 && value <= 115) return 115;
  if (value > 110 && value <= 110.5) return 110.5;

  if (value > 105.5 && value <= 110) return 110;
  if (value > 105 && value <= 105.5) return 105.5;

  if (value > 100.5 && value <= 105) return 105;
  if (value > 100 && value <= 100.5) return 100.5;

  if (value > 95.5 && value <= 100) return 100;
  if (value > 95 && value <= 95.5) return 95.5;

  if (value > 90.5 && value <= 95) return 95;
  if (value > 90 && value <= 90.5) return 90.5;

  if (value > 85.5 && value <= 90) return 90;
  if (value > 85 && value <= 85.5) return 85.5;

  if (value > 80.5 && value <= 85) return 85;
  if (value > 80 && value <= 80.5) return 80.5;

  if (value > 75.5 && value <= 80) return 80;
  if (value > 75 && value <= 75.5) return 75.5;

  if (value > 70.5 && value <= 75) return 75;
  if (value > 70 && value <= 70.5) return 70.5;

  if (value > 65.5 && value <= 70) return 70;
  if (value > 65 && value <= 65.5) return 65.5;

  if (value > 60.5 && value <= 65) return 65;
  if (value > 60 && value <= 60.5) return 60.5;

  if (value > 55.5 && value <= 60) return 60;
  if (value > 55 && value <= 55.5) return 55.5;

  if (value > 50.5 && value <= 55) return 55;
  if (value > 50 && value <= 50.5) return 50.5;

  if (value > 45.5 && value <= 50) return 50;
  if (value > 45 && value <= 45.5) return 45.5;

  if (value > 40.5 && value <= 45) return 45;
  if (value > 40 && value <= 40.5) return 40.5;

  if (value > 35.5 && value <= 40) return 40;
  if (value > 35 && value <= 35.5) return 35.5;

  if (value > 30.5 && value <= 35) return 35;
  if (value > 30 && value <= 30.5) return 30.5;

  if (value > 25.5 && value <= 30) return 30;
  if (value > 25 && value <= 25.5) return 25.5;

  if (value > 20.5 && value <= 25) return 25;
  if (value > 20 && value <= 20.5) return 20.5;

  if (value > 15.5 && value <= 20) return 20;
  if (value > 15 && value <= 15.5) return 15.5;

  if (value > 14.5 && value <= 15) return 15;
  if (value > 13.5 && value <= 14) return 14.5;

  if (value > 12.5 && value <= 13) return 13.5;
  if (value > 11.5 && value <= 12) return 12.5;

  if (value > 10.5 && value <= 11) return 11.5;
  if (value > 10 && value <= 10.5) return 10.5;

  if (value > 9.5 && value <= 10) return 10;
  if (value > 8.5 && value <= 9) return 9.5;

  if (value > 7.5 && value <= 8) return 8;
  if (value > 7 && value <= 7.5) return 7.5;

  if (value > 6.5 && value <= 7) return 7;
  if (value > 6 && value <= 6.5) return 6.5;

  if (value > 5.5 && value <= 6) return 6;
  if (value > 5 && value <= 5.5) return 5.5;

  if (value > 4.5 && value <= 5) return 5;
  if (value > 4 && value <= 4.5) return 4.5;

  if (value > 3.5 && value <= 4) return 4;
  if (value > 3 && value <= 3.5) return 3.5;

  if (value > 2.5 && value <= 3) return 3;
  if (value > 2 && value <= 2.5) return 2.5;

  if (value > 1.5 && value <= 2) return 2;
  if (value > 1 && value <= 1.5) return 1.5;

  return Math.floor(value);
}
