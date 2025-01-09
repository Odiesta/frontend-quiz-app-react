/* eslint-disable react/prop-types */
export default function AnswerItem({ option, value, answerClass = "" }) {
  return (
    <div
      className={`flex items-center rounded-md bg-white p-4 font-bold ${answerClass}`}
    >
      <p className="rounded bg-slate-100 px-2 py-1 text-xl text-slate-500">
        {option}
      </p>
      <p className="quiz-title ml-4 text-xl">{value}</p>
    </div>
  );
}
