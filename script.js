function calculate() {
  let force = document.getElementById("force").value;
  let mass = document.getElementById("mass").value;

  if (mass > 0) {
    let acceleration = force / mass;
    document.getElementById("result").innerText =
      "Acceleration: " + acceleration.toFixed(2) + " m/s²";
  } else {
    document.getElementById("result").innerText =
      "Mass must be greater than 0";
  }
}
