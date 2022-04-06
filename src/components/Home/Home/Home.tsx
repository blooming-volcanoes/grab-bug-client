import React from "react";
import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";
import PlatForm from "../PlatForm/PlatForm";
import Support from "../Support/Support";
import TaskView from "../TaskView/TaskView";

function Home() {
    return (
        <div>
            <Banner />
            <Overview />
            <PlatForm />
            <TaskView />
            <Support />
        </div>
    );
}

export default Home;
