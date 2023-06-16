import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { DefaultLayout } from "./components/DefaultLayout";
import { Home } from "./pages/Home";
import { List } from "./pages/Category/List";
import { Edit } from "./pages/Category/Edit";
import { New } from "./pages/Category/New";
import { Provider } from "./provider/Provider";
import { ListPokemon } from "./pages/Pokemon/ListPokemon";
import { DetailPokemon } from "./pages/Pokemon/DetailPokemon";
import { Register } from "./pages/Auth/Register";
import { Login } from "./pages/Auth/Login";
import { PrivateLayout } from "./components/PrivateLayout";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/category" element={<List />} />
            <Route path="/category/new" element={<New />} />
            <Route path="/category/edit/:id" element={<Edit />} />
            <Route path="/pokemon" index element={<ListPokemon />} />
            <Route path="/pokemon/:name" element={<DetailPokemon />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="*"
            index
            element={<h1 className="text-6xl font-bold">404 NOT FOUND SIR</h1>}
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
