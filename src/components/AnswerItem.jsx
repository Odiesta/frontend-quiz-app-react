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

  const selectedStyle = "border-solid border-custom-purple";
  const correctStyle = "border-solid border-custom-correct";
  const wrongStyle = "border-solid border-custom-incorrect";

  const selectedParagraphStyle =
    "text-white bg-custom-purple group-hover:text-white group-hover:bg-custom-purple";
  const correctParagraphStyle =
    "bg-custom-correct group-hover:bg-custom-correct text-white";
  const wrongParagraphStyle =
    "bg-custom-incorrect group-hover:bg-custom-incorrect text-white";

  let borderStyle;
  let paragraphStyle;

  if (selectedSubmittedCorrectAnswer) {
    borderStyle = correctStyle;
    paragraphStyle = correctParagraphStyle;
  } else if (selectedSubmittedIncorrectAnswer) {
    borderStyle = wrongStyle;
    paragraphStyle = wrongParagraphStyle;
  } else if (isSelected) {
    borderStyle = selectedStyle;
    paragraphStyle = selectedParagraphStyle;
  } else {
    borderStyle = "border-transparent";
    paragraphStyle =
      "bg-slate-100 group-hover:text-purple-500 group-hover:bg-purple-100";
  }

  function handleClick() {
    onSetChoice(answer);
    onSelected(id);
  }

  return (
    <div
      className={`flex items-center rounded-2xl bg-white p-4 font-bold shadow-sm dark:bg-slate-600 ${answerClass} group cursor-pointer border-2 md:h-24 ${borderStyle} font-medium`}
      onClick={handleClick}
    >
      <p
        className={`text-md rounded px-3 py-1 text-slate-500 md:text-xl ${paragraphStyle}`}
      >
        {option}
      </p>
      <p className="quiz-title text-md mx-4 w-4/5 dark:text-slate-100 md:text-xl">
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
