import { useState, useEffect } from "react";
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

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      <BlogList list={blogs} title="All blogs" handleDelete={handleDelete} />
      {/* <button onClick={() => setName("luigi")}>Name change</button>
      <p>{name}</p> */}
      {/* <BlogList
        list={blogs.filter((blog) => blog.author === "mario")}
        title="Mario blogs"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
