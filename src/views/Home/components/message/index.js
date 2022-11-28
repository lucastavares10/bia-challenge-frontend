import React from "react";
import "./Message.css";
import { Hours, User, Bot } from "../assets/styled";

const Message = ({ time, user, text }) => {
  const content = (
    <>
      <div className="text">{text}</div>
      <Hours>
        {new Date(time).toLocaleTimeString("pt-br", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </Hours>
    </>
  );

  return (
    <>
      {user === "user" && <User>{content}</User>}
      {user === "bot" && <Bot>{content}</Bot>}
    </>
  );
};

export default Message;
