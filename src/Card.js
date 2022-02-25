import { Component, Fragment } from "react";
import React from 'react';
import 'tachyons';


class Card extends Component{
    constructor(props){
        super(props);
    }
   render(){
    // console.log("Card "+this.state.robots[0].name);
    //    const elements=<div className="tc bg-light-yellow dib br3 pa3 ma2 grow shadow-5">
    //         <img src={`https://robohash.org/${this.props.robots[0].name}`}/>
    //         <h3>{this.props.robots[0].name}</h3>
    //         <h4>{this.props.robots[0].email}</h4>
    //     </div>

        // this.props.robots.map(rob=> console.log(rob.name)
        
        const elements2=this.props.robots.map(rob=> 
            <div className="tc bg-light-yellow dib br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${rob.name}`}/>
            <h3>{rob.name}</h3>
            <h4>{rob.email}</h4>
        </div>
        
        );
        console.log(elements2);    
        return(
            <div style={{"margin-left" : "10px"}}>
                {elements2}
            </div>  
        );
    }
   }


export default Card;