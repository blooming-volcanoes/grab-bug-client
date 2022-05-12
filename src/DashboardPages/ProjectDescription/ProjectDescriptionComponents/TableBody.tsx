/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

function TableBody({ projects }: any) {
    return (
        <tbody className="text-center">
            {projects.map((project: any) => (
                <TableRowSingle project={project} key={project.id} />
            ))}
        </tbody>
    );
}

export default TableBody;
