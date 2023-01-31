import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question {...question} key={question.id} />;
          })}
        </section>
      </div>{" "}
    </main>
  );
}

export default App;
