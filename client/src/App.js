import AddBlog from "./components/view/addBlog";
import Blog from "./components/view/blog";
import BlogNote from "./components/view/blogNote";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
         <div className="body">
          <Routes>
             {/* <Route path="/" element={<BlogNote />} /> */}
             <Route path="/" element={<Blog />} />
             <Route path="add/" element={<AddBlog />} />
          </Routes>

         </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
