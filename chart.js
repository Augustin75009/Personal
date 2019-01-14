var ctx = document.getElementById("myChart");

var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:
      ['Ruby', 'JavaScript', 'Front-end', 'Back-end', 'Design'],
    datasets: [{
      data: [5, 4, 3, 5, 3],
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
          color: "#FFFFFF"
            },
        display: true,
        ticks: {
          beginAtZero: true,
          display: false
        },
        pointLabels: {
          fontSize: 20,
          fontColor: 'white'
        }
    }},
  });
