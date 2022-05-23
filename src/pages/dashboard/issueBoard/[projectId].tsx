import IssueBoardMain from "DashboardPages/IssueBoard/IssueBoardMain";
import { GetServerSideProps } from "next";
import React from "react";
import ProjectHttpReq from "services/Project.service";
import DashboardLayout from "../../../Layouts/DashboardLayout";

function issueBoard({ project }: any) {
    return (
        <DashboardLayout>
            <IssueBoardMain project={project} />
            {/* Graphs and Charts */}
            <div
                style={{
                    fontSize: "50px",
                }}
            >
                graph and charts
            </div>
        </DashboardLayout>
    );
}

export default issueBoard;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const { params } = context;
    const { projectId } = params;
    const project = await ProjectHttpReq.getProject(projectId);

    return {
        props: {
            project: project.project,
        },
    };
};
