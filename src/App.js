import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  useEffect(() => {
    // fetchData();
  }, []);
  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://stephen-king-api.onrender.com/api/books",
  //     {
  //       mode: "no-cors",
  //     },
  //   );
  //   console.log(response);
  // };
  return <Layout></Layout>;
}

export default App;
