import {ADD_FAVORITES_CHARACTER, DELETE_FAVORITES_CHARACTER} from './action-type';
const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES_CHARACTER :
          return  {...state, myFavorites: [...state.myFavorites, action.payload] };
        case DELETE_FAVORITES_CHARACTER :
            return  {...state, myFavorites: state.myFavorites.filter((item) => item.id !== action.payload) };
        default:
          return {...state}

    }

};

export default reducer;