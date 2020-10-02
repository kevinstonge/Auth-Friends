import React from "react";
import { NavLink } from "react-router-dom";
const FriendCard = (props) => {
  return (
    <NavLink className="friendCard" to={`friend/${props.friend.id}`}>
      <h3>{props.friend.name}</h3>
    </NavLink>
  );
};
export default FriendCard;
