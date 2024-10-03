//Exercise 3
// Ternary Operator
let lightBulbStatus = "Broken";

//Start coding here

const message =
  lightBulbStatus === "On"
    ? "Light bulb is On."
    : lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : lightBulbStatus === "Broken"
    ? "Light bulb is Broken."
    : "Please choose the correct input (On/Off)";

// แสดงผลลัพธ์ทาง console
console.log(message);