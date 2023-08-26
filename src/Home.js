import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loding...</div>}
      {error && <div>Error: {{ error }}</div>}
      {blogs && <BlogList list={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
