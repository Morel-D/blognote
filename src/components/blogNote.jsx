const BlogNoate = () => {
    return ( 
        <div className="blog-note">
            <div className="container d-flex justify-content-center mt-5">
                <div className="container mt-5 d-flex justify-content-center text-center">
                    <div className="card col-5 p-5">
                        <h2 className="text-secondary">Number of blog - 10</h2>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-warning">Add Note</button>
                            </div>
                            <div className="col">
                               <button className="btn btn-danger">Delete Note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BlogNoate;