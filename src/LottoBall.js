import React, {Component} from "react"
import './LottoBall.css';

class LottoBall extends Component{
  render(){
    return(
      <div className="LottoBall">
        {this.props.lotto_ball_num}
      </div>
    );
  }
}

export default LottoBall;
