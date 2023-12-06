const Comment = ({comment}) => {
    return (
        <div>
            <div>익명{comment.id}</div>
            <div>{comment.contents}</div>
            <div>{formatDate(comment.createdDate)}</div>
        </div>
    )
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', options);
}

export default Comment