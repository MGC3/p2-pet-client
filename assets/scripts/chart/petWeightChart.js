const Chart = require("chart.js");
const drawChart = (weights, dates) => {
  let ctx = document.getElementById("pet-weight-chart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: weights,
      datasets: [
        {
          label: "Weight",
          data: weights,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
          fill: false
        }
      ]
    }
  });
};

module.exports = {
  drawChart
};
