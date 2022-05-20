/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import { AnimateSharedLayout, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ImCross } from "react-icons/im";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        },
    };

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
                <Chart options={data.options} series={card.series} type="area" />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    );
}

export default Card;
