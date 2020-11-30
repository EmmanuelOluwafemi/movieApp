import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable, movie }) => {

    const {addMoviesToWatchList, removeMovieFromWatchList , watchList} = useContext(GlobalContext);

    let storedMovie = clickable ? watchList.find(o => o.id === movie.id): '';

    const movieDisabled = storedMovie ? true : false;

    return (
        <StyledMovieThumb>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <img className="clickable" src={image} alt="movieThumb" />
                </Link>
            ): 
            (
                <>
                <img src={image} alt="movieThumb" />
                
                </>
            )}
            {clickable && 
            <button className="love">
                {!movieDisabled && <i onClick={() => addMoviesToWatchList(movie)} className='fas fa-heart'></i>}
                {movieDisabled && <i onClick={() => removeMovieFromWatchList(movie.id)} className='fas fa-heart red'></i>}
            </button>
            }
            
        </StyledMovieThumb>
    )
}
    
export default MovieThumb;