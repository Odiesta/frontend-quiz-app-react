import ViewMode from "./components/ViewMode";
import QuizList from "./components/QuizList";
import Question from "./components/Question";
import QuestionTopic from "./components/QuestionTopic";
import AnswerList from "./components/AnswerList";
import QuizComplete from "./components/QuizComplete";
import Welcome from "./components/Welcome";
import Score from "./components/Score";
import Button from "./components/Button.jsx";
import { useState } from "react";

import "./App.css";

import quizzes from "./data/data.js";

const newQuiz = quizzes.map((quiz) => {
  if (quiz.title === "HTML") {
    return { ...quiz, bgColor: "bg-orange-100" };
  } else if (quiz.title === "CSS") {
    return { ...quiz, bgColor: "bg-green-100" };
  } else if (quiz.title === "JavaScript") {
    return { ...quiz, bgColor: "bg-blue-100" };
  } else if (quiz.title === "Accessibility") {
    return { ...quiz, bgColor: "bg-purple-100" };
  }
});

function App() {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  function handleTitle(name) {
    setTitle(() => {
      return name;
    });
  }

  function handleSetNumber() {
    setNumber(() => number + 1);
  }

  function handlePlayAgain() {
    setTitle("");
    setNumber(0);
    setScore(0);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div className="bg-custom-light-grey font-rubik dark:bg-slate-700">
        <div className="mx-auto box-border flex min-h-screen max-w-4xl flex-col p-8 md:justify-center">
          <div className="mb-10 flex justify-between">
            {title && <QuestionTopic title={title} quizList={newQuiz} />}
            <ViewMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-x-4">
            {!title && (
              <>
                <Welcome />
                <QuizList quizList={newQuiz} onTitle={handleTitle} />
              </>
            )}
            {title && number < 10 && (
              <>
                <Question quizzes={newQuiz} number={number} title={title} />
                <AnswerList
                  quizzes={newQuiz}
                  onSetNumber={handleSetNumber}
                  number={number}
                  title={title}
                  onSetScore={setScore}
                  score={score}
                />
              </>
            )}

            {number >= 10 && (
              <>
                <QuizComplete />
                <Score score={score} title={title} quizList={newQuiz} />
                <Button value="Play Again" onClick={handlePlayAgain} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
