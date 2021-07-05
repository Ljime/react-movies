import React, { useState } from 'react'

const MovieContext = React.createContext({
    movieList: [],
    isLoading: false,
    userTouchedInput: false,
    userTouchedInputHandler: () => {},
    addMovies: () => {},
    updateLoading: () => {}
})

export const MovieContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userTouchedInput, setUserTouchedInput] = useState(false)
    const [movieList, setMovieList] = useState([])

    const addMovieHandler = (movies) => {
        setMovieList(movies)
    }

    const isLoadingHandler = (argument) => {
        setIsLoading(argument)
    }

    const userTouchedInputHandler = (argument) => {
        setUserTouchedInput(argument)
    }

    return (
        <MovieContext.Provider value={{movieList: movieList, isLoading: isLoading, addMovies: addMovieHandler, updateLoading: isLoadingHandler, userTouchedInput: userTouchedInput, userTouchedInputHandler: userTouchedInputHandler}}>
            {props.children}
        </MovieContext.Provider>
    )
}
  
export default MovieContext