import classes from './loadingCard.module.css'

const LoadingCard = (props) => {
    return (
        <div className={classes.loadingCard}>
            <div className={classes.spinner}>
                
            </div>
        </div>
    )
}

export default LoadingCard