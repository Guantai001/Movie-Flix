import React from "react";

function Card(){

    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");


    
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const inputRateHandler = (e) => {
    setRate(e.target.value);
  
  };

    return(
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card;