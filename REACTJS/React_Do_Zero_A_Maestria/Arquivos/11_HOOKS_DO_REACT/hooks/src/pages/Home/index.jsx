import React, { useContext, useEffect } from "react";
import styles from "./styles.module.css";

import HookUseState from "../../components/HookUseState";
import HookUseReducer from "../../components/HookUseReducer";
import HookUseEffect from "../../components/HookUseEffect";

import { SomeContext } from "../../components/HookUseContext";
import HookUseRef from "../../components/HookUseRef";
import HookUseCallback from "../../components/HookUseCallback";
import HookUseMemo from "../../components/HookUseMemo";
import HookUseLayoutEffect from "../../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../../components/HookUseImperativeHandle";
import HookCustom from "../../components/HookCustom.jsx";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context:{contextValue}</p>
      <hr />
      <HookUseRef />
      <hr />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;
