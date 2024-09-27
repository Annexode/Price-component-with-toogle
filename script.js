let basic_monthly = document.getElementById("basic_monthly");
let basic_annualy = document.getElementById("basic_annualy");

let professioanal_monthly = document.getElementById("professioanal_monthly");
let professioanal_annualy = document.getElementById("professioanal_annualy");

let master_monthly = document.getElementById("master_monthly");
let master_annualy = document.getElementById("master_annualy");

let toogle = document.getElementById("toogle_button");

basic_monthly.style.display = "none";
professioanal_monthly.style.display = "none";
master_monthly.style.display = "none";

toogle.addEventListener("click", (e) => {
  if (toogle.checked === true) {
    basic_monthly.style.display = "";
    professioanal_monthly.style.display = "";
    master_monthly.style.display = "";
    basic_annualy.style.display = "none";
    professioanal_annualy.style.display = "none";
    master_annualy.style.display = "none";
  } else {
    basic_monthly.style.display = "none";
    professioanal_monthly.style.display = "none";
    master_monthly.style.display = "none";
    basic_annualy.style.display = "";
    professioanal_annualy.style.display = "";
    master_annualy.style.display = "";
  }
});