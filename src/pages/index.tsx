import Overview from "components/Home/overview";
import PageLayout from "components/PageLayout";
import React from "react";

function index() {
    return (
        <div>
            <PageLayout title="Home">
                <h1>Hello</h1>
                <Overview />
            </PageLayout>
        </div>
    );
}

export default index;
