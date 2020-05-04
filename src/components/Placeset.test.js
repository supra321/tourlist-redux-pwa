import React from 'react';
import {shallow} from 'enzyme';
import Placeset from './Placeset';

import Srinagar_Image from '../media/images/SRINAGAR.jpg';
import Srinagar_PDF from '../media/pdf/Srinagar.pdf';

it('Expect to render Placeset Component',()=>{
	const mockPlaces=[
		{
			id: 1,
		    destination: 'Srinagar',
		    state: 'Jammu and Kashmir',
		    pakage: '18 Tours & Activity',
		    pdf: Srinagar_PDF,
		    image: Srinagar_Image
		}
	]
	expect(shallow(<Placeset Placelists={mockPlaces}/>)).toMatchSnapshot();
})
