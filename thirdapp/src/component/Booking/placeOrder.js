import React,{Component} from 'react';
import './placeOrder.css'

const menuUrl = "http://zomatoajulypi.herokuapp.com/menuItem";
const postUrl = "http://localhost:3214/booking";


class PlaceBooking extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Aakash',
            phone:'76767757567',
            email:'a@gmail.com',
            cost:0,
            address:'Hno12',
            details:''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    renderItems = (data) => {
        if(data){
            return data.map((item,index) => {
                return(
                    <div className="orderItems" key={index}>
                        <img src={item.img} alt={item.name}/>
                        <h3>{item.name}</h3>
                    </div>
                )
            })
        }else{
            return(
                <img src="/images/loader.gif" alt="loader"/>
            )
        }
    }

    handleSubmit = () => {
        var obj = this.state
        obj.details = sessionStorage.getItem('menu')
        fetch(postUrl,{
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(console.log('payment'))
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>
                            Your Order From {this.props.match.params.restName}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name" 
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email" 
                                        value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone" 
                                        value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address" 
                                        value={this.state.address} onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.renderItems(this.state.details)}
                        <input type="hidden" name="cost" value={this.state.cost}/>
                        <input type="hidden" name="id" value={this.state.id}/>
                        <input type="hidden" name="hotel_name" value={this.props.match.params.restName}/>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total cost is Rs.{this.state.cost}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}
                        type="submit">
                            Checkout
                        </button>
                        </form>
                    </div>
                </div>
            </div>
           
        )
    }

    componentDidMount(){
        var menuItem = sessionStorage.getItem('menu')
        var orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(menuUrl,{
            method:'POST',
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            var menuDetails = []
            var TotalPrice = 0
            data.map((item) => {
                var myObj = {}
                TotalPrice = TotalPrice +parseInt(item.menu_price)
                myObj.name = item.menu_name
                myObj.img = item.menu_image
                menuDetails.push(myObj)
                return 'ok'
            })
            this.setState({cost:TotalPrice,details:menuDetails})
        })
    }
}

export default PlaceBooking;