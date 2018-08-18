import _ from 'lodash';

import {
        FETCH_NOTES,
        CREATE_NOTE,
        DELETE_NOTE
        } from '../actions/Types';

const initialState = {
    notes:[]
}


export default function(state = initialState, action){
    switch(action.type){
        case FETCH_NOTES:
            return action.payload;
        
        case CREATE_NOTE:
            return{
                ...state,
                ...action.payload
            }
        
        case DELETE_NOTE:   
            return _.omit(state, action.payload);
        default:  
        return state;      
    }
}