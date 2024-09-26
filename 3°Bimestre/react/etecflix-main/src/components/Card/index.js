import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/favorites";

function Card({ id }) {
    
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? iconUnfavorite : iconFavorite
    
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}> 
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa}/>
            </Link>
            <figure className={styles.icon}>
                <img onClick={() => addFavorite({id})} src={icone} alt="icone"></img>
            </figure>
        </section>
    );
}

export default Card;