import Welcome from "./components/Welcome";

import iconSunDark from "./assets/images/icon-sun-dark.svg";
import iconMoonDark from "./assets/images/icon-moon-dark.svg";
import iconHTML from "./assets/images/icon-html.svg";
import iconCSS from "./assets/images/icon-css.svg";
import iconJS from "./assets/images/icon-js.svg";
import iconAccessibility from "./assets/images/icon-accessibility.svg";

function App() {
  return (
    <div className="h-screen flex flex-col md:justify-center p-8 max-w-4xl mx-auto">
      <div className="view-mode self-end flex">
        <img src={iconSunDark} alt="Icon Sun" className="light" />

        <label className="relative inline-flex items-center cursor-pointer ml-2">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="group peer ring-0 bg-purple-600  rounded-full outline-none duration-300 after:duration-300 w-12 h-7 shadow-md peer-checked:bg-purple-600  peer-focus:outline-none  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-5 after:w-5 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5  peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
        </label>
        <img src={iconMoonDark} alt="Icon Moon" className="dark ml-2" />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-12 md:gap-x-4 mt-10">
        <Welcome />
        <div className="quiz-list">
          <div className="quiz-group bg-white p-4 font-bold rounded-md flex items-center">
            <img
              src={iconHTML}
              alt=""
              className="quiz-icon bg-orange-100 p-1 w-10 h-10 rounded"
            />
            <p className="quiz-title ml-4 text-xl">HTML</p>
          </div>
          <div className="quiz-group bg-white p-4 font-bold rounded-md flex items-center mt-4">
            <img
              src={iconCSS}
              alt=""
              className="quiz-icon bg-green-100 p-1 w-10 h-10 rounded"
            />
            <p className="quiz-title ml-4 text-xl">CSS</p>
          </div>
          <div className="quiz-group bg-white p-4 font-bold rounded-md flex items-center mt-4">
            <img
              src={iconJS}
              alt=""
              className="quiz-icon bg-blue-100 p-1 w-10 h-10 rounded"
            />
            <p className="quiz-title ml-4 text-xl">JavaScript</p>
          </div>
          <div className="quiz-group bg-white p-4 font-bold rounded-md flex items-center mt-4">
            <img
              src={iconAccessibility}
              alt=""
              className="quiz-icon bg-purple-100 p-1 w-10 h-10 rounded"
            />
            <p className="quiz-title ml-4 text-xl">Accessibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
