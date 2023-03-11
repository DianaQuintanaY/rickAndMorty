import {ADD_FAVORITES_CHARACTER, DELETE_FAVORITES_CHARACTER, FILTER, ORDER} from './action-type';
const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITES_CHARACTER :
          return {...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload
          };
        case DELETE_FAVORITES_CHARACTER :
            return  {...state, 
                    allCharacters: action.payload,
                    myFavorites: action.payload
                };
        case FILTER :
            const allCharsFiltered =  state.allCharacters.filter((item) => item.gender === action.payload);
            return  {...state, myFavorites: allCharsFiltered };
        case ORDER :
            return  {...state, 
              myFavorites: action.payload === 'Ascendente'
              ? state.allCharacters.sort((a,b) => a.id - b.id) 
              : state.allCharacters.sort((a,b) => b.id - a.id)
            };
        default:
          return {...state}

    }

};

export default reducer;