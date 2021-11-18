import React,{Component} from 'react';

const menuUrl = "http://zomatoajulypi.herokuapp.com/menuItem"

class PlaceBooking extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'',
            phone:'',
            email:'',
            cost:0,
            details:''
        }
    }
    render(){
        return(
            <>
             <h1>Place Booking</h1>
             <h3>{this.state.cost}</h3>
            </>
           
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
            var TotalPrice = 0
            data.map((item) => {
                TotalPrice = TotalPrice +parseInt(item.menu_price)
                return 'ok'
            })
            var menuDetails = []
            var myObj = {}
            data.map((item) => {
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