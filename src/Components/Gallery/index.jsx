import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gallery = (props) => {
    const navigate = useNavigate();

    const handleItemClick = (photoId) => {
        navigate(`/details/${photoId}`);
    }

    return (
        <div className="masonry-gallery">
            {props?.data.map((photo, index) => (
                <div key={photo.id} className="masonry-item" onClick={() => handleItemClick(photo.id)}>
                <img
                    src={`https://www.artic.edu/iiif/2/${photo.image_id}/full/,180/0/default.jpg`}
                    alt={photo.caption}
                />
                <p className='image-size'>
                    {(photo?.thumbnail?.width && photo?.thumbnail?.height) ? photo.thumbnail.width+'x'+photo?.thumbnail?.height : ''}
                </p>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
