import React, { useState } from "react";
import axiosWithAuth from "../api/axiosWithAuth";
import FriendForm from "./FriendForm";
import "../style/AddFriend.scss";
const AddFriend = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const onSubmit = (data) => {
    axiosWithAuth()
      .post("/friends", data)
      .then((r) => props.setFriends(r.data))
      .catch((e) => console.log(e));
    setIsAdding(false);
  };
  return (
    <div className="friendCard">
      {!isAdding ? (
        <button
          onClick={() => {
            setIsAdding(true);
          }}
        >
          + add friend +
        </button>
      ) : (
        <FriendForm submitText="add friend" friend="new" onSubmit={onSubmit} />
      )}
    </div>
  );
};
export default AddFriend;
