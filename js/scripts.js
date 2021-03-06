
// Redimensionar la segunda columna donde se ubica la info del site
// utilizando jQuery

/* $(window).on('resize',function(){
    var width = $(window).width(); 
    $("#main").width(width-200);
}); */


// Dibujando un Gráfico
// Ejemplo

function getChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Morada', 'Naranja'],
            datasets: [{
                label: '# de Votos',
                data: [12, 23, 7, 18, 5, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes:[{
                    ticks: {
                        fontFamily: "'Open Sans', Helvetica, Arial, sans-serif"    
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                labels: {
                    fontFamily: "'Open Sans', Helvetica, Arial, sans-serif"
                }
            }
        }
    });
}