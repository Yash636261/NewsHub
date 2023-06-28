import React from "react";

const Subnews = (props) => {
  let { title, description, imageurl, newsurl } = props;
  return (
    <div className="w-4/5 my-2  border-t-2 border-gray-500 pt-5">
      <div className="md:flex flex-row">
        <img
          className="border-0 rounded-2xl w-72 h-72 object-cover"
          src={
            !imageurl ? "https://swipewrap.com/images/image_icon.png" : imageurl
          }
          alt="image not available"
        />
        <div className="m-3 h-64 flex flex-col justify-between">
          <div>
            <h5 className="text-white font-bold text-xl">{title}</h5>
            <p className="text-gray-300 text-sm">{description}....</p>
          </div>
          <div className="mt-2">
            <a
              href={newsurl}
              className=" w-32 bottom-0 right-0 border border-blue-800 bg-blue-500 rounded-lg py-1 px-2 font-medium "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnews;
