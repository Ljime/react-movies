import LoadingCard from '../UI/loadingCard'
import classes from './body.module.css'
import MovieCard from '../UI/movieCard'
import { useSelector, useDispatch } from 'react-redux'
import { movieActions } from '../store'
import { useEffect } from 'react'

const Body = (props) => {

    const dispatch = useDispatch()
    const movies = useSelector((state) => state.movie.movies)
    const isLoading = useSelector((state) => state.movie.isLoading)

    const dummy_movies = [1,2,3,4,5,6,7,8,9,10]
    const loadingCards = dummy_movies.map(() => {
        return <LoadingCard key={Math.random()}></LoadingCard>
    })

    let cards = '';
    if(movies) {
        cards = movies.map((movie) => {
            if(!movie.poster_path) {
                return null
            }
            return  <MovieCard key={movie.id} title={movie.title} imgUrl={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></MovieCard>
        }) 
        dispatch(movieActions.setLoading(false))
    }



    if(cards.length===0 ) {
        cards = <h1 className={classes.error}>No Movies Found</h1>
    }

    return (
        <div className={classes.bodyContainer}>
            {isLoading ? loadingCards : cards}
        </div>
    )
}

export default Body