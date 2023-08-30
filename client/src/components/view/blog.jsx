import { useState } from "react";
import  { addBlog } from "../redux/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) =>
{
    return {
        blog: state
    }
}


const mapDispatchToProps = (dispatch) => 
{
    return {
        addBlogs: (obj) => dispatch(addBlog(obj)),
    }
} 

const Blog = (props) => {

    const [blog, setBlog] = useState('');

    const add = () => {
        if(blog === "")
        {
            alert('This text is empty')
        }else {
            props.addBlogs({
                id: Math.floor(Math.random() * 1000),
                item: blog,
                complete: false
            });

            setBlog('');
        }
    }

    return ( 
        <div className="create">
                    <div className="conatiner d-flex justify-content-center py-5">
            <div className="card p-5 text-center d-flex gap-3 lead col-5">
                <h2>Add Blog</h2>
                <form action="">
                    <div className="py-2">
                        <input type="text" className="form-control p-3" placeholder="Enter title" value={blog} onChange={(e) => setBlog(e.target.value)}/>
                    </div>
                    <div className="py-2">
                        <textarea name="" id="" cols="30" rows="5" className="form-control p-3" placeholder="what's up ?"></textarea>
                    </div>
                </form>
                <button className="btn btn-success form-control" onClick={() => add()}>Submit</button>
                 <button className="btn btn-secondary form-control">Back</button>
            </div>
        </div>

        <div className="p-5">
            {props.blog.map((item) =>
            {
                return <div className="card col-3 p-4" key={item.id}>
                <h4 className="text-start">Hello world</h4>
                <hr />
                <p className="lead">{item.item}</p>
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
            }
            )}
            </div>
        </div>
     );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Blog);