/* eslint-disable react/prop-types */
export default function QuizItem({ icon, quiz, bgColor }) {
  const style = `quiz-icon p-1 w-10 h-10 rounded ${bgColor}`;

  return (
    <div className="quiz-group bg-white p-4 font-bold rounded-md flex items-center">
      <img src={icon} alt="" className={style} />
      <p className="quiz-title ml-4 text-xl">{quiz}</p>
    </div>
  );
}
