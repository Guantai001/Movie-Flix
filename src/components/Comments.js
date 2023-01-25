import React,{useState, useEffect} from "react";

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
    <div>Comments</div>
  )
}

export default Comments