import React from 'react';
import './Comment.css';

const Comment = ({comment}) => {

    return (
        <div className="comment-container">
                <span className='comment-id'>익명{comment.id}</span>
                <span className='comment-contents'>{comment.contents}</span>
                <span className='comment-time'>{formatDate(comment.createdDate)}</span>
        </div>
    )
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', options);
}

export default Comment