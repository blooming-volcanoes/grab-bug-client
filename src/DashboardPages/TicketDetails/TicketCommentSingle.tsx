import React from "react";

function TicketCommentSingle({ comment }: any) {
    return (
        <tr className="border-b">
            <td className="table-td">{comment.text}</td>
            <td className="table-td">{comment.commentedBy}</td>
            <td className="table-td">
                {new Date(comment.createdAt).toLocaleDateString()}{" "}
                {new Date(comment.createdAt).toLocaleTimeString()}
            </td>
        </tr>
    );
}

export default TicketCommentSingle;
