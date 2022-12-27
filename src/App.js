import React, { useEffect } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";

import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";

const App = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // # 제거, & 사이로 나누고 0번째~ 어쩌구가 토큰
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default App;
