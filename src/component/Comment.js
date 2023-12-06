const Comment = ({comment}) => {

    return (
        <div>
                <span id='comment_id'>익명{comment.id}</span>
                <span id='comment_contents'>{comment.contents}</span>
                <span id='comment_time'>{formatDate(comment.createdDate)}</span>
        </div>
    )
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', options);
}

export default Comment