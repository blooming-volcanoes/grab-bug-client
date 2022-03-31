/* eslint-disable import/no-unresolved */
import Home from "components/Home/Home/Home";
import PageLayout from "components/PageLayout";
import React from "react";

function index() {
    return (
        <div>
            <PageLayout title="Home">
                <Home />
            </PageLayout>
        </div>
    );
}

export default index;
