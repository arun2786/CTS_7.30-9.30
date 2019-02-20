import React, { Component } from 'react';


export class Button extends Component {
  
    constructor(props){
        super(props);
        console.log(this.props);
    }
  render() {
    // let colorCss = "btn btn-"+this.props+" dropdown-toggle";
    let colorCss = `btn btn-${this.props.color} dropdown-toggle`;
    return (
          <button className={colorCss} onClick={this.toggle} onClick={this.props.doToggle} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.title || "Select Your Country"}
          </button>
    );
  }
}

