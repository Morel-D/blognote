import { Link } from "react-router-dom";

const AddBlog = () => {
    return ( 
        <div className="conatiner d-flex justify-content-center py-5">
            <div className="card p-5 text-center d-flex gap-3 lead col-5">
                <h2>Add Blog</h2>
                <form action="">
                    <div className="py-2">
                        <input type="text" name="" className="form-control p-3" placeholder="Enter title"/>
                    </div>
                    <div className="py-2">
                        <textarea name="" id="" cols="30" rows="5" className="form-control p-3" placeholder="what's up ?"></textarea>
                    </div>
                </form>
                <button className="btn btn-success form-control">Submit</button>
                <Link to="/"><button className="btn btn-secondary form-control">Back</button></Link>
            </div>
        </div>
     );
}
 
export default AddBlog
