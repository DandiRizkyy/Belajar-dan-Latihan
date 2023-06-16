// import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import { State } from "./components/State";
import { ListPokemon } from "./components/ListPokemon";
import { ListUser } from "./components/ListUser";
import ListCategory from "./components/ListCategory";
import { Provider } from "./components/Provider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

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

  const handleInputList = () => {
    // setList(["andi", "joni"]);
  };

  interface ListItem {
    id: number;
    nama: string;
  }
  const [list, setList] = useState<ListItem[]>([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    setList([...list, { id: 1, nama: "duar" }, { id: 2, nama: "andi" }]);
  }, [count]);

  // fetch api
  interface Pokemon {
    name: string;
    url: string;
    id: number;
  }

  const [users, setusers] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const pokemonApi = async () => {
      const response = await fetch(
        `https://6423f83a47401740432fbc9e.mockapi.io/admins?page=${page}&limit=10`
      );
      const data = await response.json();
      setusers([...users, ...data]);
    };
    pokemonApi();
  }, [page]);

  const addMore = () => {
    setPage((prevState) => prevState + 1);
  };

  // console.log(users);

  const Home = () => {
    return <h1>Home Page</h1>;
  };
  const About = () => {
    return <h1>About Page</h1>;
  };

  const Contact = () => {
    return <h1>Contact Page</h1>;
  };
  const Dashboard = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        <li>
          <Link to="/dashboard">Dashboard Home</Link>
        </li>
        <li>
          <Link to="/dashboard/projects">Projects</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link to="/dashboard/insidedashboard">Inside Dashboard</Link>
        </li>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/insidedashboard/*" element={<InsideDashboard />} />
        </Routes>
      </div>
    );
  };

  const InsideDashboard = () => {
    return (
      <>
        <h2>INSIDE DASHBOARD</h2>
        <li>
          <Link to="/dashboard/insidedashboard/">Inside Dashboard Home</Link>
        </li>
        <li>
          <Link to="/dashboard/insidedashboard/profile">profile</Link>
        </li>
        <li>
          <Link to="/dashboard/insidedashboard/list">list</Link>
        </li>
        <li></li>
        <Routes>
          <Route path="/" element={<InsideDashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </>
    );
  };
  const DashboardHome = () => {
    return <h2>Dashboard Home</h2>;
  };
  const InsideDashboardHome = () => {
    return <h2>Inside Dashboard Home</h2>;
  };
  const Projects = () => {
    return <h2>Projects</h2>;
  };

  const Settings = () => {
    return <h2>Settings</h2>;
  };

  const Profile = () => {
    return <h2>This is Profile</h2>;
  };

  const List = () => {
    return <h2>This is List</h2>;
  };

  const NotFound = () => {
    return <h1>404 Not Found</h1>;
  };

  const Layout = () => {
    return (
      <>
        <h1>Ini Layout</h1>
        <Outlet />
      </>
    );
  };

  return (
    <div className="App">
      {/* <State /> */}
      {/* <ListGroup
        items={items}
        heading="List Names"
        onSelectItem={handleSelectItem}
      /> */}
      {/* {alertVisible && <Alert onClose={handleCloseAlert} />} */}
      {/* <Button onClick={handleClickButton} color={"primary"}>
        My Button
      </Button> */}
      {/* <div>
        <ul>
          {list.map((list, index) => (
            <table>
              <thead key={index}>
                <tr>
                  <td>{list.id}</td>
                  <td>{list.nama}</td>
                </tr>
              </thead>
            </table>
          ))}
        </ul> */}
      {/* <button onClick={() => setCount((prevState) => prevState + 1)}>
        Tambah array data
      </button> */}

      {/*day 1 REACT LIFECYCLE AND HOOKS*/}
      {/* <div>
        <ListUser users={users} />
      </div>
      <button onClick={addMore}>Add more</button> */}

      {/*day 2 REACT CONTEXT*/}
      {/* <Provider>
        <ListCategory />
      </Provider> */}

      {/* DAY 3 ROUTES*/}
      <Navbar />
      <h2>aaa</h2>
      <Footer />
      {/* <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard">Nested Routes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
