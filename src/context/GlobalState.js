import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

// initial State
const initialState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : []
}

// create Global Context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }, [state])

    // actions
    const addMoviesToWatchList = movie => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    } 

    const removeMovieFromWatchList = id => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }

    return (
        <GlobalContext.Provider value={{watchList: state.watchList, addMoviesToWatchList, removeMovieFromWatchList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}