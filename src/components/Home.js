import React, { useState } from 'react';

// Config file import
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
    IMAGE_BASE_URL, 
    POSTER_SIZE, 
    BACKDROP_SIZE
} from '../config'

// import Components
import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [{ 
        state: { movies, currentPage, totalPages, heroImage }, 
        error, 
        loading 
        }, 
        fetchMovies
    ] = useHomeFetch(searchTerm);

    const searchMovies = search => {
        const endPoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

        setSearchTerm(search);

        fetchMovies(endPoint);

    }

    const loadMoreMovies = () => {
        const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popuplarEndPoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

        const endPoint = searchTerm ? searchEndPoint : popuplarEndPoint;

        fetchMovies(endPoint);
    }

    if(error) return <div>Something went wrong ....</div>
    if(!movies[0]) return <Spinner />
    return(
        <>
            { !searchTerm && (
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title = {heroImage.original_title}
                    text = {heroImage.overview}
                />
            )}
            <SearchBar callback={searchMovies} />
            <Grid header={searchTerm ? 'Search Term' : 'Popular Movies'}>
                {movies.map(movie => (
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
            { loading && <Spinner /> }
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
            )}
            
        </>
    )
}

export default Home;