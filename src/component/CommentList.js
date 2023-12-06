import Comment from './Comment';

const CommentList = ({commentList}) => {
    return (
        <div>
            {commentList.map((comment) => (
                <div key = {comment.id}>
                    <Comment comment={comment}/>
                </div>
            ))}
        </div>
    )
};

export default CommentList;