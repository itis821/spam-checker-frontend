import Comment from './Comment';
import './CommentList.css'

const CommentList = ({commentList}) => {
    return (
        <div className='commentList-container'>
            {commentList.map((comment) => (
                <div key = {comment.id}>
                    <Comment comment={comment}/>
                </div>
            ))}
        </div>
    )
};

export default CommentList;