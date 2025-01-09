/* eslint-disable react/prop-types */
import AnswerItem from "./AnswerItem";

export default function AnswerList({ answerList }) {
  const answers = answerList.map((answer, i) => {
    const answerClass = i === 0 ? "" : "mt-4";

    return (
      <AnswerItem
        option={answer.option}
        value={answer.value}
        key={answer.value}
        answerClass={answerClass}
      />
    );
  });

  return <div>{answers}</div>;
}
