import AddBlog from "./components/view/addBlog";
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
             <Route path="/" element={<BlogNote />} />
             <Route path="add/" element={<AddBlog />} />
          </Routes>

         </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
