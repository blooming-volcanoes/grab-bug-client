/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TableRowSingle from "./TableRowSingle";

function TableBody({ projects }) {
    return (
        <tbody>
            {projects.map((project) => (
                <TableRowSingle project={project} key={project.id} />
            ))}
        </tbody>
    );
}

export default TableBody;
