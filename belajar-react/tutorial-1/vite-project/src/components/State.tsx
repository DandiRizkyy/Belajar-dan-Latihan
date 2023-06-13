import { useState } from "react";

export const State = () => {
  const [counter, setCounter] = useState(0);
  //   const [] =

  return (
    <div>
      <p>Hasil: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Tambah 1</button>
    </div>
  );
};
