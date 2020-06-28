import React from "react";

import { Link } from "react-router-dom";
export default function Mainpage(props) {
    console.log("Profile -> props", props);
    if (props.mainprops) {
        var x = props.mainprops || [];
    }
    if (props.mainprops) {
        return (
            <div className="profilecenter">
                <h1>
                    <Link to="/liquidity">Liquidity</Link>
                </h1>
                <div className="crypto">
                    <div>rank</div> <div>name</div>
                    <div> price </div>
                    <div> percent change 24h </div>
                    <div>market cap</div>
                    <div>volume 24h</div>
                </div>
                <div>
                    {x.map((x) => (
                        <div key={x.id} className="crypto">
                            <div>{x.cmc_rank}</div> <div>{x.name} </div>
                            <div> {x.quote.USD.price} </div>
                            <div> {x.quote.USD.percent_change_24h} </div>
                            <div>{x.quote.USD.market_cap}</div>
                            <div>{x.quote.USD.volume_24h}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div className="profilecenter">waiting for data</div>;
    }
}
