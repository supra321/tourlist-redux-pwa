import React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

it('Expect to render ErrorBoundary Component',()=>{
	expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})

it('Sets the ErrorState to true',()=>{
	const wrapper=shallow(<ErrorBoundary />);
	/*wrapper.find('[props]').simulate('event');*/
	expect(wrapper.state()).toEqual({ErrorState:false});
	/*expect(wrapper.props().propName).toEqual({propValue});*/
})
