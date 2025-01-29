/* eslint-disable react/prop-types */
export default function Question({ quizzes, number, title }) {
  const currentQuiz = quizzes.filter((quiz) => quiz.title === title)[0];
  const currentQuestion = currentQuiz.questions[number].question;
  console.log(number * 10);

  return (
    <div className="dark:text-slate-100 md:flex md:flex-col md:justify-between">
      <div>
        <p className="text-custom-grey dark:text-custom-light-blue italic">
          Question {number + 1} of 10
        </p>
        <p className="mt-4 text-2xl font-medium text-black dark:text-slate-100">
          {currentQuestion}
        </p>
      </div>
      <div className="my-8 flex h-4 w-full items-center rounded-md bg-white dark:bg-slate-600 md:my-0">
        {/* progress bar */}
        <div
          className={`bg-custom-purple mx-1 h-2 rounded-md`}
          style={{ width: `${(number + 1) * 10}%` }}
        ></div>
      </div>
    </div>
  );
}
