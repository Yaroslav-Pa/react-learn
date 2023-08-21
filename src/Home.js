import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My new website",
      body: "Lorem, ipsum dolor.",
      author: "mario",
    },
    {
      id: 2,
      title: "Welcome",
      body: "Lorem, ipsum dolor.",
      author: "yoshi",
    },
    {
      id: 3,
      title: "Some dev tips",
      body: "Lorem, ipsum dolor.",
      author: "mario",
    },
  ]);

  return (
    <div className="home">
      <BlogList list={blogs} title="All blogs" />
    </div>
  );
};

export default Home;
