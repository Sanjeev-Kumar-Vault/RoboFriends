import React, { Component, Fragment } from "react";
import Card from "./Card";

export const Search = ({searchchange})=>{
    return(
        <div className="tc">
            <input className="pa3 ba b--green bg-lightest-blue " placeholder="search name" onChange={searchchange}></input>
        </div>  
    );
}