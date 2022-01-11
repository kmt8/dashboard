$(".counter-up").counterUp({
    delay: 10,
    time: 1000
});

// Chart start
let dateArr = ['jul 21','jul 20', 'jul 19', 'jul 18', 'jul 17', 'jul 16', 'jul 15', 'jul 14', 'jul 13', 'jul 12', 'jul 11'];
let orderCountArr = [7,5,6,4,6,4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,28,17,19,16,23,33,16];

const ctx = document.getElementById('ovChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
        {
            label: 'Orders Counts',
            data: orderCountArr,
            backgroundColor: [
                '#f4a26130'
            ],
            borderColor: [
                '#e76f51'
            ],
            borderWidth: 1,
            tension: 0
        },
        {
            label: 'Viewers Count',
            data: viewerCountArr,
            backgroundColor: [
                '#2a9d8f30'
            ],
            borderColor: [
                '#264653'
            ],
            borderWidth: 1,
            tension: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: true,
                },
            }],
            xAxes: [{
                gridLines: {
                    display:false
                }
            }]
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});
// Chart end

// Pie Chart Start
const orderFromPlace = [5, 15, 4, 9, 7];
const places = ["YGN", "MDY", "NPY", "SHAN", "MGW"];

let ctx2 = document.getElementById('opChart').getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '#',
            data: orderFromPlace,
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
            y: {
                beginAtZero: true
            }
            
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle: true
            }
        }
    }
});
// Pie Chart End