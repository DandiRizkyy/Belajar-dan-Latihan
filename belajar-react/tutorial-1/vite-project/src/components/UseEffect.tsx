import { useState } from "react";

export const UseEffect = () => {
  let [list, setList] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("running");
    setList([...list, "yes", "no"]);
  }, []);
  return (
    <div>
      <table>
        <tr>
          <td>i</td>
          <td>nama</td>
        </tr>
      </table>
    </div>
  );
};
