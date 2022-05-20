/* eslint-disable import/no-unresolved */
import Home from "Homepage/Home/Home";
import PageLayout from "Layouts/PageLayout";
import UnAuthenticatedLayout from "Layouts/UnAuthenticatedLayout";
import React from "react";

function index() {
    return (
        <UnAuthenticatedLayout>
            <PageLayout title="Home">
                <Home />
            </PageLayout>
        </UnAuthenticatedLayout>
    );
}

export default index;
