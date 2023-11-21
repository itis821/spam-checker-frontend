import logo from './imgs/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} id = 'logo' alt='로고 이미지'/>
      <p>댓글창</p>
      <button>입력</button>
      <p>댓글 리스트</p>
    </div>
  );
}

export default App;
