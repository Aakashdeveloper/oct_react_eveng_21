import React,{Component} from 'react';

const loginrUrl = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'a@gmail.com',
            password:'',
            message:''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }


    handleSubmit = () => {
        fetch(loginrUrl,{
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message: data.token})
            }else{
                sessionStorage.setItem('ltk',data.token);
                this.props.history.push('/profile')
            }
        })
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>
                           Login
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email" 
                                        value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" name="password" 
                                        value={this.state.password} onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Login;