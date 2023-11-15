import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 = useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changesSomethings = () => {
    setNumber(number + 1);
  };

  // 2- array de deps. vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  // 3- item no array de dependencia.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  // 4 - cleanup do useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Hello World");
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>{number}</p>
      <button onClick={changesSomethings}>Executar</button>
      <h2>AnotherNumber</h2>
      <p>{anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Alterar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
