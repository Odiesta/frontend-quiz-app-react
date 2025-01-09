import QuizItem from "./QuizItem";

/* eslint-disable react/prop-types */
export default function QuizList({ quizList }) {
  const quizzes = quizList.map((quiz, i) => {
    const quizClass = i === 0 ? "" : "mt-4";

    return (
      <QuizItem
        icon={quiz.icon}
        name={quiz.name}
        bgColor={quiz.bgColor}
        quizClass={quizClass}
        key={quiz.name}
      />
    );
  });

  return <div>{quizzes}</div>;
}
