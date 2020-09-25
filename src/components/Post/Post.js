import React from "react";
import classes from "./Post.module.css";

const post = (props) => {
    fetch('https://api.vk.com/method/newsfeed.getRecommended?PARAMETERS&access_token=ACCESS_TOKEN&v=V', {mode: 'no-cors'})
    .then(response => console.log(response))
  return (
    <div className={classes.Post}>
      <img className={classes.PostPhoto} src="#" alt="post-photo" />
      <div>
        <div>
          <img src="#" alt="avatar" />
          <p>Nickname</p>
          <p>Location</p>
          <p>Time ago</p>
        </div>
        <hr />
        <span>
          <img src="#" alt="likes" />
          <p>amount of likes</p>
        </span>
        <section>Some text</section>
      </div>
    </div>
  );
};

export default post;
