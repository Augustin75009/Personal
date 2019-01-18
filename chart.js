var ctx = document.getElementById("myChart");

var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:
      ['Ruby', 'JavaScript', 'Front-end', 'Python', 'Back-end', 'Design'],
    datasets: [{
      data: [4, 4, 3, 1, 4, 3],
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
          fontSize: 15,
          fontColor: 'grey'
        }
    }},
  });
