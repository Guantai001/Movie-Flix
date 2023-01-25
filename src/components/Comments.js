import React,{useState, useEffect} from "react";
import Search from "./Search";


function Comments() {
  const [getComments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/movies")
    .then((res) => res.json())
    .then((data) => {
        setComments(data);
        console.log(data);
    });
}, []);

  return (
    <div>
      <Search />
      <div className="container pt-5">
    <h3>Comments Page</h3>
    <div className="container mx-auto text-center row p-1 ">
            <table className="table table-striped table-hover table-bordered col-12">
                <thead>
                    <tr>
                       
                        <th scope="col">Movie Title</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {getComments.map((comment) => (
                        <tr key={comment.id}>
                            <td>{comment.movie}</td>
                            <td>{comment.comment}</td>
                            <td>{comment.rate}</td>
                            <td><button 
                            className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Comments