import React, { Component } from 'react';
import {Button} from './Button';
import {List} from './List';


class Dropdown extends Component {
  state = {
    open: false,
    title: null,
    countries: ["India", "USA", "Japan"]
  }
  toggle = ()=>{
    // this.state.open = !this.state.open;
    this.setState({
      open: !this.state.open
    })
    console.log('trying to toggle', this.state.open)
  }
  handleTitleChange=(e)=>{
    console.log(e.target.innerText);
    this.setState({
      title: e.target.innerText,
      open: false
    })
  }
  render() {
    console.log(this.state);
    let countryList = this.state.countries.map((country, index)=>{
      return <List handleTitleChange={this.handleTitleChange} country={country} key={index} />
    })
    return (
        <div className="dropdown">
          <Button color="success" doToggle={this.toggle} title={this.state.title}/>

          <div className={"dropdown-menu"+(this.state.open? 'show':'')} aria-labelledby="dropdownMenuButton">
            {countryList}
          </div>
        </div>
    );
  }
}

export default Dropdown;
