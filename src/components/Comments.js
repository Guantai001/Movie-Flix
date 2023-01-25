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
     </div>
    </div>
  )
}

export default Comments