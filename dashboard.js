// Top 10 Restaurants by Order Count (hardcoded data)
window.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('topRestaurantsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Aura Pizzas', 'Swad', 'Dilli Burger Adda', 
                'Tandoori Junction', 'The Chicken Junction', 'Masala Junction'
            ],
            datasets: [{
                label: 'Number of Orders',
                data: [14500, 6300, 400, 200, 100, 50],
                backgroundColor: [
                    '#4fc3f7', '#90caf9', '#b39ddb', 
                    '#80cbc4', '#ffd54f', '#ff8a65'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    font: {
                        size: 22,
                        weight: 'bold'
                    },
                    color: '#fff'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Restaurant Name',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        color: '#fff'
                    },
                    ticks: {
                        font: {
                            size: 14
                        },
                        color: '#fff',
                        maxRotation: 30,
                        minRotation: 30
                    }
                },
                y: {
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--chart-grid-color'),
                        drawBorder: false
                    },
                    title: {
                        display: true,
                        text: 'Number of Orders',
                        font: {
                            size: 18,
                            weight: 'bold'
                        },
                        color: '#fff'
                    },
                    ticks: {
                        font: {
                            size: 14
                        },
                        color: getComputedStyle(document.documentElement).getPropertyValue('--chart-tick-color') || '#b0bec5'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}); 

// Predictive Analytics: Sales Forecast (Prophet)
const salesForecastCtx = document.getElementById('salesForecastChart').getContext('2d');
const forecastLabels = [
    '2023-03-03', '2023-03-05', '2023-03-07', '2023-03-09', '2023-03-11',
    '2023-03-13', '2023-03-15', '2023-03-17', '2023-03-19', '2023-03-21',
    '2023-03-23', '2023-03-25', '2023-03-27', '2023-03-29', '2023-03-31',
    '2023-04-02', '2023-04-04', '2023-04-06', '2023-04-08', '2023-04-10',
    '2023-04-12', '2023-04-14', '2023-04-16'
];
const actualSales = [
    180, 260, 190, 120, 300, 100, 350, 170, 250, 200, 320, 140, 280, 210, 330, 220, 340, 230, 360, 240, 370, 250, 380
];
const forecast = [
    170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390
];

