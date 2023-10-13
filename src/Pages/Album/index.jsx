import React, { useState, useEffect , useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from '../../features/albumSlice';
import Gallery from '../../Components/Gallery';
import Paper from '@mui/material/Paper';

const Album = (props) => {
    const dispatch = useDispatch();
    let albumList = useSelector((state) => state.albums.albums);
    const prevPage = useRef();
    let isLoading = useSelector((state) => state.albums.loading);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        if (page !== prevPage.current) {
            dispatch(fetchItems({ page: page, limit: limit }));
            prevPage.current = page;
        }
    }, [dispatch, page]);

    return (
        <div className="mainDiv">
            <div className="gallery-header"><h2>Gallery</h2></div>
            <Paper className="album-div">
                <Gallery data={albumList} />
                <div>
                {isLoading ?
                    <p>Loading...</p>
                    :
                    <button className="app-button" onClick={() => setPage(page + 1)}>Load more</button>
                }
                </div>
            </Paper>
        </div>
    );
};

export default Album;
