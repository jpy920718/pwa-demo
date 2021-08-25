import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <Typography.Title level={2}>新闻资讯</Typography.Title>
      <Typography.Paragraph>
        <ul>
          <li>
            <Link to="/detail?country=cn">中国新闻</Link>
          </li>
          <li>
            <Link to="/detail?country=us">海外新闻</Link>
          </li>
        </ul>
      </Typography.Paragraph>
    </div>
  );
};

export default Home;
