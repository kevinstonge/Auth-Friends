import React from "react";
const FriendCard = (props) => {
  return (
    <div className="friendCard">
      <h2>{props.friend.name}</h2>
    </div>
  );
};
export default FriendCard;
