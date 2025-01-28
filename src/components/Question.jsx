/* eslint-disable react/prop-types */
export default function Question({ quizzes, number, title }) {
  const currentQuiz = quizzes.filter((quiz) => quiz.title === title)[0];
  const currentQuestion = currentQuiz.questions[number].question;
  console.log(number * 10);

  return (
    <div className="md:flex md:flex-col md:justify-between">
      <div>
        <p className="italic">Question {number + 1} of 10</p>
        <p className="mt-4 text-2xl font-semibold">{currentQuestion}</p>
      </div>
      <div className="mt-8 flex h-4 w-full items-center rounded-md bg-white">
        {/* progress bar */}
        <div
          className={`mx-1 h-2 rounded-md bg-violet-600`}
          style={{ width: `${(number + 1) * 10}%` }}
        ></div>
      </div>
    </div>
  );
}
