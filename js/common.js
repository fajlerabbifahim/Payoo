// get input value common func
const getInputValueById = function (id) {
  const inputValue = document.getElementById(id).value;
  const inputNumberValue = parseFloat(inputValue);
  return inputNumberValue;
};

// get text Field value
const getTextValueById = function (id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
};

// add money cash out transaction page switch

function showById(id) {
  // hide all the section
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("add-cash-out-form").classList.add("hidden");
  document.getElementById("mobile-recharge").classList.add("hidden");
  document.getElementById("transaction").classList.add("hidden");
  // show the section to provided peramiter
  document.getElementById(id).classList.remove("hidden");
}
