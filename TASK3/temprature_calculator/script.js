document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var unitSelect = document.getElementById("unitSelect").value;
  var convertedTemperature = "";

  if (unitSelect === "celsius") {
    convertedTemperature = (temperatureInput * 9 / 5) + 32;
    document.getElementById("result").innerHTML = convertedTemperature + " &deg;F";
  } else if (unitSelect === "fahrenheit") {
    convertedTemperature = (temperatureInput - 32) * 5 / 9;
    document.getElementById("result").innerHTML = convertedTemperature + "&deg;C";
  }
}
