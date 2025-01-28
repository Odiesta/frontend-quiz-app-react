/* eslint-disable react/prop-types */

import iconCorrect from "../assets/images/icon-correct.svg";
import iconIncorrect from "../assets/images/icon-incorrect.svg";

export default function AnswerItem({
  answerObj,
  onSetChoice,
  onSelected,
  isSelected,
  correctAnswer,
  submitted,
}) {
  const { answerClass, answer, option, id } = answerObj;
  const selectedSubmittedCorrectAnswer =
    answer === correctAnswer && submitted && isSelected;
  const selectedSubmittedIncorrectAnswer =
    answer !== correctAnswer && submitted && isSelected;

  const selectedStyle = "border-solid border-violet-500";
  const correctStyle = "border-solid border-green-500";
  const wrongStyle = "border-solid border-red-500";
  const paragraphStyle =
    "text-white bg-violet-500 group-hover:text-white group-hover:bg-violet-500";

  function handleClick() {
    onSetChoice(answer);
    onSelected(id);
  }

  return (
    <div
      className={`flex items-center rounded-2xl bg-white p-4 font-bold dark:bg-slate-600 ${answerClass} group cursor-pointer border-2 ${isSelected ? selectedStyle : "border-transparent"} ${selectedSubmittedCorrectAnswer ? correctStyle : ""} ${selectedSubmittedIncorrectAnswer ? wrongStyle : ""}`}
      onClick={handleClick}
    >
      <p
        className={`group-active: rounded bg-slate-100 px-3 py-1 text-xl text-slate-500 group-hover:bg-purple-100 group-hover:text-purple-500 ${isSelected ? paragraphStyle : ""} ${selectedSubmittedCorrectAnswer ? "bg-green-500 group-hover:bg-green-500" : ""} ${selectedSubmittedIncorrectAnswer ? "bg-red-500 group-hover:bg-red-500" : ""}`}
      >
        {option}
      </p>
      <p className="quiz-title mx-4 w-4/5 text-xl dark:text-slate-100">
        {answer}
      </p>
      {answer === correctAnswer && submitted && (
        <img className="inline" src={iconCorrect} />
      )}
      {selectedSubmittedIncorrectAnswer && (
        <img className="inline" src={iconIncorrect} />
      )}
    </div>
  );
}
