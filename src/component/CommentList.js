const CommentList = ({commentList}) => {
    return (
        <div>
            {commentList.map((comment) => (
                <div key = {comment.id}>
                    <div>익명{comment.id}</div>
                    <div>{comment.contents}</div>
                    <div>{comment.createdDate}</div>
                </div>
            ))}
        </div>
    )
};

export default CommentList;