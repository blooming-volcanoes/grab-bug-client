/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unsafe-optional-chaining */
import MyProjectSingle from "components/MyProjects/MyProjectSingle";
import useAuth from "hooks/useAuth";
import DashboardLayout from "Layouts/DashboardLayout";
import React from "react";

const index = () => {
    const auth = useAuth();
    const { projects } = auth?.user?.user;
    return (
        <DashboardLayout>
            <div className="flex flex-col space-y-3 md:flex-row">
                {projects.map((project: any) => (
                    <MyProjectSingle projectId={project.projectId} />
                ))}
            </div>
        </DashboardLayout>
    );
};

export default index;
