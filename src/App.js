import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
//import Home from './Home';
//import Talker from './Talker';
//import Nav from './Nav';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

      this.state={
        newItem:"",
        list:[]
      }
  }
  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem(){
    //create item
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copy current item list
    const list = [...this.state.list];

    //add item
    list.push(newItem);

    //update
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});

  }
  render () {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br/>
          <input
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
            Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                  X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      
      </div>
    );
  }
}

export default App;
