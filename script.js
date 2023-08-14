const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const calculateButton = document.getElementById("calculateButton");
const totalAmountSpan = document.getElementById("totalAmount");
const tipAmountSpan = document.getElementById("tipAmount");

calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  
  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    alert("Please enter valid numbers.");
    return;
  }
  
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  
  tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
}
