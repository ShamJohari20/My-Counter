import React from "react";
import "./App.css"


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      count:0
    }
  }

  play = () =>{
      // console.log("play");
      this.setState({
        count:this.state.count + 1
      })
  }

  render(){
    return(
      <>
        <div>
          <div className="main">
              <h1>Play With My Counter</h1>
              <div className="count">{this.state.count}</div>
              <button onClick={this.play}>Play</button>
          </div>
        </div>
      </>
    );
  }
}

export default App