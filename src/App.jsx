// import Welcome from "./components/Welcome";

import iconHTML from "./assets/images/icon-html.svg";
import iconCSS from "./assets/images/icon-css.svg";
import iconJS from "./assets/images/icon-js.svg";
import iconAccessibility from "./assets/images/icon-accessibility.svg";
import ViewMode from "./components/ViewMode";
import QuizList from "./components/QuizList";
import Question from "./components/Question";
import QuestionTopic from "./components/QuestionTopic";
import AnswerItem from "./components/AnswerItem";
import AnswerList from "./components/AnswerList";

const quizzes = [
  {
    icon: iconHTML,
    name: "HTML",
    bgColor: "bg-orange-100",
  },
  {
    icon: iconCSS,
    name: "CSS",
    bgColor: "bg-green-100",
  },
  {
    icon: iconJS,
    name: "JavaScript",
    bgColor: "bg-blue-100",
  },
  {
    icon: iconAccessibility,
    name: "Accessibility",
    bgColor: "bg-purple-100",
  },
];

const answers = [
  {
    option: "A",
    value: "4.5 : 1",
  },
  {
    option: "B",
    value: "3 : 1",
  },
  {
    option: "C",
    value: "2.5 : 1",
  },
  {
    option: "D",
    value: "5 : 1",
  },
];

function App() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col p-8 md:justify-center">
      <div className="flex justify-between">
        <QuestionTopic />
        <ViewMode />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4">
        <Question />
        {/* <QuizList quizList={quizzes} /> */}
        <AnswerList answerList={answers} />

        <div className="md:col-start-2">
          <button className="col-span-2 mt-4 w-full justify-self-end rounded-lg bg-violet-500 px-4 py-4 text-xl font-bold text-white">
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
