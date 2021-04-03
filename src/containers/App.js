import React, { useState,useEffect} from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


// STATE (manipulation between siblings) ::REMEMBER


function App(){
	useEffect(()=>{
		    fetch('https://jsonplaceholder.typicode.com/users')
		      .then(response=> response.json())
		      .then(users => setRobots(users));
		  
		
	},[]);
	const [robots,setRobots] = useState([]);
	const [searchField,setSearchField] = useState('');

	const onSearchChange =(event)=>{
		setSearchField(event.target.value);
	}

	console.log(robots,searchField);
	const filterRobots = robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})
	return !robots.length ?
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
export default App;