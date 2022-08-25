import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagination from '../../components/Pagination/CustomPagination';


const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fenchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=0958e8677b056ae1801e11afc455e94b&page=${page}`);
        console.log(data);
        setContent(data.results);
    }

    useEffect(() => {
        fenchTrending();
    }, [page]);

    return (
    
        <div>
            <span className='pageTitle'>Trending <span className='spanapp'> today </span></span>
            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vore_average={c.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending;