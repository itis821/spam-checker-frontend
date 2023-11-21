import logo from './imgs/logo.png';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">

      <img src={logo} id = 'logo' alt='로고 이미지'/>

      <div className='comment'>
        <TextField id="cmt" label="댓글 입력" variant="standard" />
        <Button id= "cmt_btn" variant="contained">등록</Button>
      </div>
      
      <div className='comment_list'>
        <p>댓글 리스트</p>
      </div>
      
    </div>
  );
}

export default App;
