const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");

celsiusInput.addEventListener("input", convertToFahrenheit);
fahrenheitInput.addEventListener("input", convertToCelsius);

function convertToFahrenheit() {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
  fahrenheitInput.value = fahrenheitTemp.toFixed(2);
}

function convertToCelsius() {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * 5/9;
  celsiusInput.value = celsiusTemp.toFixed(2);
}