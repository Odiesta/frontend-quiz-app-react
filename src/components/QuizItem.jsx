/* eslint-disable react/prop-types */
export default function QuizItem({
  icon,
  title,
  bgColor,
  quizClass = "",
  onTitle,
}) {
  const style = `quiz-icon p-1 w-10 h-10 rounded ${bgColor}`;

  return (
    <div
      className={`quiz-group flex items-center rounded-md bg-white p-4 font-bold dark:bg-slate-600 ${quizClass} cursor-pointer`}
      onClick={() => onTitle(title)}
    >
      <img src={icon} alt="" className={style} />
      <p className="quiz-title ml-4 text-xl dark:text-slate-100">{title}</p>
    </div>
  );
}
