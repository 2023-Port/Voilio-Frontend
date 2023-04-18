import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import Profile from './component/Profile';
import Header from './component/Header';
import './App.css';
import {useEffect, useState} from 'react';
import {videoURL} from './lib/sampleAPI'
import WatchPage from './page/Watch';

let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || null;

function App() {
    const [videoItems, setVideoItems] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    // 비디오데이터
    const videoData = async () => {
        const URL = videoURL;
        const response = await fetch(URL);
        const result = await response.json();
        setVideoItems(result.items)
        console.log(result.items)
        defaultVideos = result.items
    }

    // 비디오는 한 번만 불러질 수 있도록 useEffect사용. useEffect안에서 videoData function을 바로 넣을 순 없다
    useEffect (()=> {
        videoData();
    }, [] )

     // 다른 페이지에서 로고눌렀을 때 home으로 오는데, 30개 동영상 리스트는 session에서 가져올 수 있도록
    const clickLogo=() => {
        setVideoItems(defaultVideos);
    }

    return(     // videoItems가 있어야 실행
        videoItems && <div className="App">
            <BrowserRouter>
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    <Routes>
                        <Route path="/" element={<Home videoItems={videoItems} clickLogo={clickLogo} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                        <Route path="/join" element={<Join/>} />
                        <Route path="/profile" element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                        <Route path="/watch" element={<WatchPage/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
  
}

export default App;