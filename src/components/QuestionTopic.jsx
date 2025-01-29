/* eslint-disable react/prop-types */
export default function QuestionTopic({ quizList, title }) {
  const quiz = quizList.filter((q) => q.title === title)[0];

  return (
    <div className="flex items-center">
      <img
        src={quiz.icon}
        alt=""
        className={`h-10 w-10 rounded ${quiz.bgColor} p-1`}
      />
      <p className="ml-4 text-xl font-medium dark:text-slate-100">
        {quiz.title}
      </p>
    </div>
  );
}
