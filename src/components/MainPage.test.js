import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';

import Srinagar_Image from '../media/images/SRINAGAR.jpg';
import Srinagar_PDF from '../media/pdf/Srinagar.pdf';

let wrapper;

beforeEach(()=>{
	const mockProps={
		onFetchPlacelist: jest.fn(),
		placelists: [],
		searchBarDestination: '',
		searchBarState: '',
		isPending: false
	}
	wrapper=shallow(<MainPage {...mockProps}/>)
})

it('Expect to render MainPage Component',()=>{
	expect(wrapper).toMatchSnapshot();
})

it('Filters Places Correctly',()=>{
	const mockProps2={
		onFetchPlacelist: jest.fn(),
		placelists: [],
		searchBarDestination: 'Srinagar',
		searchBarState: 'Jammu and Kashmir',
		isPending: false
	}
	const wrapper2=shallow(<MainPage {...mockProps2}/>)
	expect(wrapper2.instance()
		.filteredplaces([
		{
			id: 1,
		    destination: 'Srinagar',
		    state: 'Jammu and Kashmir',
		    pakage: '18 Tours & Activity',
		    pdf: Srinagar_PDF,
		    image: Srinagar_Image
		}
	]))
	.toEqual([
		{
			id: 1,
		    destination: 'Srinagar',
		    state: 'Jammu and Kashmir',
		    pakage: '18 Tours & Activity',
		    pdf: Srinagar_PDF,
		    image: Srinagar_Image
		}
	]);
	expect(wrapper.instance().filteredplaces([])).toEqual([]);
})

it('Filters Places Correctly 2',()=>{
	const mockProps3={
		onFetchPlacelist: jest.fn(),
		placelists: [],
		searchBarDestination: 'Sravasti',
		searchBarState: 'Uttar Pradesh',
		isPending: false
	}
	const wrapper3=shallow(<MainPage {...mockProps3}/>)
	expect(wrapper3.instance()
		.filteredplaces([
		{
			id: 1,
		    destination: 'Srinagar',
		    state: 'Jammu and Kashmir',
		    pakage: '18 Tours & Activity',
		    pdf: Srinagar_PDF,
		    image: Srinagar_Image
		}
	]))
	.toEqual([]);
})
