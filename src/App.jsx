import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import BottomSidebar from './components/sidebar/BottomSidebar'
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Login from './pages/Login'
import RightSidebar from "./components/sidebar/RightSidebar";
function App() {
  return (
    
<BrowserRouter>
<div className="flex gap-10">
      <LeftSidebar />
      <div className="">
              <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <BottomSidebar/>
      </div>
      <RightSidebar/>
</div>
</BrowserRouter>
   
  );
}

export default App;
