/* eslint-disable react/prop-types */
import { useState } from "react";
import AnswerItem from "./AnswerItem";
import Button from "./Button";

export default function AnswerList({
  quizzes,
  onSetNumber,
  number,
  title,
  onSetScore,
  score,
}) {
  const currentQuiz = quizzes.filter((quiz) => quiz.title === title)[0];
  const currentAnswers = currentQuiz.questions[number].options;
  const options = ["A", "B", "C", "D"];

  const [choice, setChoice] = useState("");
  const [isSelected, setIsSelected] = useState([false, false, false, false]);
  let answers = currentAnswers.map((answer, i) => {
    const answerClass = i === 0 ? "" : "mt-4";
    return {
      id: options[i],
      answerClass,
      answer: answer,
      option: options[i],
      isSelected: false,
    };
  });

  function handleScore() {
    if (choice === currentQuiz.questions[number].answer) {
      onSetScore(() => score + 1);
    }
    onSetNumber();
    setIsSelected(isSelected.map(() => false));
  }

  function handleSelected(id) {
    setIsSelected(
      isSelected
        .map(() => {
          return false;
        })
        .map((_, i) => {
          if (answers[i].id === id) {
            return true;
          } else {
            return false;
          }
        }),
    );
  }

  return (
    <div>
      {answers.map((answer, i) => (
        <AnswerItem
          answerObj={answer}
          key={answer.answer}
          onSetChoice={(val) => setChoice(val)}
          onSelected={handleSelected}
          isSelected={isSelected[i]}
        />
      ))}
      <Button value="Submit Answer" onClick={handleScore} />
    </div>
  );
}
