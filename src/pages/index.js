/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import Home from "Homepage/Home/Home";
import PageLayout from "Layouts/PageLayout";
import React from "react";

function index() {

    return (
        <div>
            <PageLayout title="Home">
                <Home />
                {/* <SocketClient /> */}
            </PageLayout>
        </div>
    );
}

export default index;
