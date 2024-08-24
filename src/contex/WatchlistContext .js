import React, { createContext, useState } from 'react';

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeFromWatchlist = (movieId) => {
    setWatchlist(watchlist.filter(movie => movie.id !== movieId));
  };

  const isMovieInWatchlist = (movieId) => {
    return watchlist.some(movie => movie.id === movieId);
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isMovieInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
