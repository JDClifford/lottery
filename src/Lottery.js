import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {
	static defaultProps = {
		maxNum: 10,
		numOfBalls: 5,
		title: 'Weekly Winners'
	};

	constructor(props) {
		super(props);
		this.state = { ballArray: Array.from({ length: this.props.numOfBalls }) };
		this.generateWinners = this.generateWinners.bind(this);
	}

	generateWinners() {
		let ballArray = [];
		for (let x = 0; x < this.props.numOfBalls; x++) {
			ballArray.push(Math.floor(Math.random() * this.props.maxNum) + 1);
		}
		this.setState({ ballArray: ballArray });
	}

	render() {
		{
			return (
				<div className='Lottery'>
					<h1>{this.props.title}</h1>
					{this.state.ballArray.map((num) => <LotteryBall ballNum={num} />)}
					<div>
						<button onClick={this.generateWinners}>Generate Winners</button>
					</div>
				</div>
			);
		}
	}
}
export default Lottery;
