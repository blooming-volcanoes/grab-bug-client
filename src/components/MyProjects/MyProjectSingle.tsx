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
        <div className="m-0 w-full md:m-3">
            <div className="rounded-[3px] bg-gradient-to-r from-[#6693b3] via-[#5584AC] to-[#22577E] p-4">
                <h2 className="mb-3 text-3xl font-bold uppercase text-[#FAFFAF]">
                    Project Name: {project.name}
                </h2>
                <p className="text-lg text-white">Description: {project.description}</p>
                <p className="mb-3 text-xl text-white">
                    Deadline: {new Date(project.deadline).toLocaleString()}
                </p>
                <button
                    onClick={() => router.push(`/dashboard/issueBoard/${project._id}`)}
                    className="primary-btn"
                    type="button"
                >
                    Go to issue board
                </button>
            </div>
        </div>
    );
}

export default MyProjectSingle;
