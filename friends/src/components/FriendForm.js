import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup.string().required("please enter username"),
  age: yup
    .number()
    .typeError("age should be a number")
    .required("please enter password"),
  email: yup
    .string()
    .email("please enter valid email")
    .required("please enter email"),
});
const FriendForm = (props) => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email,
    },
  });
  return (
    <>
      {props.friend.name || props.friend === "new" ? (
        <form className="addFriendForm" onSubmit={handleSubmit(props.onSubmit)}>
          <h3>add a friend</h3>
          <label htmlFor="name">
            <span className="label">friend's name: </span>
            <input id="name" name="name" type="text" ref={register} />
            <span className="error">{errors.name?.message}</span>
          </label>
          <label htmlFor="age">
            <span className="label">friend's age: </span>
            <input id="age" name="age" type="text" ref={register} />
            <span className="error">{errors.age?.message}</span>
          </label>
          <label htmlFor="email">
            <span className="label">friend's email: </span>
            <input id="email" name="email" type="email" ref={register} />
            <span className="error">{errors.email?.message}</span>
          </label>
          <button type="submit">{props.submitText}</button>
        </form>
      ) : (
        <p>...loading...</p>
      )}
    </>
  );
};
export default FriendForm;
