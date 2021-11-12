import React,{Component} from 'react';
import axios from 'axios';
import './details.css';

const url = "https://zomatoajulypi.herokuapp.com/details"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state
        return(
            <>
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h2>{this.state.details.restaurant_name}</h2>
                    </div>
                    <div className="panel-body">
                    <h2>{details.restaurant_name}</h2>
                    </div>
                </div>
            </div>
            </>
        )
    }

    //api call 
    async componentDidMount(){
        const restId = this.props.match.params.restid;
        let response = await axios.get(`${url}/${restId}`)
        this.setState({details:response.data[0]})
    }
}

export default Details