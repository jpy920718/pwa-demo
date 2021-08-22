import React, { useEffect, useState } from "react";

import "./App.css";
import { Button } from "antd";

function App() {
  const [list, setList] = useState([]);
  const getNewsList = async () => {
    const result = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-07-18&sortBy=publishedAt&apiKey=3a4b989039104e968a6aab80811af288"
    ).then((res) => res.json());
    setList(result.articles);
    console.log(result);
  };
  useEffect(() => {
    getNewsList();
  }, []);
  return (
    <div className="App">
      <Button type="primary">demo</Button>
    </div>
  );
}

export default App;
