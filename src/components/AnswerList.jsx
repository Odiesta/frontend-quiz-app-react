/* eslint-disable react/prop-types */
import { useState } from "react";
import AnswerItem from "./AnswerItem";
import Button from "./Button";
import iconError from "../assets/images/icon-error.svg";

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
  const correctAnswer = currentQuiz.questions[number].answer;
  const options = ["A", "B", "C", "D"];

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
    if (!choice) {
      setError(true);
      return;
    }
    setError(false);
    if (choice === correctAnswer) {
      onSetScore(() => score + 1);
    }
    setSubmitted(!submitted);
  }

  function handleNextQuestion() {
    onSetNumber();
    setIsSelected(isSelected.map(() => false));
    setSubmitted(!submitted);
    setChoice("");
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
          correctAnswer={correctAnswer}
          submitted={submitted}
        />
      ))}
      {!submitted && <Button value="Submit Answer" onClick={handleScore} />}
      {submitted && (
        <Button value="Next Question" onClick={handleNextQuestion} />
      )}
      {!choice && error && (
        <p className="mt-4 text-center text-red-600">
          <img className="inline" src={iconError} /> Please select an answer
        </p>
      )}
    </div>
  );
}
