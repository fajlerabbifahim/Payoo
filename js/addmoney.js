document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyAmount = getInputValueById("add-money-amount");
    const addMoneyPin = getInputValueById("add-money-pin");
    let updateBalance = 0;
    if (addMoneyPin === 1234) {
      let oldBalance = getTextValueById("balance");
      updateBalance = oldBalance += addMoneyAmount;

      // transaction history
      const p = document.createElement("p");
      p.style.fontWeight = "bold";
      p.innerText = `Add Money : ${addMoneyAmount} Current Balance : ${updateBalance}`;
      document.getElementById("transaction").appendChild(p);
    } else {
      alert("sona moni Tumi Field");
    }
    document.getElementById("balance").innerText = updateBalance;
    document.getElementById("add-money-amount").value = "";
    document.getElementById("add-money-pin").value = "";
  });

// cashOut func
document.getElementById("cash-out").addEventListener("click", function (event) {
  event.preventDefault();
  const CashOutAmount = getInputValueById("cash-out-amount");
  const cashOutPin = getInputValueById("cash-out-pin");
  const balance = getTextValueById("balance");
  let updateBalance = 0;
  // wrong way to valid pin
  if (cashOutPin === 1234) {
    if (balance >= CashOutAmount) {
      updateBalance = balance - CashOutAmount;
      const p = document.createElement("p");
      p.style.color = "red";
      p.style.fontWeight = "bold";
      p.innerText = `Cash Out : ${CashOutAmount}  New Balance : ${updateBalance}`;
      document.getElementById("transaction").appendChild(p);
    } else {
      alert("Kire Gorib Tor Ato Tk Nai ");
    }
  } else {
    alert("Tomar Pin Bhul");
  }
  document.getElementById("balance").innerText = updateBalance;
  document.getElementById("cash-out-amount").value = "";
  document.getElementById("cash-out-pin").value = "";
});

// Show Section Func
document.getElementById("add-btn").addEventListener("click", function () {
  showById("add-money-form");
});
document.getElementById("cash-btn").addEventListener("click", function () {
  showById("add-cash-out-form");
});
document
  .getElementById("mobile-recharge-btn")
  .addEventListener("click", function () {
    showById("mobile-recharge");
  });
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    showById("transaction");
  });
