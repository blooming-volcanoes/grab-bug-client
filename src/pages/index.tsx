/* eslint-disable import/no-unresolved */
import Home from "Homepage/Home/Home";
import PageLayout from "molecules/PageLayout";
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
