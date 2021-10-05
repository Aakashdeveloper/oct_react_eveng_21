import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>My React APP</h1>
            <h2>Let`s Start</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))



// var React = require('react');
/*
function App(){
    return(
        <h1>React APP</h1>
    )
}
*/