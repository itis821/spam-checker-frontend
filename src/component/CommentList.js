const CommentList = ({commentList}) => {
    return (
        <div>
            {commentList.map((comment) => (
                <div key = {comment.id}>
                    <div>익명{comment.id}</div>
                    <div>{comment.contents}</div>
                    <div>{formatDate(comment.createdDate)}</div>
                </div>
            ))}
        </div>
    )
};

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', options);
}

export default CommentList;