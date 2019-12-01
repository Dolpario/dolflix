import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Screens/Home";
import Detail from "../Screens/Detail";
import Search from "../Screens/Search";
import TV from "../Screens/TV";
import Header from "./Header"

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/search" exact component={Search} />
                <Route path="/tv" exact component={TV} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);

