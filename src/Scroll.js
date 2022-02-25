import React, { Component } from "react";

class Scroll extends Component{

    render(){
       return(
        <div style={{"overflow-y" :'Auto', height : "600px"}}>
            {this.props.children}
        </div>      
        );
        
    }
}
export default Scroll;