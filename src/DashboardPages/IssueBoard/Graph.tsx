import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Graph({ project }: { project: any }) {
    const [severity, setSeverity] = useState<any[]>([]);

    console.log(project, "from graph");

    useEffect(() => {
        if (project?.issues) {
            const moderate = project?.issues?.filter((pro: any) => pro.severity === "moderate");
            const low = project?.issues?.filter((pro: any) => pro.severity === "low");
            const high = project?.issues?.filter((pro: any) => pro.severity === "high");
            const extreme = project?.issues?.filter((pro: any) => pro.severity === "extreme");
            const critical = project?.issues?.filter((pro: any) => pro.critical === "critical");

            setSeverity([
                moderate.length,
                low.length,
                high.length,
                extreme.length,
                critical.length,
            ]);
        }
    }, [project]);

    return (
        <section className="mt-20">
            <div className="flex flex-wrap justify-between px-6">
                <div className="w-[50%]">
                    {/* severity */}

                    <div>
                        {project && project?.issues?.length ? (
                            <>
                                <h1 className=" text-xl font-semibold text-gray-600 drop-shadow">
                                    Severity
                                </h1>
                                <Chart
                                    type="pie"
                                    height="auto"
                                    options={{
                                        labels: ["Moderate", "Low", "High", "Extreme", "Critical"],
                                        dataLabels: {
                                            formatter(val, opts) {
                                                return opts.w.config.series[opts.seriesIndex];
                                            },
                                        },
                                    }}
                                    series={severity}
                                />
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="w-[50%]">
                    {/* severity */}
                    <h1 className=" text-xl font-semibold text-gray-600 drop-shadow">Severity</h1>
                    <div>
                        <Chart
                            type="donut"
                            height="auto"
                            options={{ labels: ["A1", "B1", "C1", "D1", "l1"] }}
                            series={[20, 30, 40, 50, 60]}
                        />
                    </div>
                </div>
                <div className="w-[50%]">
                    {/* severity */}
                    <h1 className=" text-xl font-semibold text-gray-600 drop-shadow">Severity</h1>
                    <div>
                        <Chart
                            type="donut"
                            height="auto"
                            options={{ labels: ["A1", "B1", "C1", "D1", "l1"] }}
                            series={[20, 30, 40, 50, 60]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Graph;
