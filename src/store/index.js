import {configureStore, createSlice} from '@reduxjs/toolkit'

const movieInitialState = {
    movies: [],
    isLoading: false,
    userTouchedInput: false
}

const movieSlice = createSlice({
    name: 'movie',
    initialState: movieInitialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload
        },
        setLoading(state, action) {
            state.isLoading = action.payload
        },
        setUserTouchedInput(state, action) {
            state.userTouchedInput = action.payload
        }
    }
})

export const movieActions = movieSlice.actions

export const fetchMovies = (inputRef) => {
    return async (dispatch) => {
        dispatch(movieActions.setLoading(true))
        const reponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=576415f17fb97555f63a66608f20aadc&query=${inputRef.current.value}`)
        const data = await reponse.json()
        dispatch(movieActions.setMovies(data.results))
    }
}

const store = configureStore({
	reducer: { movie: movieSlice.reducer }
})

export default store
