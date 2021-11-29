import React,{Component} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";

class UserApi extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }
        return(
           <>
            <UserDisplay userdata={this.state.users}/>
           </>
        )
    }

    // api call 
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({users:res.data})} )
    }
}

export default UserApi;