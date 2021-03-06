import React, {Component} from "react"
import './App.css';
import Lottery from "./Lottery";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Lottery lottery_title="Lotto" lottery_balls_amount={7} lottery_ball_min_possible_value={1} lottery_ball_max_possible_value={9}/>
        <Lottery lottery_title="Mini Lotto" lottery_balls_amount={4} lottery_ball_min_possible_value={1} lottery_ball_max_possible_value={9}/>
      </div>
    );
  }
}

export default App;
