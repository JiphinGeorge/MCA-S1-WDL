import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Users from "./pages/Users.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ marginRight: "10px" }}>
          Contact
        </Link>
        <Link to="/users">Users</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Users page with nested route */}
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<UserProfile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
