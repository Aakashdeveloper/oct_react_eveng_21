import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom'

const QuickDisplay =(props) => {

    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image}/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div class="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            <div id="mainTileContainer">
                {listMeal(props)}
            </div>
        </div>
    )
}

export default QuickDisplay