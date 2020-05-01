import React from 'react';
const Searchbar1=({onSearchChange})=>{
	return(
		<input className='tc pa2 ma3 ba-1 b--gold bg-light-yellow' type='search' placeholder='Search State' onChange={onSearchChange} />
	);
}
export default Searchbar1;