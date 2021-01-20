import React from "react";
import {Route, Switch} from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import Label from "./components/label/Label";
import Header from "./components/header/Header";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Header/>
                    <Dashboard/>
                </Route>
                <Route path="/label"><Label/></Route>
                <Route><h1>Page not found</h1></Route>
            </Switch>
        </>
    )
}

export default Routes