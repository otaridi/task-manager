import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <Header/>
                <Dashboard/>
            </div>
        </DndProvider>
    );
}

export default App;
