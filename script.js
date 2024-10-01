const basicMonthly = document.getElementById("basicMonthly");
const basicAnnualy = document.getElementById("basicAnnualy");

const professioanalMonthly = document.getElementById("professioanalMonthly");
const professioanalAnnualy = document.getElementById("professioanalAnnualy");

const masterMonthly = document.getElementById("masterMonthly");
const masterAnnualy = document.getElementById("masterAnnualy");

const toogle = document.getElementById("toogleButton");

basicMonthly.style.display = "none";
professioanalMonthly.style.display = "none";
masterMonthly.style.display = "none";

toogle.addEventListener("click", (e) => {
  if (toogle.checked === true) {
    basicMonthly.style.display = "contents";
    professioanalMonthly.style.display = "contents";
    masterMonthly.style.display = "contents";
    basicAnnualy.style.display = "none";
    professioanalAnnualy.style.display = "none";
    masterAnnualy.style.display = "none";
  } else {
    basicMonthly.style.display = "none";
    professioanalMonthly.style.display = "none";
    masterMonthly.style.display = "none";
    basicAnnualy.style.display = "contents";
    professioanalAnnualy.style.display = "contents";
    masterAnnualy.style.display = "contents";
  }
});