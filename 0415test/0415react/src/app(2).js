import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date:new Date()};
	}
	componentDidMount(){
		this.timerID=setInterval(
		() => this.setState({date:new Date()}),1000);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	/***tick(){
		this.setState({data:new Date()})
	}***/
	render(){
		return(
		<div>
			<h1>This is class components!</h1>
			<h2>it is {this.state.date.toLocaleTimeString()}</h2>
		</div>
		);
	}
	
}

/***function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}***/
export default Clock;




