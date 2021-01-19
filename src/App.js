import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import SearchCarts from "./components/filter-carts/SearchCarts";


function App() {
    return (
        <>
            <Header/>
            <SearchCarts />
            <Dashboard/>
        </>
    );
}

export default App;
