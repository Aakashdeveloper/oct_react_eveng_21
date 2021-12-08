import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const stockData = [
  {
      id: 1,
      name: 'TCS'
          
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
]

const userData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
]

var Stocks = Hoc(StockList,stockData)
var Users = Hoc(UserList,userData)

class App extends Component {
  
  render() {
    return (
      <div>
        <Stocks/>
        <Users/>
      </div>
    )
  }
}

export default App;