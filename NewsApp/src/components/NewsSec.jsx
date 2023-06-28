import React, { useEffect, useState } from "react";
import Subnews from "./Subnews";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsSec = (props) => {
  const [articles, setArticles] = useState([]);
  //const {loading, setLoading} = useState(false);
  const [weather, setWeather] = useState({});
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      import.meta.env.VITE_NEWS_API
    }&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.TotalResults);
  };

  useEffect(() => {
    updateNews();
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_Weather_api
    }&q=vadodara&aqi=no`;
    try {
      let weatherdata = await fetch(url);
      let data = await weatherdata.json();
      setWeather(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const fetchMore = async () => {
    // setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${import.meta.env.VITE_NEWS_API}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const currentDate = new Date();

  return (
    <>
      <div className="my-3">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={articles.length !== totalResults}
        >
          <div className="m-auto max-w-3xl ">
            <div className="flex flex-row justify-between mt-14">
              <div className="flex flex-row ">
                <img
                  className="bg-blue-800 w-14 h-14 rounded-full"
                  src={props.CategoryImage}
                  alt=""
                />
                <div className=" ml-5 my-auto ">
                  <h1 className="text-left font-medium text-2xl capitalize text-white">
                    {props.category}
                  </h1>
                  {props.ishome === "yes" && (
                    <p className="text-white">{currentDate.toDateString()}</p>
                  )}
                </div>
              </div>
              {props.ishome === "yes" && weather.current && (
                <div className="flex flex-row border border-transparent bg-[#1f1f1f] text-white rounded-2xl p-2 ">
                  <img src={weather.current.condition.icon} alt="" />
                  <div>
                    <p className="text-sm">{weather.location.name}</p>
                    <p className="text-3xl">{weather.current.temp_c}°C</p>
                  </div>
                </div>
              )}
            </div>
            <div className="border border-transparent pt-14 mt-10 rounded-2xl bg-[#1f1f1f]">
              {articles.map((element) => {
                const maxWords = 20; // Maximum number of words
                const shortDescription =!element.description? element.description:element.description
                  .split(" ")
                  .slice(0, maxWords)
                  .join(" ");
                return (
                  <div className="flex justify-center" key={element.url}>
                    <Subnews
                      title={element.title}
                      description={shortDescription}
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

NewsSec.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
NewsSec.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsSec;
