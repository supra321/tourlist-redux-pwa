import {CHANGE_SEARCH_FIELD_STATE,
	CHANGE_SEARCH_FIELD_DESTINATION,
	REQUEST_PLACELIST_PENDING,
	REQUEST_PLACELIST_SUCCESS,
	REQUEST_PLACELIST_FAILED} from './constants';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchPlace',()=>{
	const initialStateSearch={
		searchBarDestinationState:'',
		searchBarStateState:''
	}

	it('Should return initial state',()=>{
		expect(reducers.searchPlace(undefined,{}))
		.toEqual(initialStateSearch);
	})

	it('Should handle CHANGE_SEARCH_FIELD_STATE',()=>{
		expect(reducers.searchPlace(initialStateSearch,actions.searchBarState('Jammu and Kashmir')))
		.toEqual({searchBarDestinationState:'',searchBarStateState:'Jammu and Kashmir'});
	})

	it('Should handle CHANGE_SEARCH_FIELD_DESTINATION',()=>{
		expect(reducers.searchPlace(initialStateSearch,actions.searchBarDestination('Srinagar')))
		.toEqual({searchBarDestinationState:'Srinagar',searchBarStateState:''});
	})
})

describe('placelist',()=>{
	const initialStatePlacelist={
		placelistState:[],
		isPending:true,
		error:''
	}

	it('Should return initial state',()=>{
		expect(reducers.placelist(undefined,{}))
		.toEqual(initialStatePlacelist);
	})

	it('Should handle REQUEST_PLACELIST_PENDING',()=>{
		expect(reducers.placelist(initialStatePlacelist,{type: REQUEST_PLACELIST_PENDING}))
		.toEqual({placelistState:[],isPending:true,error:''});
	})

	it('Should handle REQUEST_PLACELIST_SUCCESS',()=>{
		const mockPayload=[{
			email: "Sincere@april.biz",
			id: 1,
			name: "Leanne Graham"
		}]
		expect(reducers.placelist(initialStatePlacelist,{type: REQUEST_PLACELIST_SUCCESS,payload: mockPayload}))
		.toEqual({placelistState:mockPayload,isPending:false,error:''});
	})

	it('Should handle REQUEST_PLACELIST_FAILED',()=>{
		expect(reducers.placelist(initialStatePlacelist,{type: REQUEST_PLACELIST_FAILED,payload: 'Error'}))
		.toEqual({placelistState:[],isPending:false,error:'Error'});
	})
})
