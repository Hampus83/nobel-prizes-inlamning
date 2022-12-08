// Misstänkt fel i chart.js
const pieOptions: any = {
    scales: {
        x: {
            display: false,
            ticks: {
                color: '#d7d7d7',
                font: {
                    size: 8
                }
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#d7d7d7',
            },
            position: 'left',
        }
    }
}

const topTenOptions: any = {
    scales: {
        y: {
            grid: {
                color: '#333333'
            },
            ticks: {
                color: '#d7d7d7'
            }
        },
        x: {
            display: true,
            ticks: {
                color: '#d7d7d7',
                font: {
                    size: 6
                }
            }
        }
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            fontColor: '#d7d7d7',
            display: true,
        }
    }
}

const awardsPerCategorybyYearOptions: any = {
    scales: {
        y: {
            grid: {
                color: '#333333'
            },
            ticks: {
                color: '#d7d7d7'
            }
        },
        x: {
            display: true,
            ticks: {
                color: '#d7d7d7',
                font: {
                    size: 12
                }
            }
        }
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            fontColor: '#d7d7d7',
            display: true,
        }
    }
}

const countriesOptions: any = {
    scales: {
        y: {
            grid: {
                color: '#333333'
            },
            ticks: {
                color: '#d7d7d7'
            }
        },
        x: {
            grid: {
                display: false
            },
            display: true,
            ticks: {
                color: '#d7d7d7',
                font: {
                    size: 10
                }
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            color: '#d7d7d7',
            display: false,
            position: 'left',
        }
    }
}

export { pieOptions, topTenOptions, countriesOptions, awardsPerCategorybyYearOptions }