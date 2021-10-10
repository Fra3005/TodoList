import React, { useEffect, useState } from "react";

export default function ListTask(props) {
  const lista = {
    task: [],
  };
  const [flag, setFlag] = useState(props.flag);

  console.log("PROPS", props);
  useEffect(() => {
    if (flag) {
      lista.task.push(props.task);
    }
    setFlag(!flag);
  }, [props]);

  useEffect(() => {
    console.log("Elm", lista);
  }, [lista]);
  return (
    <>
      <ul>
        {lista.task.map((item) => {
          <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
