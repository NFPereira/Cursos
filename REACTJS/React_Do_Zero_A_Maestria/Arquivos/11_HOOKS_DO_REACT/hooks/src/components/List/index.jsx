import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("atualizando...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      <h1>Lista</h1>
      {myItems && myItems.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
};

export default List;
