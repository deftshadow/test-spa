import React, { useState, useEffect} from "react";
import Post from "../../components/Post/Post";
import Context from '../../Context'
import classes from './Posts.module.css'
import { useMediaQuery } from 'react-responsive'

const Posts = () => {
  const [content, setContent] = useState(null);
  const deviceWidth = useMediaQuery({query: '(min-width: 600px)'})
  const currentDate = new Date()

  const likeButtonHandler = (id) => {
    alert(`ID записи: ${id}`)
  }

  useEffect(() => {
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=eaa15ee1ac19253f934f20e0f5853517&extras=icon_server%2C+description%2C+owner_name%2C+date_taken%2C+count_faves&per_page=20&page=1&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setContent(
          response.photos.photo.map((post, index) => {
            return (
              <Post
                key={response.photos.photo[index].id}
                post={response.photos.photo[index]}
                likeClicked={likeButtonHandler}
              />
            );
          })
        );
      });
  }, []);

  return (
    <Context.Provider value={{currentDate, deviceWidth}}>
      {<div className={classes.Posts}>{content}</div>}
    </Context.Provider>
  );
};

export default Posts;
