import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({title, info}) => {
  const [show, setShow] = useState(false);


  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <div className="btn" onClick={()=>setShow(!show)}>
          {!show ? <AiOutlinePlus />:<AiOutlineMinus />}
        </div>
      </header>
      {show && <p>{info}</p>}
      
    </div>
  );
};

export default Question;
