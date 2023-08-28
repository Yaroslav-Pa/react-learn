import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import BlogDetails from "./BlogDetails.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
