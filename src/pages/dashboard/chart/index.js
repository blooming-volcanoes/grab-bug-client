import React from "react";
import Chart from "../../../components/Dashboard/Chart/Chart";
import PieChart from "../../../components/Dashboard/Chart/Pie";

const index = () => (
    <div className="grid md:grid-cols-2">
        <div className="p-5">
            <Chart />
        </div>
        <div className="p-5">
            <PieChart />
        </div>
    </div>
);

export default index;
