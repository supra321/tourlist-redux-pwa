import {CHANGE_SEARCH_FIELD_STATE,
	CHANGE_SEARCH_FIELD_DESTINATION,
	REQUEST_PLACELIST_PENDING,
	REQUEST_PLACELIST_SUCCESS,
	REQUEST_PLACELIST_FAILED} from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore=configureMockStore([thunkMiddleware]);

describe('Create an action to CHANGE_SEARCH_FIELD',()=>{
	it('Create an action to CHANGE_SEARCH_FIELD_STATE',()=>{
		const text='Jammu and Kashmir';
		const action={
			type: CHANGE_SEARCH_FIELD_STATE,
			payload: text
		}
		expect(actions.searchBarState(text)).toEqual(action);
	})
	it('Create an action to CHANGE_SEARCH_FIELD_DESTINATION',()=>{
		const text1='Srinagar';
		const action1={
			type: CHANGE_SEARCH_FIELD_DESTINATION,
			payload: text1
		}
		expect(actions.searchBarDestination(text1)).toEqual(action1);
	})
})

it('Handles REQUEST_PLACELIST_PENDING',()=>{
	const store=mockStore();
	store.dispatch(actions.requestPlacelist());
	const action2=store.getActions();
	console.log(action2);
	const expectedAction={
		type: REQUEST_PLACELIST_PENDING
	}
	expect(action2[0]).toEqual(expectedAction);
})
