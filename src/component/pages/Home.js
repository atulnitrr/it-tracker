import React, { useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";

const Home = () => {
  const userContext = useContext(UserContext);
  const { allUsers, getAllUsers } = userContext;

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
