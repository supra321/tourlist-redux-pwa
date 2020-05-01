import React from 'react';
const Place=({destination,state,pakage,pdf,image})=>{
	return(
		<div className ='bg-light-green dib tc br3 pa3 ma3 shadow-5 grow' >
			<a href={`${pdf}`} className='black-90 no-underline'>
				<img src={`${image}`} alt='' height='180' width='225' />
				<div>
					<p><strong>DESTINATION: </strong>{destination}</p>
					<p><strong>STATE: </strong>{state}</p>
					<p><strong>PAKAGE: </strong>{pakage}</p>
				</div>
			</a>
		</div>
	);
}
export default Place;