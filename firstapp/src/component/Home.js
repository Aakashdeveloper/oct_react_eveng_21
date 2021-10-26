import React,{Component} from 'react';
import Header from './header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json'

class Home extends Component {
    constructor(){
        super()

        this.state={
            products:JSON
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <br/>
                <ProductDisplay prodData={this.state.products}/>
                <Footer year="2021" month="Oct"/>
            </React.Fragment>
        )
    }
}

export default Home;