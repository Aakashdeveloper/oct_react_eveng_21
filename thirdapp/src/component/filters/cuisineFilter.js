import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatoajulypi.herokuapp.com/filter/4?cuisine=1"

class CuisineFilter extends Component{
    render(){
        return(
            <>
                <center>Cuisine Filter</center>
                <div style={{marginLeft:'14%'}}>
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