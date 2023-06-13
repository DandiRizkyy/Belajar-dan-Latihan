import { useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { ProductCardMieGoreng } from "./components/ProductCardMieGoreng";
import { ProductCardNasiGoreng } from "./components/ProductCardNasiGoreng";
import { ParentComponent } from "./components/PropsDrilling";
import { Title } from "./components/Title";
import { dataMakanan } from "./data/data-makanan";

function App() {
  // const high = "high";
  // const harga = "high";

  // const [counter, setCounter] = useState(0);

  // function handleClick() {
  //   setCounter(counter + 100);
  // }

  // return (
  //   <div>
  //     <h1>{counter}</h1>
  //     <button onClick={handleClick}>add 100</button>
  //   </div>
  // );
  const [budget, setBudged] = useState(100);
  const LoopingMakanan = () => {
    return (
      <div>
        {dataMakanan
          // .slice(0, 4)
          // .filter((makanan) => makanan.name === "sate kambing")
          .map((makanan) => (
            <ProductCard
              name={makanan.name}
              price={makanan.price}
              rating={makanan.rating}
              imgSrc={makanan.imageUrl}
            />
          ))}
      </div>
    );
  };

  return (
    <div>
      <Title />
      <p>Your budged: {budget}</p>
      <button
        onClick={() => {
          setBudged(budget + 100);
        }}
      >
        Add 100
      </button>
      <ParentComponent name="IM DOWNN" />
      <ProductCard
        name="Nasi Lemak"
        price={15000}
        imgSrc="data:image/jpeg;base64,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"
      />
      {/*normal ways to create if else using ternary*/}
      {/* {harga === high ? <ProductCardMieGoreng /> : <ProductCardNasiGoreng />} */}
      {/*another ways*/}
      {/* {harga === high ? <ProductCardMieGoreng /> : null} */}
      <ProductCardNasiGoreng />
      <ProductCardMieGoreng />
      <LoopingMakanan />
    </div>
  );
}

export default App;