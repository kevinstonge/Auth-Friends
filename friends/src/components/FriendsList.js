import React, { useState, useEffect } from "react";
import FriendCard from "./FriendCard";
import axiosWithAuth from "../api/axiosWithAuth";
import "../style/FriendsList.scss";
const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((r) => setFriends(r.data));
  }, []);
  return (
    <div className="friendsListContainer">
      <h2>FriendsList</h2>
      <div className="friendsList">
        {friends.map((friend, index) => {
          return <FriendCard key={`friendCard-${index}`} friend={friend} />;
        })}
      </div>
    </div>
  );
};
export default FriendsList;
