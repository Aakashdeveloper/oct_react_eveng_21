import React,{Component} from 'react';
import Header from './header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json'

class Home extends Component {
    constructor(){
        super()

        this.state={
            products:JSON,
            filtered:JSON,
            secondFilter:JSON
        }
    }

    /*
    var a = [5,4,8,2,9,4,6,3,4]
    a.filter((data) => { return data>5})
    */
    filterProduct=(keyword)=>{
        var output = this.state.products.filter((item) => {
            return (item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })
        this.setState({secondFilter:output,filtered:output})
    }

    filterDescription=(keyword) =>{
        var output = this.state.filtered.filter((item) => {
            return (item.description.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })
        this.setState({secondFilter:output})
    }

    render(){
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterProduct(data)}} userDescription={(data) => {this.filterDescription(data)}}/>
                <br/>
                <ProductDisplay prodData={this.state.secondFilter}/>
                <Footer year="2021" month="Oct"/>
            </React.Fragment>
        )
    }
}

export default Home;