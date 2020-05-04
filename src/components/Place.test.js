import React from 'react';
import {shallow} from 'enzyme';
import Place from './Place';

it('Expect to render Place Component',()=>{
	expect(shallow(<Place />)).toMatchSnapshot();
})
