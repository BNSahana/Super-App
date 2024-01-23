import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import { getNewsDetails } from "../../../api/news";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const result = await getNewsDetails();
    console.log(result)
    setNews(result);
  };

  return <div className={styles.news_container}>
    <div>
      <img src={news.urlToImage} alt="News Image" />
    </div>
    <div className={styles.news_title}>
      <p>{news.title}</p>
    </div>
    <div className={styles.news_content}>
      <p>{news.content}</p>
    </div>
    
  </div>;
};

export default News;
