import React, { useEffect, useState} from "react";
import Subnews from "./Subnews";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsSec = (props)=> {
  
  const [articles, setArticles] = useState([]);
  //const {loading, setLoading} = useState(false);
  const [weather , setWeather] = useState({});
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);

  const updateNews= async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c5ddccd7e12e45a6bcae2b4617dc6570&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.TotalResults)
  }

  useEffect(()=>{
    updateNews();
    fetchWeather();
  },[])

  const fetchWeather = async () =>{
    const url ='https://api.weatherapi.com/v1/current.json?key=c02fc0d7552741539dc150216232706&q=vadodara&aqi=no'
    try{
      let weatherdata = await fetch(url);
      let data = await weatherdata.json();
      setWeather(data);
    }
    catch(error){
      console.error("error",error);
    }
  }

  const fetchMore = async () => {
    // setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c5ddccd7e12e45a6bcae2b4617dc6570&page=${page +1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

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
              <img className="bg-blue-800 w-14 h-14 rounded-full" src={props.CategoryImage} alt="" />
              <h1 className="text-left font-medium text-2xl ml-5 my-auto capitalize">{props.category}</h1>

            </div>
            {props.ishome==='yes' && weather.current && (
                  <div className=" border border-gray-500 bg-gray-800 text-white rounded-2xl p-2 ">
                    <p className="text-sm">{weather.location.name}</p>
                    <p className="text-3xl">{weather.current.temp_c}°C</p>
                  </div>
            )}
          </div>
          <div className="border mt-10 rounded-lg bg-gray-800">
            {articles.map((element) => {
              return (
                <div className="flex justify-center" key={element.url}>
                  <Subnews
                    title={element.title}
                    description={element.description}
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
    )
}


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
