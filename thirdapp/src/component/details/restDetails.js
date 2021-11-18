import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay';

const url = "https://zomatoajulypi.herokuapp.com/details";
const menu = "https://zomatoajulypi.herokuapp.com/menu"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

    render(){
        let {details} = this.state
        return(
            <>
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h2>{this.state.details.restaurant_name}</h2>
                    </div>
                    <div className="panel-body">
                        <img src={details.restaurant_thumb} alt={details.restaurant_thumb} className="sliderImage"/>
                        <hr/>
                        <h2>{details.restaurant_name}</h2>
                        <h2>{details.rating_text}</h2>
                        <h2>{details.average_rating} Stars</h2>
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Menu</Tab>
                            </TabList>

                            <TabPanel>
                                <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </TabPanel>
                            <TabPanel>
                                <h2>Contact Number: {details.contact_number}</h2>
                                <h2>Address: {details.address}</h2>
                            </TabPanel>
                            <TabPanel>
                               <h2>Menu</h2>
                               <MenuDisplay menuData={this.state.menuList} 
                               finalOrder={(data) => {this.addToCart(data)}}/>
                            </TabPanel>
                        </Tabs>
                        <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

    //api call 
    async componentDidMount(){
        const restId = this.props.match.params.restid;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        this.setState({details:response.data[0], menuList:menudata.data})
    }
}

export default Details