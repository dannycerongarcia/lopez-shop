import { act } from "react-dom/test-utils";

// initial state
const INITAL_STATE = {
    page_number:0,
};

// listening function
const pageReducer = (state = INITAL_STATE, action) =>{
    switch(action.type){

        case 'SET_PAGE':
            return{
                ...state,
                page_number: action.page_number,
            };
        default: 
            return state;
    }
};

export default pageReducer;