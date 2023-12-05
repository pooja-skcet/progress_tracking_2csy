import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
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
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
    <div>
    <tr>
    <td width='400px'><textarea></textarea></td>
    <td width='100px'><button onClick>Add</button></td>
    <td width='100px'><button>Delete</button></td>
    <td width='100px'><button>Update</button></td>
    </tr>
    </div>
    </>
  );
  
    }
export default Users;