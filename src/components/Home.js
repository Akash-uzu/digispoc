import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const newData = data.filter((element) => element.id !== parseInt(id));
    setData(newData);
  };

  return (
    <>
      <div>Welcome to Home page</div>
      <div>
        {data &&
          data.map((data) => (
            <div key={data.id}>
              <p>{data.title}</p>
              <button onClick={deleteHandler} id={data.id}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
