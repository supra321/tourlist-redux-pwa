import React from 'react';
const Searchbar=({onSearchChange})=>{
	return(
		<input aria-label='Search Places' className='tc pa2 ma3 ba-1 b--gold bg-light-yellow' type='search' placeholder='Search Destination' onChange={onSearchChange} />
	);
}
export default Searchbar;