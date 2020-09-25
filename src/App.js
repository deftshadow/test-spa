import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    fetch(
      "https://instagram9.p.rapidapi.com/api/instagram?username=nasa&lang=en",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "instagram9.p.rapidapi.com",
          "x-rapidapi-key":
            "78ddc84288msh6cbc2d8beb7c4adp1042cbjsne9d138636f7c",
        },
      }
    )
      .then((response) => (response.json()))
      .then(response => console.log(response))
      .catch((err) => {
        console.log(err);
      });

    //window.location.href = 'https://oauth.vk.com/authorize?client_id=7608018&display=page&redirect_uri=http://localhost:3000&scope=friends,wall&response_type=token&v=5.124&state=123456'
  });

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
