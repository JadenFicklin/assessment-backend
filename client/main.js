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

const displayAmountTwo = (amount) => {
  const addAmount = amount.data[0].fortune;
  let t = document.createTextNode(addAmount);
  getAmount.appendChild(t);
};

document.querySelector(".minus").onclick = function () {
  updateFortune(1, "minus");
};

document.querySelector(".plus").onclick = function () {
  updateFortuneAdd(1, "plus");
};

//axios delete

let grabPTag = document.querySelector(".fortune-amount");

document.querySelector(".delete-button").onclick = function () {
  axios
    .delete("http://localhost:4001/api/delete")
    .then(function (res) {
      grabPTag = res;
    })
    .catch(errCallback);
};

//post the goal

let textBox = document.querySelector(".goal");
let paragraphGoal = document.querySelector(".paragraph-goal");

function displayGoal(goal) {
  let t = document.createTextNode(goal);
  paragraphGoal.appendChild(t);
}

document.querySelector(".send-goal").onclick = function () {
  axios.post("http://localhost: 4001/api/goal/").then(function (res) {
    displayGoal(textBox.value);
  });
};
