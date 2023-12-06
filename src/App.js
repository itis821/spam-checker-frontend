import logo from './imgs/logo.png';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CommentList from "./component/CommentList"
import { useEffect, useState } from 'react';

function App() {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  // 댓글 상태 변경
  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  // 댓글 불러오기 API (GET COMMENT)
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get("/api/comment");
        setCommentList(response.data.commentList);
      } catch (error) {
        console.error("댓글 가져오기 오류:", error);
      }
    };

    getComments();
  }, []);

  // 댓글 등록 API (POST COMMENT)
  const handleCommentSubmit = async () => {

    if(!comment){
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      
      const response = await axios.post("/api/comment", { contents : comment });
      setCommentList(response.data.commentList);
      setComment("");

    } catch (error) {
      console.error("댓글 등록 오류:", error);
    }
  };


  return (
    <div className="App">

      <img src={logo} id = 'logo' alt='로고 이미지'/>

      <div className='comment'>

        <TextField 
          id="cmt" 
          label="댓글 입력" 
          variant="standard"
          value={comment}
          onChange={handleCommentChange}
        />

        <Button 
          id= "cmt_btn" 
          variant="contained"
          onClick={handleCommentSubmit}
        >
          등록
        </Button>

      </div>
      
      <CommentList commentList={commentList} />
      
    </div>
  );
}

export default App;
