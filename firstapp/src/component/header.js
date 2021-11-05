import React,{Component, Fragment} from 'react';
import './header.css';

class Header extends Component {
    constructor(){
        super()
        
        this.state={
            title:'React App',
            keyword:'User Text Here'
        }

        console.log("inside constructor")
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        // console.log("inside handleChange")
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }
    
    handleChange1 = (event) => {
        this.props.userDescription(event.target.value)
    }

    render(){
        console.log("inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <input onChange={this.handleChange1}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header;