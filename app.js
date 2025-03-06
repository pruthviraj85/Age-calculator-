const birthdateInput = document.getElementById("birthdate");

// const today = new Date().toISOString().split("T")[0];
// console.log(today);
console.log(birthdateInput.value);
const agebtn = document.querySelector("#calculate-btn");
agebtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(birthdateInput.value);
  const birthdate = new Date(birthdateInput.value);
  console.log(birthdate);
  const errorDiv = document.querySelector("#error");
  const resultdiv = document.querySelector("#result");
  errorDiv.textContent = " ";
  resultdiv.textContent = " ";
  if (!birthdateInput.value || birthdate > new Date()) {
    errorDiv.textContent = "Please select a Valid birthdate(not in the future)";
    return;
    }
    
    //
  const today = new Date();
  let years = today.getFullYear() - birthdate.getFullYear();
  let month = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();
  //   console.log(years, month, days);

  if (days < 0) {
    month--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (month < 0) {
    years--;
    month += 12;
  }

  resultdiv.textContent = `You are ${years} years, ${month} months, and ${days} days old.`;
});
