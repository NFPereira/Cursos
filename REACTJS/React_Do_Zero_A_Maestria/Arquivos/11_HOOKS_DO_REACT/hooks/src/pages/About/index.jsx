import React, { useContext } from "react";
import styles from "./styles.module.css";

import { SomeContext } from "../../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>About</h1>
      <h2>useContext</h2>
      <p>Valor do context:{contextValue}</p>
    </div>
  );
};
export default About;
