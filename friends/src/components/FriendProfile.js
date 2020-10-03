import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../api/axiosWithAuth";
import FriendForm from "./FriendForm";

const FriendProfile = (props) => {
  const id = useParams() || null;
  const [isEditing, setIsEditing] = useState(false);
  const [friend, setFriend] = useState({
    name: "...loading...",
    age: "",
    email: "",
  });
  const getFriend = useCallback(() => {
    axiosWithAuth()
      .get(`/friends/${id.id}`)
      .then((r) => setFriend(r.data));
  }, [id.id]);
  const onSubmit = (data) => {
    axiosWithAuth()
      .put(`/friends/${id.id}`, data)
      .then((r) => getFriend())
      .catch((e) => console.log(e));
    setIsEditing(false);
  };
  useEffect(() => {
    getFriend();
  }, [id, getFriend]);
  return (
    <div className="friendProfile">
      {isEditing ? (
        <>
          <FriendForm
            submitText="edit friend"
            friend={friend}
            onSubmit={onSubmit}
          />
        </>
      ) : (
        <>
          <h2>{friend.name}</h2>
          <p>age: {friend.age}</p>
          <p>email: {friend.email}</p>
          <button onClick={() => setIsEditing(true)}>edit</button>
        </>
      )}
    </div>
  );
};
export default FriendProfile;
