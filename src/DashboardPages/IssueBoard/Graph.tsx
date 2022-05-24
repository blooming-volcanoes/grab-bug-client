/* eslint-disable no-plusplus */
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Graph({ project }: { project: any }) {
    const [severity, setSeverity] = useState<any[]>([]);
    const [bugCategory, setBugCategory] = useState<any[]>([]);
    const [allCateGories, setAllCateGories] = useState<any[]>([]);
    const [status, setStatus] = useState<any[]>([]);

    console.log(project, "from graph");

    useEffect(() => {
        if (project?.issues) {
            // bug severity
            const moderate = project?.issues?.filter(
                (pro: any) => pro.severity.trim().toLowerCase() === "moderate"
            );
            const low = project?.issues?.filter(
                (pro: any) => pro.severity.trim().toLowerCase() === "low"
            );
            const high = project?.issues?.filter(
                (pro: any) => pro.severity.trim().toLowerCase() === "high"
            );
            const extreme = project?.issues?.filter(
                (pro: any) => pro.severity.trim().toLowerCase() === "extreme"
            );
            const critical = project?.issues?.filter(
                (pro: any) => pro.severity.trim().toLowerCase() === "critical"
            );

            setSeverity([
                moderate.length,
                low.length,
                high.length,
                extreme.length,
                critical.length,
            ]);

            // bug status
            const reported = project?.issues.filter(
                (pro: any) => pro.status.trim().toLowerCase() === "reported"
            );
            const pending = project?.issues.filter(
                (pro: any) => pro.status.trim().toLowerCase() === "pending"
            );
            const done = project?.issues.filter(
                (pro: any) => pro.status.trim().toLowerCase() === "done"
            );

            setStatus([reported.length, pending.length, done.length]);

            // bug category
            const filteredCate: any = Array.from(
                new Set(project.issues.map((pro: any) => pro.bugCategory))
            );

            setAllCateGories(() => filteredCate);
            let cate: any[] = [];
            for (let i = 0; i < filteredCate.length; i++) {
                cate = [
                    ...cate,
                    project?.issues.filter(
                        (pro: any) =>
                            pro.bugCategory.trim().toLowerCase() ===
                            filteredCate[i].trim().toLowerCase()
                    ),
                ];
            }
            setBugCategory(cate);
        }
    }, [project]);

    return (
        <section className="mt-20">
            {project?.issues.length > 0 && (
                <div className="flex flex-col flex-wrap justify-between space-y-4 px-4 md:flex-row md:px-16 lg:flex-row lg:px-20 2xl:px-28">
                    <div className="w-full md:w-[50%] lg:w-[45%] 2xl:w-[40%]">
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
                                        style={{ fontSize: "20px" }}
                                        options={{
                                            labels: [
                                                "Moderate",
                                                "Low",
                                                "High",
                                                "Extreme",
                                                "Critical",
                                            ],
                                            dataLabels: {
                                                style: {
                                                    fontSize: "20px",
                                                    fontFamily: "Poppins', sans-serif",
                                                    fontWeight: "bold",
                                                },
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
                    <div className="w-full md:w-[50%]  lg:w-[45%]  2xl:w-[40%]">
                        <div>
                            {project && project?.issues?.length ? (
                                <>
                                    <h1 className="ml-4 text-xl font-semibold text-gray-600 drop-shadow">
                                        Bug Category
                                    </h1>
                                    <Chart
                                        type="pie"
                                        height="auto"
                                        options={{
                                            labels: allCateGories,
                                            dataLabels: {
                                                style: {
                                                    fontSize: "20px",
                                                    fontFamily: "Poppins', sans-serif",
                                                    fontWeight: "bold",
                                                },
                                                formatter(val, opts) {
                                                    return opts.w.config.series[opts.seriesIndex];
                                                },
                                            },
                                        }}
                                        series={bugCategory.map((pro) => pro.length)}
                                    />
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[45%]  2xl:w-[40%]">
                        {project && project?.issues?.length ? (
                            <>
                                <h1 className="ml-4 text-xl font-semibold text-gray-600 drop-shadow">
                                    Issue Status
                                </h1>
                                <Chart
                                    type="pie"
                                    height="auto"
                                    options={{
                                        labels: ["Reported", "Pending", "Done"],
                                        dataLabels: {
                                            style: {
                                                fontSize: "20px",
                                                fontFamily: "Poppins', sans-serif",
                                                fontWeight: "bold",
                                            },
                                            formatter(val, opts) {
                                                return opts.w.config.series[opts.seriesIndex];
                                            },
                                        },
                                    }}
                                    series={status}
                                />
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Graph;
