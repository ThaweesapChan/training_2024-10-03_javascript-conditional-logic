//Exercise 3
// Ternary Operator
let lightBulbStatus = "On";

// Start coding here.
function lightStatus(lightBulbStatus) {
  return lightBulbStatus === "On"
    ? "Light bulb is On."
    : lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : lightBulbStatus === "Broken"
    ? "Light bulb is Broken."
    : "“Please choose the correct input (On/Off)”";
}

console.log(lightStatus(lightBulbStatus));
