import Cards from "Chart/Cards/Cards";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";

function Dashboard() {
    return (
        <DashboardLayout>
            <div className="App">
                <div className="AppGlass">
                    <div className="MainDash">
                        <h1 className="text-2xl font-semibold">Dashboard</h1>
                        <Cards />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;
