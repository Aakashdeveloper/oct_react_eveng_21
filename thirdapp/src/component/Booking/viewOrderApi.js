import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './viewOrderDisplay';

const url = "http://localhost:3214/booking";

class ViewBooking extends Component {
    constructor(){
        super()

        this.state={
            booking:''
        }
    }
    render(){
        return(
           <>
            <OrderDisplay bookdata={this.state.booking}/>
           </>
        )
    }

    // api call 
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({booking:res.data})} )
    }
}

export default ViewBooking;