import React, { Component } from "react";

export default class TotalCalorie extends Component{
  render(){
    return(
      <div style={{display:'flex',  paddingLeft:'55px'}}>
        
        <h3>
          {`${this.props.count}  ${this.props.name} = ${this.props.calorie} calories`}</h3>
      </div>
    )
  }
}