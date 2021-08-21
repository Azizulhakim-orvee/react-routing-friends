import React from "react";
import { useEffect, useState } from "react";
import Friends from '../Friends/Friends';


const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Friends: {friends.length}</h1>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id}></Friends>
      ))}
    </div>
  );
};

export default Home;
