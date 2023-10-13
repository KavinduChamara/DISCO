import React from 'react';

const Detail = (props) => {
    return (
        <div className="detail-item">
            <div className='detail-title'>{props?.title}</div>
            <div className='detail-value'>{props?.value}</div>
        </div>
    );
}

export default Detail;
