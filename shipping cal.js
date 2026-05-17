function calculate() {
  let input = document.querySelector("input").value;

  if (input === "") {
    alert("Put a valid amount");
    return;
  }

  let cost = Number(input);
  if (Number.isNaN(cost) || cost <= 0) {
    alert("Put a valid amount");
    return;
  } else if (cost < 200) {
    cost += 40;
  } else if (cost >= 500) {
    cost = cost - cost / 10;
  }

  document.querySelector(".total").innerHTML = ` Total Price : Rs   ${cost}`;
  let button = document.querySelector("button");
  if (button.innerText === "Calculate") {
    button.innerText = "Reset";
  } else {
    button.innerText = "Calculate";
    reset();
  }
}
function enter(event) {
  if (event.key === "Enter") {
    calculate();
  }
}
function reset() {
  document.querySelector(".total").innerHTML = "";
  document.querySelector("button").innerText = "Calculate";
}
