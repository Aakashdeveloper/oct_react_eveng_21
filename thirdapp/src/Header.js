import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {
    constructor(){
        super()

        this.state={
            userdata:'',
            uesrname:'',
            imgUrl:''
        }
    }

    handleLogout = ()=>{
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk')
        sessionStorage.removeItem('userdata')
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userdata.name ||  sessionStorage.getItem('username') !== null){
            if(this.props.location.search){
                const code =(this.props.location.search).split('=')[1];
                if(code){
                    return(
                        <>
                            <li>
                                <a>
                                    <img src={this.state.imgUrl} style={{height:50,width:50}}/>
                                    Hi {sessionStorage.getItem('username')}
                                </a>
                            </li>
                        </>
                    )
                }
            }else{
                let data = this.state.userdata;
                let outputArray = [data.name,data.email,data.phone,data.role];
                sessionStorage.setItem('userdata',outputArray)
                return(
                   <ul className="nav navbar-nav navbar-right">
                    <li><Link>Hi {outputArray[0]}</Link></li>
                    <li>
                        <button onClick={this.handleLogout}>
                            Logout
                        </button>
                    </li>
                   </ul>
                )
            }
            
            
        }else{
            return(
                <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a>
                </li>
                <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>          
            )
        }
    }
    render(){
        return(
            <>
               <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Developer Restaurant</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/viewBooking">Orders</Link></li>
                            </ul>
                            {this.conditionalHeader()}
                        </div>
                    </div>
                </nav>
                <hr/>
            </>
        )
    }
    
    componentDidMount(){
        if(this.props.location.search){
            const code =(this.props.location.search).split('=')[1];
            if(code){
                let requestedData={
                    code:code
                }
                fetch(`http://localhost:9900/oauth`,{
                    method:'POST',
                    headers:{
                        'accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    let user = data.name
                    let img = data.avatar_url;
                    sessionStorage.setItem('username',user);
                    this.setState({uesrname:user, imgUrl:img})
                })
            }

        }else{
            fetch(url,{
                method: 'GET',
                headers: {
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userdata:data
                })
            })
        }
        
    }
}

export default withRouter(Header)