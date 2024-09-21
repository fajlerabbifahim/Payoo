const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("btn click");

    const phoneNumber = getInputValueById("phone-number");
    const pinNumber = getInputValueById("pin-number");
    if (phoneNumber === 10203040 && pinNumber === 1234) {
      window.location.href = "home.html";
    } else {
      alert("Tor Input Bhul, Bhalo Kore Check Kor Baba");
    }
  });
