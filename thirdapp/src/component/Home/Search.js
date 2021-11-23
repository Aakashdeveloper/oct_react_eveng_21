import React, {Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
class Search extends Component {
    constructor(){
        super()
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        //console.log(event.target.value)
        fetch(`${restUrl}${event.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    handleHotel = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render(){
        console.log(">>>>search",this.props)
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find The Best Restaurant
                </div>
                <div id="dropdown">
                    <select id="city" onChange={this.handleCity}>
                        <option>----Select Location---- </option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restaurants" onChange={this.handleHotel}>
                        <option>----Select Restaurant---- </option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }

    /// api call on page load 
    componentDidMount(){
        // calling api
        fetch(cityUrl,{method:'GET'})
        // return the promise
        .then((res) => res.json())
        //.then((res) => {console.log(res.json())})
        // return data
        .then((data) => {this.setState({location:data})})
    }
}

export default withRouter(Search);