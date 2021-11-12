import React, {Component} from 'react';
import QuickDisplay from './QuickDisplay';

const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            QuickData:''
        }
    }
    render(){
        return(
            <div id="QuickSearch">
                <span id="QuickHeading">
                    Quick Searches
                </span>
                <span id="QuickSubHeading">
                    Discover Hotels By Type
                </span>
                <QuickDisplay quickData={this.state.QuickData}/>
            </div>
        )
    }

    //api call 
    componentDidMount(){
        fetch(url,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({QuickData:data})
        })
    }
}

export default QuickSearch;