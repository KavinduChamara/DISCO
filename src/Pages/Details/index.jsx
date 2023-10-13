import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { getItem } from '../../features/albumSlice';
import Paper from '@mui/material/Paper';
import Detail from "../../Components/Detail";
import "../../styles/album.css";

const Details = (props) => {
    const dispatch = useDispatch();
    let details = useSelector((state) => state.albums.selected);
    let isLoading = useSelector((state) => state.albums.loading);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getItem(id));
    }, [dispatch]);

    return (
        <div className="mainDiv">
            <div className="gallery-header"><h2>Image Details</h2></div>
            <Paper className="album-div">
                {isLoading ?
                    <div>Loading...</div>
                    :
                    <div>
                        <div className="image-title">
                            <h2>{details?.data?.data?.title}</h2>
                        </div>
                        <div>
                            <img
                                className='details-img'
                                src={`https://www.artic.edu/iiif/2/${details?.data?.data?.image_id}/full/400,/0/default.jpg`}
                            />
                            <div
                                className='image-description'
                                dangerouslySetInnerHTML={{ __html: details?.data?.data?.description || details?.data?.data?.publication_history || details?.data?.info?.license_text }}
                            />
                        </div>
                        <div>              
                            <Detail title='ID' value={details?.data?.data?.id} />
                            <Detail title='API Link' value={details?.data?.data?.api_link} />
                            <Detail title='API Model' value={details?.data?.data?.api_model} />
                            <Detail title='Boosted' value={details?.data?.data?.is_boosted ? 'Yes' : 'No'} />
                            <Detail title='Place Of Origin' value={details?.data?.data?.place_of_origin} />
                            <Detail title='Artist' value={details?.data?.data?.artist_display} />
                            <Detail title='Term Titles' value={details?.data?.data?.term_titles.join(' | ')} />
                        </div>
                    </div>
                }
                <div>
                    <button className="app-button" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </Paper>
        </div>
    );
};

export default Details;
