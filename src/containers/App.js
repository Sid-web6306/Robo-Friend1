import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField,requestRobots} from '../actions';
const mapStateToProps= (state) =>{
	return{
		searchField:state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}


const mapDispatchToProps = (dispatch)=>{
	return {onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
			onRequestRobots:()=> dispatch(requestRobots())
	
	
	
	}
}
// STATE (manipulation between siblings) ::REMEMBER

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
  	}

	render() {	
		const {searchField,robots,isPending,onSearchChange} = this.props;
		const filterRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1 className='tc'>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<Search searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filterRobots}/>
						</ErrorBoundry>
					</Scroll>
			    </div>
			);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);