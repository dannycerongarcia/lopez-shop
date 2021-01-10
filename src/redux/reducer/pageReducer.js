
// initial state
const INITAL_STATE = {
    page_number:0,
    items:[],
};

// listening function
const pageReducer = (state = INITAL_STATE, action) =>{
    switch(action.type){

        case 'SET_PAGE':
            return{
                ...state,
                page_number: action.page_number,
            };
        case 'SET_ITEMS':
            return{
                ...state,
                items: action.items,
            };
        default: 
            return state;
    }
};

export default pageReducer;