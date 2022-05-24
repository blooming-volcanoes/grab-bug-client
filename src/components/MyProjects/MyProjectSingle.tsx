/* eslint-disable no-underscore-dangle */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ProjectHttpReq from "services/Project.service";

function MyProjectSingle({ projectId }: any) {
    const router = useRouter();
    const [project, setProject] = useState<any>({});
    useEffect(() => {
        const fetcher = async () => {
            const data = await ProjectHttpReq.getProject(projectId);
            setProject(data.project);
        };
        fetcher();
    }, []);
    console.log(project);
    return (
        <div className="bg-gray-200 p-5">
            <h2 className="text-4xl">Project Name: {project.name}</h2>
            <p className="text-base">Deadline: {new Date(project.deadline).toLocaleString()}</p>
            <p>Description: {project.description}</p>
            <button
                onClick={() => router.push(`/dashboard/issueBoard/${project._id}`)}
                className="bg-blue-400 p-2"
                type="button"
            >
                Go to issue board
            </button>
        </div>
    );
}

export default MyProjectSingle;
