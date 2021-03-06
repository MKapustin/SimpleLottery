import React, {Component} from "react"
import LottoBall from "./LottoBall"
import './Lottery.css';

class Lottery extends Component{
    static defaultProps = {
        lottery_title: "Lotto",
        lottery_balls_amount: 5,
        lottery_ball_min_possible_value: 1,
        lottery_ball_max_possible_value: 9
    }

  constructor(props){
      super(props);
      this.state={
        lottery_balls: Array.from({length: this.props.lottery_balls_amount})
      }
      this.handleClick = this.handleClick.bind(this);
  }

  generateLottoBalls(){
    let lottery_balls_amount = this.props.lottery_balls_amount
    let lottery_ball_min_possible_value = this.props.lottery_ball_min_possible_value
    let lottery_ball_max_possible_value = this.props.lottery_ball_max_possible_value
    let new_lottery_ball_numbers = Array.from({length: lottery_balls_amount}, () => Math.floor(Math.random() * (lottery_ball_max_possible_value+1) + lottery_ball_min_possible_value));
    this.setState({lottery_balls: new_lottery_ball_numbers})
  }

  handleClick(){
    this.generateLottoBalls()
  }

  render(){
    return(
      <div className="Lottery">
        <h1>{this.props.lottery_title}</h1>
        <div className="Lottery-balls-line">{this.state.lottery_balls.map(n => <LottoBall lotto_ball_num={n} />)}</div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
