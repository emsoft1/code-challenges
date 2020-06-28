import React from "react";
import axios from "./axios";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Mainpage from "./mainpage";
import Liquidity from "./liquidity";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        const { data } = await axios.get("/ticker/100.json");

        await this.setState({
            maindata: data.data,
        });
        console.log("test in app", this.state.maindata[0].id);
    }
    async handlechange(e) {
        await this.setState({
            value: e.target.value,
        });

        const { data } = await axios.get(`/ticker/${this.state.value}.json`);

        await this.setState({
            maindata: data.data,
        });
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <select
                        value={this.state.selectedOption}
                        onChange={(e) => this.handlechange(e)}
                    >
                        <option value="100">all(100)</option>
                        <option value="10">10 item</option>
                        <option value="50">50 item</option>
                    </select>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <Mainpage mainprops={this.state.maindata} />
                        )}
                    ></Route>
                    <Route
                        path="/liquidity"
                        render={() => (
                            <Liquidity mainprops={this.state.maindata} />
                        )}
                    ></Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
