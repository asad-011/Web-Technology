let cal = "";
document.querySelector("#display").value = cal;
function add(val) {
  if (val == "=") cal = eval(cal);
  else if (val == "C") cal = "";
  else cal = cal + val;
  document.querySelector("#display").value = cal;
}
