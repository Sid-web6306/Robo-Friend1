import React, { Component } from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


// STATE (manipulation between siblings) ::REMEMBER

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [],
			Searchfield: ''

		}
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

	onSearchChange =(event)=>{
		this.setState({ Searchfield: event.target.value})
	}

	render() {	
		const { robots, Searchfield } = this.state;
		const filterRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
		})
		return !robots.length ?
			<h1 className='tc'>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<Search searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filterRobots}/>
						</ErrorBoundry>
					</Scroll>
			    </div>
			);
	}
}
export default App;