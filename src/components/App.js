import React from 'react';
import {Router} from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import WatchList from './watchList';
import NotFound from './NotFound';

import {GlobalProvider} from '../context/GlobalState';

import {GlobalStyle} from './styles/GlobalStyle';

const App = () => {
    return (
        <GlobalProvider>
            <Header />
            <Router>
                <Home path="/" exact />
                <Movie path="/:movieId" />
                <WatchList path="/watchlist" />
                <NotFound default />
            </Router>
            
            <GlobalStyle />
        </GlobalProvider>
    )
};
    

export default App;
