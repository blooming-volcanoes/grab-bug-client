import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
    return (
        <div>
            <Pie
                data={{
                    labels: ["React", "Vanila", "Next", "Angular", "Vue", "MySQL"],
                    datasets: [
                        {
                            label: "Number of People",
                            data: [12, 19, 3, 5, 10, 3],
                            backgroundColor: [
                                "rgba(255, 99, 132,0.5)",
                                "rgba(255, 159, 64,0.5)",
                                "rgba(255, 205, 86,0.5)",
                                "rgba(75, 192, 192,0.5)",
                                "rgba(54, 162, 235,0.5)",
                            ],
                        },
                    ],
                }}
                width={500}
                height={600}
                options={{
                    maintainAspectRatio: false,
                    // scales: {
                    //     yAxes: [
                    //         {
                    //             ticks: {
                    //                 beginAtZero: true,
                    //             },
                    //         },
                    //     ],
                    // },
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

export default PieChart;
