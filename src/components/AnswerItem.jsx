import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AnswerItem({
  answerObj,
  onSetChoice,
  onSelected,
  isSelected,
}) {
  const { answerClass, answer, option, id } = answerObj;

  const style = " border-solid border-violet-500";

  function handleClick() {
    onSetChoice(answer);
    onSelected(id);
  }

  return (
    <div
      className={`flex items-center rounded-2xl bg-white p-4 font-bold ${answerClass} group cursor-pointer border-2 ${isSelected ? style : "border-transparent"}`}
      onClick={handleClick}
    >
      <p
        className={`group-active: rounded bg-slate-100 px-2 py-1 text-xl text-slate-500 group-hover:bg-purple-100 group-hover:text-purple-500`}
      >
        {option}
      </p>
      <p className="quiz-title ml-4 text-xl">{answer}</p>
    </div>
  );
}
