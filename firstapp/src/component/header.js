import React,{Component, Fragment} from 'react';
import './header.css';

class Header extends Component {
    constructor(){
        super()
        
        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header;