import React, { useEffect, useState, useRef } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './Ecg_styles.css'; // Import the CSS file

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ECGGraph = ({ data, isRunning }) => {
    const displayPoints = 600; // Number of points to display
    const updateInterval = 200; // Time interval for updates in milliseconds

    const [chartData, setChartData] = useState({
        labels: Array.from({ length: displayPoints }, (_, i) => i),
        datasets: [{
            label: 'ECG Data',
            data: Array(displayPoints).fill(null), // Start with empty data points
            borderColor: 'black',
            borderWidth: 1, // Thinner line
            fill: false,
            pointRadius: 0, // Hide the points (nodes)
        }]
    });

    const dataIndex = useRef(0);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                addData();
            }, updateInterval);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const addData = () => {
        if (dataIndex.current >= data.length) {
            dataIndex.current = 0;
        }

        const ecgData = data[dataIndex.current].ecg;
        const sampleValues = ecgData.Samples;

        setChartData(prevChartData => {
            let newData = [...prevChartData.datasets[0].data];

            sampleValues.forEach((value, index) => {
                newData.push(value);
                if (newData.length > displayPoints) {
                    newData.shift();
                }
            });

            return {
                ...prevChartData,
                datasets: [{
                    ...prevChartData.datasets[0],
                    data: newData
                }]
            };
        });

        dataIndex.current++;
    };

    const options = {
        responsive: true,
        animation: {
            duration: 0
        },
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                grid: {
                    display: true,
                    color: function (context) {
                        return context.tick.value % 15 === 0 ? '#dbd6d5' : 'white'; // Darker grid lines for every 15th tick
                    }
                }
            },
            y: {
                min: -8000, // Set y-axis minimum to a smaller range
                max: 1950,  // Set y-axis maximum to a smaller range
                title: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                grid: {
                    display: true,
                    color: function (context) {
                        return context.tick.value % 5 === 0 ? '#dbd6d5' : 'white'; // Darker grid lines for every 5th tick
                    }
                }
            },
        },
        plugins: {
            legend: {
                display: false // Hide legend
            },
            title: {
                display: false // Hide title
            },
            tooltip: {
                enabled: false // Disable tooltip
            }
        },
        elements: {
            point: {
                radius: 0 // Hide points
            }
        }
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <Line style={{ width: '900px', height: '100px', paddingRight: '50px' }} data={chartData} options={options} />
        </div>
    );
};

export default ECGGraph;
