/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
/*
 *** Title : Ticket view Dashboard
 *** Date : 4/5/2022
 *** Des : User can view there tickets details here
 *** Author : Raiyan
 */
import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import IssueHttpReq from "services/Issue.service";
import useAuth from "../../hooks/useAuth";
import TicketCommentSingle from "./TicketCommentSingle";

function TicketComments({ issue }: any) {
    const { user } = useAuth();
    const commenter = user.user.name;
    const { _id } = issue;
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(issue.comments);
    const [loading, setLoading] = useState(false);
    const handleComment = async () => {
        setLoading(true);
        try {
            const res = await IssueHttpReq.addComment(_id, {
                commentText,
                commenter,
            });
            if (res.data.success) {
                setCommentText("");
                cogoToast.success("Comment posted!");
            }
        } catch (err: any) {
            console.log(err);
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        const fetcher = async () => {
            const issueData = await IssueHttpReq.getIssue(issue._id);
            setComments(issueData.data.result.comments);
        };
        fetcher();
    }, [loading]);

    return (
        <div>
            {/* ticket comments */}
            <div className="container mx-auto h-max rounded-[3px] shadow-[0_0_10px_#5584AC] md:p-3">
                <div className="rounded-[3px] bg-gradient-to-r from-[#22577E] via-[#5584AC] to-[#22577E] p-4">
                    {/* ticket header */}
                    <h1 className="text-2xl font-bold uppercase text-[#FAFFAF]">Ticket comments</h1>
                    <p className="text-[#95D1CC]">All comments for ticket</p>
                </div>

                {/* commenter details */}
                <div className="pt-3">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    {issue?.comments?.length ? (
                                        <table className="min-w-full ">
                                            <thead className="border-b uppercase">
                                                <tr>
                                                    <th scope="col" className="table-th">
                                                        Comment
                                                    </th>
                                                    <th scope="col" className="table-th">
                                                        Commented by
                                                    </th>
                                                    <th scope="col" className="table-th">
                                                        Created at
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {comments?.map((com: any) => (
                                                    <TicketCommentSingle
                                                        key={com._id}
                                                        comment={com}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <h3>No comments yet</h3>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* input for comment */}
            <h1 className="mt-5 text-xl">Write a comment here</h1>
            <div className="my-5 flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                <textarea
                    onChange={(e) => setCommentText(e.target.value)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#22577E] focus:ring-[#22577E] sm:text-sm"
                    value={commentText}
                />
                <button className="primary-btn" type="button" onClick={handleComment}>
                    ADD COMMENT
                </button>
            </div>
        </div>
    );
}

export default TicketComments;
