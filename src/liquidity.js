import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Bubble } from "react-chartjs-2";

export default function Liquidity(props) {
    if (props.mainprops) {
        var x = props.mainprops || [];

        var char = {};
        char.datasets = x.map((x) => {
            var data = {
                label: x.name,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#aaaaaa",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    {
                        x: x.quote.USD.market_cap,
                        y: x.quote.USD.volume_24h,
                        r: x.quote.USD.percent_change_24h,
                    },
                ],
            };
            return data;
        });
    }

    var chartdata = char;

    if (props.mainprops) {
        return (
            <div>
                <h1>
                    {" "}
                    <Link to="/">main</Link>
                </h1>
                <Bubble data={chartdata} width={100} height={50} options={{}} />
            </div>
        );
    } else {
        return <div>waiting for the data</div>;
    }
}
