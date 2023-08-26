import { Link } from "react-router-dom";

const AddBlog = () => {
    return ( 
        <div className="conatiner d-flex justify-content-center py-5">
            <div className="card p-5 text-center d-flex gap-3 lead">
                This is the add blog
                <Link to="/">
                <button className="btn btn-success">Back</button></Link>
            </div>
        </div>
     );
}
 
export default AddBlog
