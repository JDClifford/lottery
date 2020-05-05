import React, { Component } from 'react';
import './LotteryBall.css';

class LotteryBall extends Component {
	render() {
		return (
			<div className='ball'>
				<h2>{this.props.ballNum}</h2>
			</div>
		);
	}
}

export default LotteryBall;
