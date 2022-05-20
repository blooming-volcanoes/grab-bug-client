/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import { AnimateSharedLayout, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ImCross } from "react-icons/im";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Card({ card }: { card: any }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="parentContainer">
            <AnimateSharedLayout>
                {expanded ? (
                    <ExpandedCard card={card} setExpanded={() => setExpanded(false)} />
                ) : (
                    <CompactCard card={card} setExpanded={() => setExpanded(true)} />
                )}
            </AnimateSharedLayout>
        </div>
    );
}

// compact card
function CompactCard({
    card,
    setExpanded,
}: {
    card: any;
    setExpanded: React.Dispatch<React.SetStateAction<boolean | React.MouseEvent>>;
}) {
    return (
        <motion.div
            className="CompactCard"
            style={{ background: card.color.backGround, boxShadow: card.color.boxShadow }}
            onClick={setExpanded}
            layoutId="expandableCard"
        >
            <div className="radialBar">
                <CircularProgressbar value={card.barValue} text={`${card.barValue} %`} />
                <span>{card.title}</span>
            </div>
            <div className="detail">
                <span>{card.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}
// Expanded card
function ExpandedCard({
    card,
    setExpanded,
}: {
    card: any;
    setExpanded: React.Dispatch<React.SetStateAction<boolean | React.MouseEvent>>;
}) {
    return (
        <motion.div
            style={{ background: card.color.backGround, boxShadow: card.color.boxShadow }}
            className="ExpandedCard"
            layoutId="expandableCard"
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <ImCross onClick={setExpanded} />
            </div>
            <span>{card.title}</span>
            <div className="chartContainer">
                <ReactApexChart options={card.options} series={card.series} type="area" />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

export default Card;
