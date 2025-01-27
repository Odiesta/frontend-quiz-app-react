/* eslint-disable react/prop-types */
import { useState } from "react";
import AnswerItem from "./AnswerItem";

export default function AnswerList({
  quizzes,
  onSetNumber,
  number,
  title,
  onSetScore,
  score,
}) {
  function handleScore(userChoice) {
    if (userChoice === currentQuiz.questions[number].answer) {
      onSetScore(() => score + 1);
    }
  }

  const currentQuiz = quizzes.filter((quiz) => quiz.title === title)[0];
  const currentAnswers = currentQuiz.questions[number].options;
  const options = ["A", "B", "C", "D"];

  const answers = currentAnswers.map((answer, i) => {
    const answerClass = i === 0 ? "" : "mt-4";

    return (
      <AnswerItem
        option={options[i]}
        value={answer}
        key={answer}
        answerClass={answerClass}
        onSetNumber={onSetNumber}
        onSetScore={handleScore}
      />
    );
  });

  return <div>{answers}</div>;
}
