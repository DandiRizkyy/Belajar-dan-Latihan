// import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { State } from "./components/State";

function App() {
  // const items = ["andi", "budi", "john"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClickButton = () => {
    setAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="App">
      <State />
      {/* <ListGroup
        items={items}
        heading="List Names"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && <Alert onClose={handleCloseAlert} />}
      <Button onClick={handleClickButton} color={"primary"}>
        My Button
      </Button>
    </div>
  );
}

export default App;
