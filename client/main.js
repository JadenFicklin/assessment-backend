document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4001/api/fortune/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};
