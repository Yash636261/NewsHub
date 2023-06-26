import React from 'react'

const Subnews =(props)=>{
    let {title,description, imageurl,newsurl} = props;
    return (
        <div className="md:w-4/5 my-5 border border-gray-400 bg-gray-600 rounded-2xl">
          <div className="md:flex flex-row">
            <img className='border-0 rounded-2xl w-72 h-72' src={!imageurl?"https://live-production.wcms.abc-cdn.net.au/f6c03ba6b2400be5f026b06355410bd0?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=521&width=862&height=485": imageurl} alt="..."/>
            <div className='relative m-3 h-full flex flex-col justify-end'>
              <h5 className="text-white font-bold text-2xl">{title}</h5>
              <p className="text-gray-300">{description}</p>
              <a href={newsurl} className="absolute w-32 bottom-0 right-0 border border-blue-800 bg-blue-500 rounded-lg p-3 font-bold ">READ MORE</a>
            </div>
          </div>
        </div>
    )
}

export default Subnews
