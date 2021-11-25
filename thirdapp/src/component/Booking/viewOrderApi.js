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
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data = {
                    "status":qparams.split('&')[0].split('=')[1],
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1],
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
        }
        axios.get(`${url}`).then((res) => {this.setState({booking:res.data})} )
    }
}

export default ViewBooking;