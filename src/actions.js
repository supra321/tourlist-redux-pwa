import {CHANGE_SEARCH_FIELD_STATE,
	CHANGE_SEARCH_FIELD_DESTINATION,
	REQUEST_PLACELIST_PENDING,
	REQUEST_PLACELIST_SUCCESS,
	REQUEST_PLACELIST_FAILED} from './constants';

export const searchBarState=(text)=>{
	return {
		type: CHANGE_SEARCH_FIELD_STATE,
		payload: text
	}
}

export const searchBarDestination=(text)=>{
	return {
		type: CHANGE_SEARCH_FIELD_DESTINATION,
		payload: text
	}
}

export const requestPlacelist=()=>(dispatch)=>{
	dispatch({type: REQUEST_PLACELIST_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
	.then(user=>dispatch({type: REQUEST_PLACELIST_SUCCESS,payload: user}))
	.catch(err=>dispatch({type: REQUEST_PLACELIST_FAILED,payload: err}))
}