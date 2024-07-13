function getClothingAdvice(temperature, isRaining) {
  let advice = "";

  if (temperature < 0) {
    advice = "Wear a heavy coat, hat, and gloves.";
  } else if (temperature >= 0 && temperature <= 10) {
    advice = "Wear a coat and scarf.";
  } else if (temperature > 10 && temperature <= 20) {
    advice = "Wear a jacket.";
  } else {
    advice = "Wear light clothes.";
  }

  if (isRaining) {
    advice += " Don't forget your umbrella and waterproof shoes!";
  }

  return advice;
}

// values for demonstration
const currentTemperature = 15; // Change this value as needed
const isRaining = true; // Change to false if it is not raining

const advice = getClothingAdvice(currentTemperature, isRaining);
console.log(`Current temperature: ${currentTemperature}°C`);
console.log(advice);
