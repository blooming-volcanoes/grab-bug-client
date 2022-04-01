import React from "react";
import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";
import SectionFour from "../SectionFour/SectionFour";
import Support from "../Support/Support";

function Home() {
    return (
        <div>
            <Banner />
            <Overview />
            <SectionFour />

            <Support />
        </div>
    );
}

export default Home;
