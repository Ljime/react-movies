import classes from './header.module.css'
import search from '../assets/svgs/SVG/magnifier.svg'
import { useRef } from 'react'
import { fetchMovies } from '../store'
import { useDispatch } from 'react-redux'

const Header = (props) => {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const getMovies = async (event) => {
        event.preventDefault()
        dispatch(fetchMovies(inputRef))
    }


    return (
        <div className={classes.header}>
            <h1>ReactMovies</h1>
            <form onSubmit={getMovies} className={classes.searchContainer}>
                <input ref={inputRef} placeholder="Search Movies"></input>
                <img className={classes.magnifyGlass} onClick={getMovies} src={search} alt='Search Button'></img>
            </form>
        </div>
    )
}

export default Header

// https://api.themoviedb.org/3/movie/550?api_key=576415f17fb97555f63a66608f20aadc
// https://api.themoviedb.org/3/search/movie?api_key=576415f17fb97555f63a66608f20aadc&query=Pokemon
// image path https://image.tmdb.org/t/p/w500/nDP33LmQwNsnPv29GQazz59HjJI.jpg