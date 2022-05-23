import IssueBoardMain from "DashboardPages/IssueBoard/IssueBoardMain";
import { GetServerSideProps } from "next";
import React from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";

function issueBoard({ issues }: any) {
    return (
        <DashboardLayout>
            <IssueBoardMain issues={issues} />
        </DashboardLayout>
    );
}

export default issueBoard;

export const getServerSideProps: GetServerSideProps = async () => {
    const issues = [
        {
            id: 1,
            name: "Fronend bug",
            status: "working",
            person: "Admin",
            time: "4 hour",
            timeline: "48 hours",
            countdown: "44 hours left",
            files: "Download",
        },
        {
            id: 2,
            name: "Fronend bug",
            status: "pending",
            person: "Admin",
            time: "4 hour",
            timeline: "48 hours",
            countdown: "44 hours left",
            files: "Download",
        },
        {
            id: 3,
            name: "Fronend bug",
            status: "done",
            person: "Admin",
            time: "4 hour",
            timeline: "48 hours",
            countdown: "44 hours left",
            files: "Download",
        },
    ];
    return {
        props: {
            issues,
        },
    };
};
