import ProjectCreate from "components/projectCreate/ProjectCreate";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";

function projectCreate() {
    return (
        <DashboardLayout>
            <ProjectCreate />
        </DashboardLayout>
    );
}

export default projectCreate;
