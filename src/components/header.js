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
