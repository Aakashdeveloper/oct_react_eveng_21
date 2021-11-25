import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter"

class CuisineFilter extends Component{
    cusinieFilter = (event) => {
        let mealId = this.props.mealId;
        let cusinieId = event.target.value;
        let cusinieUrl;
        if(cusinieId === ""){
            cusinieUrl=`${url}/${mealId}`
        }else{
            cusinieUrl=`${url}/${mealId}?cuisine=${cusinieId}`
        }
        axios.get(cusinieUrl)
            .then((response) => {this.props.restPerCuisine(response.data)})
    }
    render(){
        return(
            <>
                <center>Cuisine Filter</center>
                <div style={{marginLeft:'14%'}} onChange={this.cusinieFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div>
                <hr/>
            </>
        )
    }
}

export default CuisineFilter;