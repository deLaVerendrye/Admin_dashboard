
let myChart = document.getElementById("myChart").getContext("2d");

//gradient for earnings
const newGradient = myChart.createLinearGradient(0, 0, 0, 200);
newGradient.addColorStop(0, '#69e6a1');
newGradient.addColorStop(1, '#6598c7');

let balanceChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov"
        ],
        datasets: [{//expenses dataset
            label: 'expenses',
            data: [650, 1590, 1800, 810, 1560, 1550, 1400, 1810, 1560, 1550, 1400],
        backgroundColor: '#6598c73d',
        borderColor: '#6598c7',
        borderWidth: 1
        },{//earnings dataset
            label: 'earnings',
            data: [950, 1790, 2000, 2010, 1450, 2050, 1500, 1990, 2000, 1850, 1500],
        backgroundColor: newGradient
        }],
    },
    options: {
    scales: {
        y: {
        beginAtZero: false
            }
        }
    },
} );