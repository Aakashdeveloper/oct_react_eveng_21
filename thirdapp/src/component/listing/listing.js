import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="
class Listing extends Component{
    constructor(props){
        super()

        this.state={
            restList:''
        }
    }

    render(){
        return(
            <div className="row">
                <div id="mainListing">
                     <div id="filter">
                        <center>
                             <h1>Filter</h1>
                        </center>
                    </div>
                    <ListingDisplay restData={this.state.restList}/>
                </div>
            </div>
        )
    }
   //api call 
   componentDidMount(){
       const MealId = this.props.match.params.mealid;
       axios.get(`${url}${MealId}`)
       .then((res) => {this.setState({restList:res.data})})
   }
}

export default Listing