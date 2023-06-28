
import React from 'react'
import Navbar from './components/Navbar';
import NewsSec from './components/NewsSec';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=>{
    return (
      <Router basename="/">
        <div className='px-[5%] py-5'>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<NewsSec key="genera" ishome="yes" pageSize={6} country="in" category="Home" CategoryImage="https://lh3.ggpht.com/MMoPETUaDbUB1bO3KAi3cKQ_lzssju3VEp9ZPauGIamgSniMr4nV2SVkVvG-rKUJSLQJP84q7EA=s56-rw-p"/>}></Route>
            <Route exact path="/entertainment" element={<NewsSec key="entertainment" pageSize={6} country="in" category="entertainment" CategoryImage="https://lh3.ggpht.com/M-7V3aFj1BEw9EYBVHdLFmjCerci3j2MvsB43zu6-9iu-znG_WuOYrz5urJlStV5n59mW0WY5Q=s56-rw-p"/>}></Route>
            <Route exact path="/general" element={<NewsSec key="general" pageSize={6} country="in" category="general" CategoryImage="https://lh3.ggpht.com/MMoPETUaDbUB1bO3KAi3cKQ_lzssju3VEp9ZPauGIamgSniMr4nV2SVkVvG-rKUJSLQJP84q7EA=s56-rw-p"/>}></Route>
            <Route exact path="/health" element={<NewsSec key="health" pageSize={6} country="in" category="health" CategoryImage="https://lh3.ggpht.com/r4EKXwEo49BFQUa3OVZ8FC3j6teq_hUrmGcO4fI8BqoBgWSVJyu6D-vvXs9wGO7e_BKMbeqo4dk=s56-rw-p"/>}></Route>
            <Route exact path="/science" element={<NewsSec key="science" pageSize={6} country="in" category="science" CategoryImage="https://lh3.ggpht.com/fJKuBX6iUFA_nPU2_2bIXcrTf3osSPhgBCL0sGqR2pZo-P6uZpiSmHW098W4I-CQHmsxZBd4=s56-rw-p"/>}></Route>
            <Route exact path="/about" element={<NewsSec key="sports" pageSize={6} country="in" category="sports" CategoryImage="https://lh3.ggpht.com/NyQryeBboxLw72N3_3mAHBYMuWlMaZ1RJHGRdF30RDICgv2-9Jupc2GzY2XeVdgaV3nbNaXb=s56-rw-p"/>}></Route>
            <Route exact path="/technology" element={<NewsSec key="technology" pageSize={6} country="in" category="technology" CategoryImage="https://lh3.ggpht.com/0JsT7seg_L1MnpCuWZvJ6CJCHpkCawqEMdOr8Iw_NWjNUyTqWZJZNDbfa6kUGg-q1KN4FiUPaw=s56-rw-p"/>}></Route>
          </Routes>
        </div>
      </Router>
    )
}
export default App;