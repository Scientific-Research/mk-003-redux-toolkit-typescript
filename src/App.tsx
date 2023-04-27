import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import { PageWelcome } from "./components/PageWelcome";
import { PageBooks } from "./components/PageBooks";
import { PageCart } from "./components/PageCart";

function App() {
  return (
    <div className="App">
      <h1>Info Site</h1>
      {/* <p>Welcome to this page!</p> */}

      <nav>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/books" element={<PageBooks />} />
        <Route path="/cart" element={<PageCart />} />
      </Routes>
    </div>
  );
}

export default App;
