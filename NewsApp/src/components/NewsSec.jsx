import React, { useEffect, useState} from "react";
import Subnews from "./Subnews";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsSec = (props)=> {
  
  const [articles, setArticles] = useState([]);
  //const {loading, setLoading} = useState(false);
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
  },[])

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
        <h1 className="text-center font-bold text-4xl" style={{ marginTop:'90px' }}>latest from {props.category}</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={articles.length !== totalResults}
        >
          <div className="container">
            <div className="w-full">
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
