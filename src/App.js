import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Join from "./page/Join";
import Profile from "./page/Profile";
import New from "./page/New";
import Watch from "./page/Watch";
import axios from "axios";
import UploadVideo from "./page/UploadVideo";
import { HOST_URL } from "./lib/HostUrl";
import { useRecoilState } from "recoil";
import { isVideoItems } from "./store/video/isVideoItems";
import ChatRoomListPage from "./page/ChatRoomListPage";
import ChatPage from "./page/ChatPage";
import Landing from "./page/Landing";
import "./styles/globalStyles.css";
import Header from "./component/ new-portal/Header";

const defaultVideos =
  JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
const selectWatch = JSON.parse(sessionStorage.getItem("selectWatch")) || null;

function App() {
  const [videoItems, setVideoItems] = useRecoilState(isVideoItems);

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [selectedWatch, setSelectedWatch] = useState(null);

  const videoData = useCallback(() => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists`)
      .then((response) => {
        setVideoItems(response.data.data._embedded.boardResponseList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    videoData();
  }, []);

  // 다른 페이지에서 로고눌렀을 때 home으로 오는데, 30개 동영상 리스트는 session에서 가져올 수 있도록
  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };

  return (
    // videoItems가 있어야 실행
    videoItems && (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/new-portal" element={<Landing />} />
          <Route path="/new-portal" element={<Home />} />
          <Route path="/new-portal/:category" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/search/:keyword" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/profile/:nickname" element={<Profile />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/manage/:boardId" element={<UploadVideo />} />
          <Route path="/chatRooms" element={<ChatRoomListPage />} />
          <Route path="/chatRooms/:roomId" element={<ChatPage />} />
          <Route path="/new-portal" element={<New />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
