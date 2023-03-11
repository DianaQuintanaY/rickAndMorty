import {GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL, ADD_FAVORITES_CHARACTER, DELETE_FAVORITES_CHARACTER, FILTER, ORDER} from './action-type';
import axios from "axios";

export const addFavorites = (character) => {
    return  function(dispatch){
            axios
            .post('http://localhost:3001/rickandmorty/fav', character)
            .then((response) => response.data)
            .then(data => dispatch(
                 {
                    type: ADD_FAVORITES_CHARACTER,
                    payload: data
                })
            ).catch(err => console.log(err))
    }

};
export const deleteFavorites = (id) => {

    return function(dispatch){
        axios
        .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        .then((response) => response.data)
        .then(data => dispatch(
            {
                type: DELETE_FAVORITES_CHARACTER,
                payload: data
            }
        ))
    }
};

export const filterCards = (gender) => {
    return { 
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (id) => {
    return { 
        type: ORDER,
        payload: id
    }
};