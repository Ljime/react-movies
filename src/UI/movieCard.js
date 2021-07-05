import classes from './movieCard.module.css'

const MovieCard = (props) => {
    return (
        <div className={classes.movieCard}>
            <div className={classes.titleContainer}>
                <h3 className={classes.title}>{props.title}</h3>
            </div>
            <div className={classes.footerContainer}>
                <h3 className={classes.title}>Click To Learn More</h3>
            </div>
            <img className={classes.movieCardImage} src={props.imgUrl} alt='Movie Poster'></img>
        </div>
    )
}

export default MovieCard