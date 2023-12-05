import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.put("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      console.log(data);
      setPost(data.data);
    });
  }, []);
  
  return (
    <>
    <div>
      Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.name='Hendry'}</p>
          </div>
        );
      })}
    </div>
    </>
  );
  
    }
export default Users;