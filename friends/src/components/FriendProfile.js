import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../api/axiosWithAuth";
const FriendProfile = (props) => {
  const id = useParams() || null;
  const [friend, setFriend] = useState({
    name: "...loading...",
    age: "",
    email: "",
  });
  useEffect(() => {
    axiosWithAuth()
      .get(`/friends/${id.id}`)
      .then((r) => setFriend(r.data));
  }, [id]);
  return (
    <div className="friendProfile">
      <h2>{friend.name}</h2>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
    </div>
  );
};
export default FriendProfile;
