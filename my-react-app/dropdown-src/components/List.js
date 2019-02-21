import React, { Component } from 'react';


export class List extends Component {
  
    constructor(props){
        super(props);
        console.log(this.props);
    }
  render() {
    return (
            <a className="dropdown-item" href="#" onClick={this.props.handleTitleChange}>{this.props.country}</a>
    );
  }
}

