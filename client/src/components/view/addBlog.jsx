import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addBlogList } from "../redux/action";

const AddBlog = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [content, setContent] = useState();


    const handleSubmit = (e) =>
    {

        e.preventDefault();
        dispatch(addBlogList({title, content}));

        console.log('The title is ', title, " and the content is ?", content);
        setTitle('');
        setContent('');
        
        navigate('/');
        
    }

    return ( 
        <div className="conatiner d-flex justify-content-center py-5">
            <div className="card p-5 text-center d-flex gap-3 lead col-5">
                <h2>Add Blog</h2>
                <form action="">
                    <div className="py-2">
                        <input type="text" className="form-control p-3" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="py-2">
                        <textarea type="text" cols="30" rows="5" className="form-control p-3" placeholder="what's up ?" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </form>
                <button className="btn btn-success form-control" onClick={handleSubmit}>Submit</button>
                <Link to="/"><button className="btn btn-secondary form-control">Back</button></Link>
            </div>
        </div>
     );
}
 
export default AddBlog
