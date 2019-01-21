var ctx = document.getElementById("myChart");


// const myStatus = JSON.parse(ctx.canvas.dataset.deliveries)
const data1 = ctx.dataset.data1
const data2 = ctx.dataset.data2
const data3 = ctx.dataset.data3
const data4 = ctx.dataset.data4
const data5 = ctx.dataset.data5


var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:
      ['CSS', 'HTML', 'JavaScript', 'JQuery', 'Design'],
    datasets: [{
      data: [4, 5, 4, 1, 3],
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'rgba(0,255,0,0.5)'
      }]
    },
  options: {
    responsive: true,
    legend: {
        display: false
      },
    scale: {
      display: true,
      xAxes: [{
          display: true,
          color: "#FFFFFF",
          gridLines: {
            display: true,
            color: 'red'
          }
      }],
        gridLines: {
          display: true ,
          color: "grey"
            },
        display: true,
        ticks: {
          beginAtZero: true,
          max: 5,
          display: false
        },
        pointLabels: {
          fontSize: 20,
          fontColor: 'grey'
        }
    }},
  });
