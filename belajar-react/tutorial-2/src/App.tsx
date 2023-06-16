import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { DefaultLayout } from "./components/DefaultLayout";
import { Home } from "./pages/Home";
import { List } from "./pages/Category/List";
import { Edit } from "./pages/Category/Edit";
import { New } from "./pages/Category/New";
import { Provider } from "./provider/Provider";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/category" element={<List />} />
            <Route path="/category/new" element={<New />} />
            <Route path="/category/edit/:id" element={<Edit />} />
            <Route path="/pokemon" index element={<div>Pokemon</div>} />
            <Route path="/pokemon/:name" element={<div>Detail</div>} />
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
