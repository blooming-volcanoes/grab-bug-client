import PageLayout from "Layouts/PageLayout";
import React from "react";
import About from "../../components/About/About";

function about() {
    return (
        <PageLayout title="About us">
            <About />
        </PageLayout>
    );
}

export default about;
