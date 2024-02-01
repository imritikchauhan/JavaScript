const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    displayResult('Please give a valid height');
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    displayResult('Please give a valid weight');
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const weightStatus = getWeightStatus(bmi);
    // Show the result along with weight status
    displayResult(`<span>${bmi}</span> ${weightStatus}`);
  }
});

function displayResult(message) {
  const results = document.querySelector('#results');
  results.innerHTML = message;
}

function getWeightStatus(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else {
    return 'Overweight';
  }
}
