import React,{Component} from 'react';
class MenuDisplay extends Component{
    orderId = [];

    addItem = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        this.orderId.splice(this.orderId.indexOf(id),1)
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => { 
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item},&nbsp;&nbsp;</b>
                )
            })
        }
    }
    renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item) =>{
                return(
                    <div key={item.menu_id}>
                        <div className="col-md-7 items">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} style={{height:80,width:80}}
                            alt={item.menu_name}/>
                            &nbsp;&nbsp; {item.menu_name} - Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={() => {this.addItem(item.menu_id)}}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <button className="btn btn-danger" onClick={() => {this.removeOrder(item.menu_id)}}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orderId)} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDisplay;