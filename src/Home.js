import { useState } from "react";

const Home = () => {
  //   let name = "mario";

  const [name, setName] = useState("mario");
  const [age, setAge] = useState(55);

  const handleClick = () => {
    setName("luigi");
    setAge(25);
  };
  // //    lesson 7
  //    const hendelClickAgaine = (name, e) => {
  //     console.log("Hallo" + name, e.target);
  //   };

  return (
    <div className="home">
      <h2>Home page</h2>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={(e) => hendelClickAgaine("mario", e)}>
        clcik me again
      </button> */}
    </div>
  );
};

export default Home;
