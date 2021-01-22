import React from "react";
import {Route, Switch} from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import Label from "./components/label/Label";
import Header from "./components/header/Header";
import PageNotFound from "./components/page-not-found/PageNotFound";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Header/>
                    <Dashboard/>
                </Route>
                <Route path="/label"><Label/></Route>
                <Route><PageNotFound /></Route>
            </Switch>
        </div>
    )
}

export default Routes