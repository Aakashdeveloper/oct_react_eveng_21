import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" component={Home}/> 
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;