const salesForecastChart = new Chart(salesForecastCtx, {
    type: 'line',
    data: {
        labels: forecastLabels,
        datasets: [
            // Forecast/trend line
            {
                label: 'Forecast',
                data: forecast,
                borderColor: '#ff9800', // Bright orange for visibility
                backgroundColor: 'rgba(255, 152, 0, 0.08)',
                fill: false,
                tension: 0.1,
                pointRadius: 0,
                borderWidth: 4, // Thicker line
                order: 1
            },
            // Actual sales (scatter)
            {
                label: 'Actual Sales',
                data: actualSales.map((y, i) => ({ x: forecastLabels[i], y })),
                type: 'scatter',
                backgroundColor: '#e53935', // Bright red
                borderColor: '#e53935',
                pointRadius: 6, // Larger points
                showLine: false,
                order: 2
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: {
                display: false
            }
        },
        scales: {
            x: {
                title: { display: true, text: 'Date' },
                grid: { color: 'rgba(255,255,255,0.08)' },
                ticks: { color: '#fff' } // White ticks for contrast
            },
            y: {
                title: { display: true, text: 'Total Sales (INR)' },
                grid: { color: 'rgba(255,255,255,0.08)' },
                ticks: { color: '#fff' } // White ticks for contrast
            }
        }
    }
});

// Predictive Analytics: Sales Forecast Components (Trend)
const salesForecastComponentsCtx = document.getElementById('salesForecastComponentsChart').getContext('2d');
const salesForecastComponentsChart = new Chart(salesForecastComponentsCtx, {
    type: 'line',
    data: {
        labels: forecastLabels,
        datasets: [
            {
                label: 'Trend',
                data: forecast,
                borderColor: '#00e676', // Bright green for contrast
                backgroundColor: 'rgba(0, 230, 118, 0.08)',
                fill: false,
                tension: 0.1,
                pointRadius: 0,
                borderWidth: 4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: {
                display: false
            }
        },
        scales: {
            x: {
                title: { display: true, text: 'ds' },
                grid: { color: 'rgba(255,255,255,0.08)' },
                ticks: { color: '#fff' }
            },
            y: {
                title: { display: true, text: 'trend' },
                grid: { color: 'rgba(255,255,255,0.08)' },
                ticks: { color: '#fff' }
            }
        }
    }
}); 

// Orders by Subzone (Top 15)
const ordersBySubzoneCtx = document.getElementById('ordersBySubzoneChart').getContext('2d');
new Chart(ordersBySubzoneCtx, {
    type: 'bar',
    data: {
        labels: [
            'Greater Kailash 1 (GK1)', 'Sector 4', 'DLF Phase 1', 'Sector 135', 'Vasant Kunj', 'Sohna', 'Chittaranjan Park', 'Saket/Maple'
        ],
        datasets: [{
            label: 'Number of Orders',
            data: [7300, 6700, 4000, 2500, 1000, 400, 200, 100],
            backgroundColor: [
                '#191d2b', '#223a4c', '#386641', '#a7c957', '#bc6c25', '#b5838d', '#cdb4db', '#b5ead7'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: {
                title: { display: true, text: 'Subzone', color: '#fff', font: { weight: 'bold', size: 16 } },
                ticks: { maxRotation: 30, minRotation: 30, color: '#fff', font: { size: 13 } }
            },
            y: {
                title: { display: true, text: 'Number of Orders', color: '#fff', font: { weight: 'bold', size: 16 } },
                beginAtZero: true,
                ticks: { color: '#fff', font: { size: 13 } }
            }
        }
    }
});

// Distribution of Ratings
const distributionOfRatingsCtx = document.getElementById('distributionOfRatingsChart').getContext('2d');
new Chart(distributionOfRatingsCtx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Frequency',
            data: [180, 70, 150, 350, 1750],
            backgroundColor: '#4db6ac'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: { title: { display: true, text: 'Rating', color: '#fff', font: { weight: 'bold', size: 16 } }, ticks: { color: '#fff', font: { size: 13 } } },
            y: { title: { display: true, text: 'Frequency', color: '#fff', font: { weight: 'bold', size: 16 } }, beginAtZero: true, ticks: { color: '#fff', font: { size: 13 } } }
        }
    }
});

// Total Sales Over Time (Monthly)
const totalSalesOverTimeCtx = document.getElementById('totalSalesOverTimeChart').getContext('2d');
new Chart(totalSalesOverTimeCtx, {
    type: 'line',
    data: {
        labels: ['2024-09', '2024-10', '2024-11', '2024-12', '2025-01'],
        datasets: [{
            label: 'Total Sales (INR)',
            data: [2620000, 3020000, 3030000, 3090000, 2820000],
            borderColor: '#8e24aa',
            backgroundColor: 'rgba(142,36,170,0.1)',
            fill: false,
            tension: 0.1,
            pointBackgroundColor: '#8e24aa',
            pointBorderColor: '#8e24aa',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: { title: { display: true, text: 'Month', color: '#fff', font: { weight: 'bold', size: 16 } }, ticks: { color: '#fff', font: { size: 13 } } },
            y: { title: { display: true, text: 'Total Sales (INR)', color: '#fff', font: { weight: 'bold', size: 16 } }, beginAtZero: false, ticks: { color: '#fff', font: { size: 13 } } }
        }
    }
});

// Daily Order Trends
const dailyOrderTrendsCtx = document.getElementById('dailyOrderTrendsChart').getContext('2d');
new Chart(dailyOrderTrendsCtx, {
    type: 'line',
    data: {
        labels: [
            '2024-09', '2024-10', '2024-11', '2024-12', '2025-01', '2025-02'
        ],
        datasets: [{
            label: 'Number of Orders',
            data: [140, 250, 180, 220, 170, 200],
            borderColor: '#388e3c',
            backgroundColor: 'rgba(56,142,60,0.1)',
            fill: false,
            tension: 0.1,
            pointBackgroundColor: '#388e3c',
            pointBorderColor: '#388e3c',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: { title: { display: true, text: 'Date', color: '#fff', font: { weight: 'bold', size: 16 } }, ticks: { color: '#fff', font: { size: 13 } } },
            y: { title: { display: true, text: 'Number of Orders', color: '#fff', font: { weight: 'bold', size: 16 } }, beginAtZero: true, ticks: { color: '#fff', font: { size: 13 } } }
        }
    }
});

// Distribution of Order Values
const distributionOfOrderValuesCtx = document.getElementById('distributionOfOrderValuesChart').getContext('2d');
new Chart(distributionOfOrderValuesCtx, {
    type: 'bar',
    data: {
        labels: ['0-500', '500-1000', '1000-1500', '1500-2000', '2000+'],
        datasets: [{
            label: 'Frequency',
            data: [8000, 10000, 3500, 800, 200],
            backgroundColor: 'rgba(33,150,243,0.5)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: { title: { display: true, text: 'Order Total (INR)', color: '#fff', font: { weight: 'bold', size: 16 } }, ticks: { color: '#fff', font: { size: 13 } } },
            y: { title: { display: true, text: 'Frequency', color: '#fff', font: { weight: 'bold', size: 16 } }, beginAtZero: true, ticks: { color: '#fff', font: { size: 13 } } }
        }
    }
});

// Orders by Hour of Day
const ordersByHourCtx = document.getElementById('ordersByHourChart').getContext('2d');
new Chart(ordersByHourCtx, {
    type: 'bar',
    data: {
        labels: [0,1,2,3,4,11,12,13,14,15,16,17,18,19,20,21,22,23],
        datasets: [{
            label: 'Number of Orders',
            data: [950, 850, 500, 400, 300, 900, 1150, 1050, 850, 950, 1050, 1600, 2300, 2900, 2200, 1700, 1500],
            backgroundColor: [
                '#2d3142', '#4f5d75', '#bfc0c0', '#ef8354', '#f6ae2d', '#f26419', '#86bbd8', '#33658a', '#2f4858', '#f6ae2d', '#f26419', '#86bbd8', '#33658a', '#2f4858', '#f6ae2d', '#f26419', '#86bbd8'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: { title: { display: true, text: 'Hour of Day (24-hour format)', color: '#fff', font: { weight: 'bold', size: 16 } }, ticks: { color: '#fff', font: { size: 13 } } },
            y: { title: { display: true, text: 'Number of Orders', color: '#fff', font: { weight: 'bold', size: 16 } }, beginAtZero: true, ticks: { color: '#fff', font: { size: 13 } } }
        }
    }
});

// Customer Complaints by Tag (Top 10)
const customerComplaintsCtx = document.getElementById('customerComplaintsChart').getContext('2d');
new Chart(customerComplaintsCtx, {
    type: 'bar',
    data: {
        labels: ['Missing Item', 'None', 'Late Delivery', 'Wrong Order', 'Damaged Item'],
        datasets: [{
            label: 'Number of Complaints',
            data: [4, 4, 3, 2, 2],
            backgroundColor: [
                '#4f518c', '#3d5a80', '#5390d9', '#38b000', '#b5c99a'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: { title: { display: true, text: 'Complaint Tag', color: '#fff', font: { weight: 'bold', size: 16 } }, ticks: { color: '#fff', font: { size: 13 } } },
            y: { title: { display: true, text: 'Number of Complaints', color: '#fff', font: { weight: 'bold', size: 16 } }, beginAtZero: true, ticks: { color: '#fff', font: { size: 13 } } }
        }
    }
}); 

// Average Order Value (AOV) by Top 10 Subzone
const aovBySubzoneCtx = document.getElementById('aovBySubzoneChart').getContext('2d');
new Chart(aovBySubzoneCtx, {
    type: 'bar',
    data: {
        labels: [
            'Vasant Kunj', 'Sector 135', 'DLF Phase 1', 'Shahdara', 'Sector 4', 'Greater Kailash 1 (GK2)', 'Chittaranjan Park', 'Sikandarpur'
        ],
        datasets: [{
            label: 'Average Order Value (INR)',
            data: [750, 720, 705, 690, 690, 640, 475, 440],
            backgroundColor: [
                '#3f007d', '#6a0572', '#a239ca', '#c471ed', '#f64f59', '#ff9068', '#f9d423', '#ff4e50'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: false }
        },
        scales: {
            x: {
                title: { display: true, text: 'Subzone', color: '#fff', font: { weight: 'bold', size: 16 } },
                ticks: { color: '#fff', font: { size: 13 }, maxRotation: 30, minRotation: 30 }
            },
            y: {
                title: { display: true, text: 'Average Order Value (INR)', color: '#fff', font: { weight: 'bold', size: 16 } },
                beginAtZero: true,
                ticks: { color: '#fff', font: { size: 13 } }
            }
        }
    }
}); 