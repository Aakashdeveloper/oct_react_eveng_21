import React,{Component} from 'react';
import {connect} from 'react-redux';
import {latestNews,articleNews} from '../action/actionfile';
import LatestDisplay from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';

class Home extends Component{
    // call action 
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestnews}/>
                <ArticleDisplay adata={this.props.datalist.articlenews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article
    }
}

export default connect(mapStateToProps)(Home)