import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
      {list.map((item: any, index: number) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <span>{item?.author}</span>
          <p>{item?.description}</p>
          <img src={item?.urlToImage} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
