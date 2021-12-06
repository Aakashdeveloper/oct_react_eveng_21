import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/listing/listing';
import RestDetails from './component/details/restDetails';
import PlaceOrder from './component/Booking/placeOrder';
import ViewOrder from './component/Booking/viewOrderApi';
import Login from './component/login/Login';
import Register from './component/login/Register'

const Routing = () => {
    return(
        <BrowserRouter forceRefresh={true}>
            <Header/>
                <Route exact path="/" component={Home}/> 
                <Route path="/list/:mealid" component={Listing}/> 
                <Route path="/details/:restid" component={RestDetails}/> 
                <Route path="/placeOrder/:restName" component={PlaceOrder}/> 
                <Route path="/viewBooking" component={ViewOrder}/> 
                <Route path="/login" component={Login}/> 
                <Route path="/register" component={Register}/> 
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;