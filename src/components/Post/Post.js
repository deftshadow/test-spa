import React, { useContext } from "react";
import Context from "../../Context";
import Aux from "../../hoc/Auxilliary";
import classes from "./Post.module.css";

const Post = (props) => {
  const { currentDate } = useContext(Context);
  const { deviceWidth } = useContext(Context);
  let date = new Date(props.post.datetaken);
  const secondsAgo = Math.floor((currentDate - date) / 1000);
  const monthsAgo = Math.floor(secondsAgo / (3600 * 24 * 30));
  let description =
    props.post.description._content.length > 150
      ? props.post.description._content.slice(0, 150) + "..."
      : props.post.description._content;
  let title =
    props.post.title.length > 15
      ? props.post.title.slice(0, 15) + "..."
      : props.post.title;
  let postContent = null;
  const avatarURL = `http://farm${props.post.iconfarm}.staticflickr.com/${props.post.iconserver}/buddyicons/${props.post.owner}.jpg`;
  const photoURL = `https://farm${props.post.farm}.staticflickr.com/${props.post.server}/${props.post.id}_${props.post.secret}.jpg`;

  if (monthsAgo >= 12) {
    date = `${(monthsAgo % 12) + 1}y`;
  } else if (monthsAgo < 12 && monthsAgo >= 1) {
    date = `${monthsAgo}mo`;
  } else if (monthsAgo < 1) {
    const daysAgo = Math.floor(secondsAgo / (3600 * 24));
    if (daysAgo >= 1) {
      date = `${daysAgo}d`;
    } else {
      const hoursAgo = Math.floor(secondsAgo / 3600);
      if (hoursAgo >= 1) {
        date = `${hoursAgo}`;
      } else {
        const minutesAgo = Math.floor(secondsAgo / 60);
        date = minutesAgo >= 1 ? `${minutesAgo}m` : `${secondsAgo}s`;
      }
    }
  }

  const postHeader = (
    <header className={classes.Header}>
      <span className={classes.User}>
        <img className={classes.Avatar} src={avatarURL} alt="avatar" />
        <div className={classes.UserInfo}>
          <div className={classes.UserName}>{props.post.ownername}</div>
          <div>{title}</div>
        </div>
      </span>
      <div className={classes.DateTaken}>{date}</div>
    </header>
  );

  const postDescription = (
    <div className={classes.Description}>
      <div className={classes.Likes}>
        <div className={classes.LikeButton}>
          <button
            className={classes.LikeButton}
            onClick={() => {
              props.likeClicked(props.post.id);
            }}
          >
            <i className="material-icons">favorite_border</i>
          </button>
        </div>
        <span className={classes.LikesCount}>{props.post.count_faves}</span>
      </div>
      <div className={classes.Description}>{description}</div>
    </div>
  );

  if (!deviceWidth) {
    postContent = (
      <div className={classes.Post}>
        <img className={classes.PhotoWrapper} src={photoURL} alt="post" />
        <div className={classes.PostInfo}>
          {postHeader}
          <hr />
          {postDescription}
        </div>
      </div>
    );
  } else {
    console.log("here");
    postContent = (
      <div className={classes.Post}>
        {postHeader}
        <img className={classes.PhotoWrapper} src={photoURL} alt="post" />
        <div className={classes.PostInfo}>
         {postDescription}
        </div>
      </div>
    );
  }

  return <Aux>{postContent}</Aux>;
};

export default Post;
