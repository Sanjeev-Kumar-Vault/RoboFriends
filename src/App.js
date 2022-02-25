import logo from './logo.svg';
import './App.css';
import Card from './Card';
import {Search} from './Search'
import { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Scroll from './Scroll';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      robots:this.props.robots,
    }
  }
  changing=(event)=>{
        const filter=this.props.robots.filter(i=>
            i.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
        // console.log(this.state.robots);    
        this.setState({robots:filter});
        //console.log(this.state.robots);
    }

  render(){
    return (
      <Fragment>
        <h1 className="tc">Robo Friends</h1>
        <Search searchchange={this.changing}/>,
        <Scroll>
          <Card robots={this.state.robots}/>
        </Scroll>
      </Fragment>

    );
  }

}

export default App;
