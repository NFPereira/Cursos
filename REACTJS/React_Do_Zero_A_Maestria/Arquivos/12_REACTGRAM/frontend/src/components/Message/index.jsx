import React from "react";
import styles from "./styles.module.css";

const Message = ({ msg, type }) => {
  const cssType = type;
  return (
    <div
      className={`${styles.message} ${
        cssType === "error" ? styles.error : styles.success
      }`}
    >
      <p>{msg}</p>
    </div>
  );
};

export default Message;
