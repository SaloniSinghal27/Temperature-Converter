document.addEventListener("DOMContentLoaded", function() {
    var temperatureInput = document.getElementById("temperature");
    var convertButton = document.getElementById("convert-btn");
    var resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function() {
      var fromUnit = document.querySelector("#from-unit input[type='radio']:checked");
      var toUnit = document.querySelector("#to-unit input[type='radio']:checked");
  
      if (fromUnit && toUnit) {
        var temperature = parseFloat(temperatureInput.value);
        if (!isNaN(temperature)) {
          var convertedTemperature = convertTemperature(temperature, fromUnit.value, toUnit.value);

          resultElement.textContent = convertedTemperature.toFixed(2);
        } else {
          resultElement.textContent = "Please enter a valid temperature.";
        }
      } else {
        resultElement.textContent = "Please select both units.";
      }
    });
  
    function convertTemperature(temperature, fromUnit, toUnit) {
      if (fromUnit === "celsius") {
        temperature = temperature;
      } else if (fromUnit === "fahrenheit") {
        temperature = (temperature - 32) * 5 / 9;
      } else if (fromUnit === "kelvin") {
        temperature = temperature - 273.15;
      }
      if (toUnit === "celsius") {
        temperature = temperature;
      } else if (toUnit === "fahrenheit") {
        temperature = temperature * 9 / 5 + 32;
      } else if (toUnit === "kelvin") {
        temperature = temperature + 273.15;
      }
  
      return temperature;
    }
  });