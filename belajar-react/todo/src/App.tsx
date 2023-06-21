import { user } from "./data/user";

type user = {
  id: number;
  text: string;
  complete: boolean;
};
function App() {
  return <div>{user.map(user)}</div>;
}

export default App;
