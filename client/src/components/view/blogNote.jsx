import { Link } from "react-router-dom";
import { getBlogList } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const BlogNote = () => {

    const blogs = useSelector(state => state.blog.data);
    const dispatch = useDispatch();

    // ======> print the results
    // console.log("The data here a the view is ", blogs);

    useEffect(() => {
        dispatch(getBlogList());
    }, [dispatch]);

    return ( 
        <div className="blog-note">
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
                <div class="container-fluid">
                  <h2 class="navbar-brand" href="#">Welcome Denzel !</h2>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">      
                        </ul>

                         <Link to="/add">
                           <button class="btn btn-outline-success" type="submit">Add Blog</button>
                         </Link>

                    </div>
                </div>
            </nav>
            <br />
            <div className="p-5">
                <div className="row">
                   
                    {blogs && blogs.map((item) =>
            {
                return <div className="col col-4 p-4" key={item._id}>
                
                <div className="card p-4">
                <h4 className="text-start">{item.title}</h4>
                <hr />
                <p className="lead">{item.content}</p>
                <hr />
                <div className="row">
                    <div className="col text-start">
                        <div className="row">
                            <div className="col col-4">
                               <button className="btn btn-dark">
                               <i class="bi bi-trash"></i>
                               </button>
                            </div>
                            <div className="col text-start">
                                <button className="btn btn-dark"> 
                                <i class="bi bi-eye"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col text-end"><i>12:10</i></div>
                </div>
            </div>
            </div>
            }
            )}
                   
                </div>
            </div>
      </div>
     );
}
 
export default BlogNote;