//Exercise 4
// Switch Statement
let lightBulbStatus = "Off";
let lightStatus;

// Start coding here.
switch (lightBulbStatus) {
  case "On":
    lightStatus = "Light bulb is On.";
    break;
  case "Broken":
    lightStatus = "Light bulb is Broken.";
    break;
  case "Off":
    lightStatus = "Light bulb is Off.";
    break;
  default:
    lightStatus = "Please choose the correct input (On/Off/Broken)";
}

console.log(lightStatus);
