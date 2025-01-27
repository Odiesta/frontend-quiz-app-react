import QuizItem from "./QuizItem";

/* eslint-disable react/prop-types */
export default function QuizList({ quizList, onTitle }) {
  const quizzes = quizList.map((quiz, i) => {
    const quizClass = i === 0 ? "" : "mt-4";

    return (
      <QuizItem
        icon={quiz.icon}
        title={quiz.title}
        bgColor={quiz.bgColor}
        quizClass={quizClass}
        key={quiz.title}
        onTitle={onTitle}
      />
    );
  });

  return <div>{quizzes}</div>;
}
