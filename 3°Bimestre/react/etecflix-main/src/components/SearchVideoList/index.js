import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

// Função para filtrar vídeos por categoria ou título
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState('Geografia')
    const foundVideos = filterVideos(videos, searchText)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 750)
    }, [])

    return (
        <section className={styles.container}>
            <input type="search" placeholder="Pesquisar..." value={searchText} onChange={event => setSearchText(event.target.value)} />
            { loading ? <Loader /> :
                <VideoList videos={foundVideos} emptyHeading={`Sem vídeos sobre "${searchText}"`} />
            }
        </section>
    );
}

export default SearchVideoList;