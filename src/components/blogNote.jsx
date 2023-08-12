import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/actions/blogAction";

const BlogNoate = () => {

    const blog = useSelector(state => state.blog);

    const dispatch = useDispatch();


    return ( 
        <div className="blog-note">
            <div className="container d-flex justify-content-center mt-5">
                <div className="container mt-5 d-flex justify-content-center text-center">
                    <div className="card col-5 p-5">
                        <h2 className="text-secondary">Number of blog - {blog}</h2>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-warning" onClick={() => dispatch(increment())}>Add Note</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-dark" onClick={() => dispatch(reset())}>Reset</button>
                            </div>
                            <div className="col">
                               <button className="btn btn-danger" onClick={ () => dispatch(decrement())}>Delete Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogNoate;