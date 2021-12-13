import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Header from './header';
import Footer from './footer';
//import NewsDetails from '../container/NewsDetails';
//<Route path="/details/:id" component={NewsDetails}/>


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing