//Exercise 2
let lightBulbStatus = "free";

// Start coding here.
function lightStatus(lightBulbStatus) {
  if (lightBulbStatus === "On") {
    return "Light bulb is On.";
  } else if (lightBulbStatus === "Broken") {
    return "Light bulb is Broken.";
  } else if (lightBulbStatus === "Off") {
    return "Light bulb is Off.";
  } else {
    return "Please choose the correct input (On/Off/Broken)";
  }
}

let statusLightBulb = lightStatus(lightBulbStatus);
console.log(statusLightBulb);
