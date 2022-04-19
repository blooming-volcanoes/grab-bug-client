import IssueCreate from "DashboardPages/IssueCreate/IssueCreate";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";

function createAnIssue() {
    return (
        <DashboardLayout>
            <IssueCreate />
        </DashboardLayout>
    );
}

export default createAnIssue;
