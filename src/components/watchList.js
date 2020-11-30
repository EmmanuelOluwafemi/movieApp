import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

// Config file import
import {
    IMAGE_BASE_URL, 
    POSTER_SIZE, 
} from '../config';

// import Components
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';

import NoImage from './images/no_image.jpg';



const WatchList = () => {
    const {watchList} = useContext(GlobalContext);
    return (
        <div>
            <Grid header='WatchList'>
                {watchList.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                        movieId = {movie.id}
                        movieName = {movie.original_title}
                        movie = {movie}
                    />
                ))}

            </Grid>
        </div>
    )
    
};

export default WatchList;