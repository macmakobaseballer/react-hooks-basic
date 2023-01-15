import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPosts(res.data);
      });
  }, [clicked, id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <button type="button" onClick={handlerClicked}>
        Get Post
      </button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} 
      </ul> */}
    </div>
  );
};
