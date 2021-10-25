import React,{Component, Fragment} from 'react';
import './header.css';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>User Text Here</div>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header;