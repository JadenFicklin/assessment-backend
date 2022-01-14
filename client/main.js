const errCallback = (err) => console.log(err);

//get fortune from backend
document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4001/api/fortune/").then(function (res) {
    displayFortune(res.data);
  });
};

//fortune
let getFortune = document.querySelector(".fortune");

//display fortune
const displayFortune = (fortune) => {
  let t = document.createTextNode(fortune);
  getFortune.appendChild(t);
};

//update fortune
const updateFortune = (id, type) =>
  axios
    .put(`http://localhost:4001/api/minus`, { type })
    .then(displayAmount)
    .catch(errCallback);

//added
const updateFortuneAdd = (id, type) =>
  axios
    .put("http://localhost:4001/api/add", { type })
    .then(displayAmountTwo)
    .catch(errCallback);

let getAmount = document.querySelector(".fortune-amount");
//display fortune amount
const displayAmount = (amount) => {
  const minusAmount = amount.data[0].fortune;
  let t = document.createTextNode(minusAmount);
  getAmount.appendChild(t);
};

//added
const displayAmountTwo = (amount) => {
  const addAmount = amount.data[0].fortune;
  let t = document.createTextNode(addAmount);
  getAmount.appendChild(t);
};

document.querySelector(".minus").onclick = function () {
  updateFortune(1, "minus");
};
//added
document.querySelector(".plus").onclick = function () {
  updateFortuneAdd(1, "plus");
};
