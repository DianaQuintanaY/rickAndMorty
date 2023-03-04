import {ADD_FAVORITES_CHARACTER, DELETE_FAVORITES_CHARACTER} from './action-type';

export const addFavorites = (character) => {
    return { 
        type: ADD_FAVORITES_CHARACTER,
        payload: character
    }
};
export const deleteFavorites = (id) => {
    return { 
        type: DELETE_FAVORITES_CHARACTER,
        payload: id
    }
};