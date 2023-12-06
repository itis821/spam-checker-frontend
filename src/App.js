import logo from './imgs/logo.png';
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CommentList from "./component/CommentList"
import { useEffect, useState } from 'react';

function App() {
  const [commentList, setCommentList] = useState([]);

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

  return (
    <div className="App">

      <img src={logo} id = 'logo' alt='로고 이미지'/>

      <div className='comment'>
        <TextField id="cmt" label="댓글 입력" variant="standard" />
        <Button id= "cmt_btn" variant="contained">등록</Button>
      </div>
      
      <CommentList commentList={commentList} />
      
    </div>
  );
}

export default App;
