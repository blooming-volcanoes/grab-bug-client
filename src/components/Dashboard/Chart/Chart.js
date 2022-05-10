import React from "react";
import { Bar } from "react-chartjs-2";

function Chart() {
    return (
        <div>
            <Bar
                data={{
                    labels: ["React", "Vanila", "Next", "Angular", "Vue"],
                    datasets: [
                        {
                            label: "Number of People",
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 99, 132, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(255, 99, 132, 1)",
                                "rgba(255, 99, 132, 1)",
                                "rgba(255, 99, 132, 1)",
                                "rgba(255, 99, 132, 1)",
                                "rgba(255, 99, 132, 1)",
                            ],
                            borderWidth: 5,
                        },
                        {
                            label: "Solved Issues",
                            data: [6, 9, 1, 3, 1, 1],
                            backgroundColor: [
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                            ],
                            borderColor: [
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                                "rgba(173,255,47,0.5)",
                            ],
                            borderWidth: 5,
                        },
                    ],
                }}
                width={500}
                height={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
    );
}

export default Chart;
