import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "../components/Home/Home.jsx";
import Layout from "../components/Layout/Layout.jsx";
import AddTravel from "../components/AddTravel/AddTravel.jsx";

export default () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact={ true } path="/">
                        <Home/>
                    </Route>
                    <Route exact={ true } path="/nuevo-registro">
                        <AddTravel/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}