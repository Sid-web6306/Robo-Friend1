import React from 'react'

const Search = (props) =>
{
	return (
		<div className='pa2' >
		<input 
			className='pa3 ba b--green bg-lightest-blue'
			type="search" placeholder="search robots"
			onChange={props.searchChange}/>
		</div>
	);
}
export default Search;