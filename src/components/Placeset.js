import React from 'react';
import Place from './Place';
const Placeset=({Placelists})=>{
	return(
		<div>
		{
			Placelists.map((user,i)=>{
				return <Place key={Placelists[i].id} destination={Placelists[i].destination} state={Placelists[i].state}pakage={Placelists[i].pakage} pdf={Placelists[i].pdf} image={Placelists[i].image} />
			})
		}
		</div> 
	);
}
export default Placeset;