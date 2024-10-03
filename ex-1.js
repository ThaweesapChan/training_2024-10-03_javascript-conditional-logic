//Exercise 1
let lightBulbStatus = "On";

// Start coding here.
function lightStatus(lightBulbStatus) {
  if (lightBulbStatus === "On") {
    return "Light bulb is On.";
  } else {
    return "Light bulb is Off.";
  }
}

let statusLightBulb = lightStatus(lightBulbStatus);
console.log(statusLightBulb);
