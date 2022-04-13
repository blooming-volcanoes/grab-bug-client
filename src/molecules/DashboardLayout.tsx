import React from "react";
import SideBar from "../components/Dashboard/SideBar";
import TopBar from "../components/Dashboard/TopBar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <TopBar />

            <div className="grid-col-12 grid">
                {/* side bar */}
                <div>
                    <SideBar />
                </div>
                {/* dashboard content */}
                <div>{children}</div>
            </div>
        </section>
    );
}

export default DashboardLayout;
