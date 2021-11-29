import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './Component/Login';
import Register from './Component/Register';
import Profile from './Component/Profile';
import Users from './Component/UserApi';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Login}/> 
                <Route path="/register" component={Register}/> 
                <Route path="/profile" component={Profile}/> 
                <Route path="/users" component={Users}/> 
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;