const BlogList = ({ list, title, handleDelete }) => {
  //   const blogs = props.list;
  //   const title = props.title;
  //   console.log(props, props.list);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {list.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete blog
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
