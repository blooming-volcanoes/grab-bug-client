import Banner from "components/Home/Banner/Banner";
import PageLayout from "components/PageLayout";
import React from "react";

function index() {
    return (
        <div>
            <PageLayout title="Home">
                <Banner />
                <h1>Hello</h1>
            </PageLayout>
        </div>
    );
}

export default index;
