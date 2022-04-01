/* eslint-disable import/no-unresolved */
import PageLayout from "components/PageLayout";
import React from "react";
import TaskView from "../components/TaskView/TaskView";

function index() {
    return (
        <div>
            <PageLayout title="Home">
                <TaskView />
            </PageLayout>
        </div>
    );
}

export default index;
