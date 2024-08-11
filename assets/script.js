const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid height${height}`;
  } else if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid weight${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>Your BMI is = ${bmi}</span>`;
    results.style.color = "green";

    const para = document.createElement("p");

    if (bmi < 18.9 && bmi > 0) {
      para.innerHTML = "You are Under Weight According to your BMI";
      para.style.color = "blue";
    } else if (bmi >= 18.9 && bmi <= 24.9) {
      para.innerHTML = "Your Weight is Normal According to your BMI";
      para.style.color = "green";
    } else if (bmi > 24.9 && bmi < 35) {
      para.innerHTML = "Your are Overweight According to your BMI";
      para.style.color = "orange";
    } else {
      para.innerHTML = "According to your BMI you came under Obesity category";
      para.style.color = "red";
    }
    results.appendChild(para);
  }
});
