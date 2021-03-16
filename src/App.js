import React, { useEffect, useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const nameRef = useRef();

  useEffect(() => {
    console.log(nameRef, nameRef.current.innerHTML);
    nameRef.current.innerHTML += "XX";
  });

  return (
    <div className="App">
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2 ref={nameRef}>{name}</h2>
    </div>
  );
}

export default App;
